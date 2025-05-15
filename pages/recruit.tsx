import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';

const Recruit: NextPage = () => {
  return (
    <Layout
      title="求人情報"
      description="川西市 アステ川西内のカフェ「スフレ専門店 ナッツベリー」の求人情報"
    >
      <motion.div
        initial={{ opacity: 0 }} // initial
        animate={{ opacity: 1 }} // on mount
        exit={{ opacity: 0 }} // on unmount
      >
        <div className="flex justify-center mt-8">
          <Image
            src="/images/souffle/img_kitchen.jpg"
            width={800}
            height={560}
            alt="カフェ ナッツベリーのキッチン"
            className="rounded-xl"
          />
        </div>
        <div className="flex justify-center mt-8">
          <Image
            src="/images/souffle/recruit_catch.png"
            width={242}
            height={66}
            alt="わたしたちと一緒に働きませんか？"
            className="rounded-xl"
          />
        </div>
        {/* <p className="text-center mb-10">現在は募集しておりません。</p> */}
        <p className="lead mx-auto mt-4 max-w-xl text-center text-primary-700">
          現在、スフレ専門店
          ナッツベリーでは、以下の職種を募集しています。面接ご希望の方は、電話又は
          <Link href="inquiry" className="text-primary-400 no-underline">お問合せフォーム</Link>{" "}
          よりご連絡ください。
        </p>

        <div className="mx-auto max-w-xl">
          <ul className="mt-8 list-square font-bold marker:text-secondary-400 md:mt-12 md:text-lg md:leading-8">
            <li>未経験者歓迎！</li>
            <li>週3日～でOK！曜日・時間相談可</li>
            <li>スフレ・調理師免許に興味のある方大歓迎！</li>
          </ul>
        </div>

        <section className="py-12">
          <h2 className="header-deco text-center text-lg tracking-widest">
            募集要項
          </h2>
          
          <div className="flex flex-col gap-6 max-w-2xl mx-auto mt-10">
            <div className="rounded-xl border border-dashed border-primary-200 bg-white/50 p-4 md:p-8">
              <h3 className="text-lg text-primary">職種</h3>
              <p>ホール・キッチンスタッフ</p>
              <h3 className="mt-3 text-lg text-primary">雇用形態</h3>
              <p>アルバイト・パート</p>
              <h3 className="mt-3 text-lg text-primary">勤務時間</h3>
              <ul className="list-square pl-4 marker:text-secondary-300">
                <li>8:30～21:30 (シフト交代制)</li>
                <li>週5日以上のレギュラー勤務歓迎</li>
                <li>時間・曜日応相談</li>
                <li>1日5h～、週3・4日の勤務もOK</li>
              </ul>
              <h3 className="mt-3 text-lg text-primary">給与</h3>
              <p>時給 1,100円以上</p>
              <h3 className="mt-3 text-lg text-primary">その他</h3>
              <ul className="list-square pl-4 marker:text-secondary-300">
                <li>交通費支給</li>
                <li>制服貸与</li>
                <li>高校生不可</li>
              </ul>
            </div>
            
            <div className="rounded bg-craft p-5 text-center shadow">
              <h2 className="text-lg text-primary">
                電話かメールフォームから
                <br />
                お問合せください
              </h2>
              <p className="mt-2 text-2xl">
                <b>072-755-2254</b>
              </p>
              <p className="mt-0">受付時間 9:00～21:00</p>
              <Link href="inquiry" className="btn btn-primary mt-3 rounded">
                お問合せフォーム
              </Link>
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};

export default Recruit;
