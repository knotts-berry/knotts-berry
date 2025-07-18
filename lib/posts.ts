import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type PostData = {
  id: string;
  date: string;
  title: string;
};

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData(): PostData[] {
  // Get file names under /posts
  const fileNames = fs.existsSync(postsDirectory) 
    ? fs.readdirSync(postsDirectory).filter(fileName => fileName.endsWith('.md'))
    : [];
    
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
