import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="site-footer mt-12">
      <div className="footer-shop-information alignfull bg-primary-100 py-16 text-primary-700">
        <div className="container max-w-5xl">
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 lg:grid-cols-5 lg:justify-center">
            <div className="lg:col-span-3 lg:text-right">
              <Image
                src="/images/souffle/nattsberry_inside.jpg"
                width={500}
                height={333}
                layout="responsive"
                alt="川西市のスフレ専門店 ナッツベリー 店内"
                className="footer-shop-image"
              />
            </div>
            <div className="mt-4 flex flex-col items-center justify-center text-center md:mt-0 lg:col-span-2">
              <Image
                src="/images/souffle/logo.png"
                width={140}
                height={47}
                alt="Knott's Berry"
                className="logo site-branding"
              />
              <p className="-mt-2 text-[10px] font-bold text-primary">
                スフレ専門店 ナッツベリー
              </p>
              <address className="mt-4 inline-block not-italic text-center">
                <p>
                  電話番号{' '}
                  <b className="text-lg">
                    <a href="tel:0727552254" className="text-primary-800">
                      072-755-2254
                    </a>
                  </b>
                  <br />
                  営業時間 <b className="text-lg">10:00～19:00</b>
                </p>
                <p className="mt-0 text-xs">ラストオーダー 18:30</p>
                休業日{' '}
                <a
                  href="https://www.astekawanishi.com/sales/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-800 underline"
                >
                  アステ川西の休館日
                </a>
                に準じます
                <p className="mt-3 leading-snug">
                  住所 兵庫県川西市栄町25番1号
                  <br />
                  アステ川西 TENPO175 248号
                </p>
                <p className="mt-1 text-xs">
                  阪急川西能勢口駅より徒歩２分
                  <br />
                  JR川西池田駅より徒歩４分
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-menu alignfull pt-3 pb-5 text-center text-xs md:text-sm">
        <ul className="inline-flex flex-wrap justify-center gap-5">
          <li>
            <Link href="/" className="text-primary-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="recipe-development" className="text-primary-600">
              スフレをメニューにしたい方へ
            </Link>
          </li>
          <li>
            <Link href="recruit" className="text-primary-600">求人情報</Link>
          </li>
          <li>
            <Link href="privacy-policy" className="text-primary-600">
              個人情報保護方針
            </Link>
          </li>
          <li>
            <Link href="inquiry" className="text-primary-600">
              お問合せ
            </Link>
          </li>
        </ul>
      </div>

      <p className="copyright alignfull bg-primary py-3 text-center text-xs text-primary-200">
        &copy; 2025 Knott&apos;s Berry
      </p>
    </footer>
  );
};

export default Footer;
