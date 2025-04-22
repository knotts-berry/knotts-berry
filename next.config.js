/** @type {import('next').NextConfig} */
const nextConfig = {
  // 開発およびプロダクションモードで厳格な型チェックを有効化
  reactStrictMode: true,

  // 画像最適化の設定
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
    // 画質とパフォーマンスのバランスを最適化
    formats: ['image/avif', 'image/webp'],
  },

  // パフォーマンス最適化
  compiler: {
    // 不要なReact PropsをDOMから削除（本番環境のみ）
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // 生成された出力のカスタマイズ
  poweredByHeader: false,
};

module.exports = nextConfig;
