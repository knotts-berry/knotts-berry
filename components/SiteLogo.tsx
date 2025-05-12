import Image from 'next/image';
import Link from 'next/link';

type Props = {
  home?: boolean;
};

const SiteLogo = ({ home }: Props) => {
  return (
    <>
      {home ? (
        <h1 className="site-title order-2 flex flex-col items-center text-xs font-normal" aria-label="Brand">
          <Image
            src="/images/souffle/logo.png"
            width={168}
            height={56}
            alt="Knott's Berry"
            className="logo site-branding"
            priority
            quality={90}
          />
          スフレ専門店 ナッツベリー
        </h1>
      ) : (
        <p className="site-title order-2 flex flex-col items-center text-xs font-normal" aria-label="Brand">
          <Link href="/" className="flex flex-col items-center">
            <Image
              src="/images/souffle/logo.png"
              width={140}
              height={47}
              alt="Knott's Berry"
              className="logo site-branding"
              priority
              quality={90}
            />
            スフレ専門店 ナッツベリー
          </Link>
        </p>
      )}
    </>
  );
};

export default SiteLogo;
