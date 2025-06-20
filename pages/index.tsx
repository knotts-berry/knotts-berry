import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import FadeIn from '../components/FadeIn';
import FloatingAnimation from '../components/FloatingAnimation';
import Layout from '../components/layout';

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  const isMobile: boolean = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <Layout
          title="兵庫県川西市のスフレ専門店＆カフェ「ナッツベリー」"
          description="スフレ専門店「ナッツベリー」。カフェでは様々なメニューをお召し上がりいただけます。能勢電鉄/阪急電車「川西能勢口駅」から徒歩3分 (アステ川西2階)"
          home
        >
          <motion.div
            initial={{ opacity: 0 }} // initial
            animate={{ opacity: 1 }} // on mount
            exit={{ opacity: 0 }} // on unmount
          >
            {(() => {
              if (isMobile) {
                return (
                  <div className="hero-image alignfull mt-8 p-3">
                    <Image
                      src="/images/souffle/main.png"
                      width={733}
                      height={876}
                      alt="スフレ"
                      quality={85}
                      priority
                    />
                  </div>
                );
              } else {
                return (
                  <div className="hero-image alignfull mt-8 flex justify-center">
                    <Image
                      src="/images/souffle/main_lg.png"
                      width={1800}
                      height={733}
                      alt="スフレ"
                      priority
                    />
                  </div>
                );
              }
            })()}

            <p className="home-catch mt-12 flex justify-center">
              <Image
                src="/images/souffle/top_catch.png"
                width={280}
                height={94}
                alt="あつあつ、ふわふわ。まるで夢を食べているような特別なスフレケーキ"
              />
            </p>
            <p className="lead mx-auto max-w-xl">
              オーダーを聞いてからつくる、熱々のとろける新感覚デザート。憧れの人と一緒にナッツベリーのスフレを食べれば、映画「麗しのサブリナ」のオードリー・ヘップバーンのように素敵な恋に落ちるかも…
            </p>

            <section className="feature py-16">
              <div className="fadein-images grid flex-row gap-12 sm:grid-cols-3 sm:flex-col sm:gap-8 lg:gap-12">
                <div className="grid__item">
                  <div className="media--mobile-2col flex flex-col items-center">
                    <FadeIn>
                      <FloatingAnimation>
                        <Image
                          src="/images/souffle/feature_dough.png"
                          width={403}
                          height={333}
                          alt="スフレ生地へのこだわり"
                          className="media__img"
                        />
                      </FloatingAnimation>
                    </FadeIn>
                    <div className="media__body mt-3">
                      <p className="feature__sholder flex justify-center text-sm text-secondary">
                        感動の理由 １
                      </p>
                      <p className="feature__title mt-1 flex justify-center text-lg font-bold tracking-widest">
                        <b className="font-serif text-2xl text-primary">生地</b>
                        へのこだわり
                      </p>
                      <p className="feature__body tracking-wide">
                        温度管理をしながら、やさしく生地を混ぜ続ける。職人技で作る生地は絶品です。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid__item">
                  <div className="media--mobile-2col media--mobile--inverse flex flex-col items-center">
                    <FadeIn delay={isMobile ? 0 : 0.5}>
                      <FloatingAnimation delay={0.4} amount={10}>
                        <Image
                          src="/images/souffle/feature_bake.png"
                          width={403}
                          height={333}
                          alt="スフレの焼きへのこだわり"
                          className="media__img"
                        />
                      </FloatingAnimation>
                    </FadeIn>
                    <div className="media__body mt-3">
                      <p className="feature__sholder flex justify-center text-sm text-secondary">
                        感動の理由 2
                      </p>
                      <p className="feature__title mt-1 flex justify-center text-lg font-bold tracking-widest">
                        <b className="font-serif text-2xl text-primary">焼き</b>
                        へのこだわり
                      </p>
                      <p className="feature__body tracking-wide">
                        美味しいスフレのために、ナッツベリーが独自開発した「特別なオーブン」でじっくりと焼き上げます。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid__item">
                  <div className="media--mobile-2col flex flex-col items-center">
                    <FadeIn delay={isMobile ? 0 : 1}>
                      <FloatingAnimation delay={0.8} amount={12}>
                        <Image
                          src="/images/souffle/feature_serve.png"
                          width={403}
                          height={333}
                          alt="３分以内が食べごろ"
                          className="media__img"
                        />
                      </FloatingAnimation>
                    </FadeIn>
                    <div className="media__body mt-3">
                      <p className="feature__sholder flex justify-center text-sm text-secondary">
                        感動の理由 3
                      </p>
                      <p className="feature__title mt-1 flex justify-center text-lg font-bold tracking-widest">
                        食べごろ
                        <b className="font-serif text-2xl text-primary">３分以内</b>
                      </p>
                      <p className="feature__body tracking-wide">
                        できたて熱々が食べごろ。冷めると萎んでしまうから、ナッツベリーの店舗でしか食べることができません。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="pickup-menu" className="pickup-menu alignfull relative bg-craft py-16">
              <div className="container">
                <div className="flex flex-col items-center">
                  <h2 className="flex flex-col items-center text-xs font-normal tracking-wide">
                    <Image
                      src="/images/souffle/header_menu.png"
                      width={98}
                      height={28}
                      alt="Menu"
                      className="header-above-image"
                    />
                    スフレ メニュー
                  </h2>
                  <p className="inline-block bg-white mt-3 px-3 text-xs text-primary">
                    アレルギー表示：卵、小麦、乳、一部落花生
                  </p>

                  <div className="mt-8 p-4 bg-white shadow max-w-lg mx-auto rounded-lg">
                    <h3 className="menu__title mt-2 flex justify-center text-lg text-primary">
                      ドリンク付きセットメニュー
                    </h3>
                    <p className="menu__body mt-2 text-sm leading-relaxed tracking-widest">
                      セットメニューには、コーヒー、紅茶、ハーブティーのいずれかのドリンクが付きます。
                    </p>
                    <div className="grid__item md:flex md:flex-row gap-4">
                      <div className="md:w-2/5 md:flex md:items-center">
                        <p>
                          <Image
                            src="/images/souffle/drink-set-menu.jpg"
                            width={450}
                            height={300}
                            alt="ドリンク付きのセットメニュー"
                            className="souffle-item mx-auto rounded-lg"
                          />
                        </p>
                      </div>
                      <div className="p-2 md:w-3/5 md:flex md:flex-col md:justify-center">
                        <ul className="mt-2 list-inside list-disc text-sm font-bold text-primary marker:text-secondary-200">
                          <li>
                            ホットコーヒー<small>(ライト/ミドル)</small>
                          </li>
                          <li>アイスコーヒー</li>
                          <li>
                            カフェオレ<small> (Hot/Ice)</small>
                          </li>
                          <li>
                            カフェラテ<small> (Hot/Ice)</small>
                          </li>
                          <li>
                            本日の紅茶<small> (Hot/Ice)</small>
                          </li>
                          <li>
                            ハーブティー<small> (Hot のみ)</small>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="flex flex-col items-center max-w-md mx-auto">
                  <h3 className="text-center mt-12 text-xl font-bold tracking-widest text-primary">
                    <small>焼きたて、ふわふわ</small><br />とろけるスフレケーキ
                  </h3>
                  <p className="mt-2 text-center">
                    ご注文をいただいてから作ります。<br />焼き上がりまで15〜20分ちょうだいいたします。
                  </p>
                  <p className="mt-0 text-sm">(混雑時にはさらにお時間がかかる場合があります)</p>
                </div>

                <div className="mt-8 grid gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 md:px-0">
                  <div className="grid__item">
                    <FadeIn>
                      <div className="image-with-border flex justify-center">
                        <Image
                          src="/images/souffle/souffle_strawberry.jpg"
                          width={450}
                          height={300}
                          alt="いちごのスフレケーキ"
                          className="souffle-item rounded-lg"
                        />
                      </div>
                    </FadeIn>
                    <h3 className="menu__title mt-2 flex justify-center text-lg text-primary">
                      いちごのスフレケーキ
                    </h3>
                    <p className="menu__price flex justify-center text-xs">単品 960円/セット1,430円</p>
                    <p className="menu__body mt-2 text-sm leading-relaxed tracking-widest">
                      いちご農園ICHIJYUさんのジャムをたっぷり使った季節限定のスフレ。
                    </p>
                  </div>
                  <div className="grid__item">
                    <FadeIn>
                      <div className="image-with-border flex justify-center">
                        <Image
                          src="/images/souffle/souffle_apple.jpg"
                          width={450}
                          height={300}
                          alt="りんごのスフレケーキ"
                          className="souffle-item rounded-lg"
                        />
                      </div>
                    </FadeIn>
                    <h3 className="menu__title mt-2 flex justify-center text-lg text-primary">
                      りんごのスフレケーキ
                    </h3>
                    <p className="menu__price flex justify-center text-xs">単品 960円/セット1,430円</p>
                    <p className="menu__body mt-2 text-sm leading-relaxed tracking-widest">
                      自家製りんごジャムをたっぷり使った冬限定のスフレ。
                    </p>
                  </div>

                  <div className="grid__item">
                    <FadeIn>
                      <div className="image-with-border flex justify-center">
                        <Image
                          src="/images/souffle/souffle_cheese.jpg"
                          width={450}
                          height={300}
                          alt="チーズスフレ"
                          className="souffle-item rounded-lg"
                        />
                      </div>
                    </FadeIn>
                    <h3 className="menu__title mt-2 flex justify-center text-lg text-primary">
                      チーズスフレ
                    </h3>
                    <p className="menu__price flex justify-center text-xs">単品 850円/セット1,330円</p>
                    <p className="menu__body mt-2 text-sm leading-relaxed tracking-widest">
                      甘さを抑えたさわやかスフレです。デンマーク産の高級クリームチーズをたっぷり使った自慢の逸品です。
                    </p>
                  </div>
                  <div className="grid__item">
                    <FadeIn delay={isMobile ? 0 : 0.25}>
                      <div className="image-with-border flex justify-center">
                        <Image
                          src="/images/souffle/souffle_chocolate.jpg"
                          width={450}
                          height={300}
                          alt="ショコラスフレ"
                          className="souffle-item rounded-lg"
                        />
                      </div>
                    </FadeIn>
                    <h3 className="menu__title mt-2 flex justify-center text-lg text-primary">
                      ショコラスフレ
                    </h3>
                    <p className="menu__price flex justify-center text-xs">単品 980円/セット1,450円</p>
                    <p className="menu__body mt-2 text-sm leading-relaxed tracking-widest">
                      思わず笑みがこぼれちゃう！チョコレートシロップはこだわりの純チョコレート。高品質カカオ64%使用で、ちょっぴり大人な味です。
                    </p>
                  </div>
                  <div className="grid__item">
                    <FadeIn delay={isMobile ? 0 : 0.5}>
                      <div className="image-with-border flex justify-center">
                        <Image
                          src="/images/souffle/souffle_maple.jpg"
                          width={450}
                          height={300}
                          alt="メープルスフレ"
                          className="souffle-item rounded-lg"
                        />
                      </div>
                    </FadeIn>
                    <h3 className="menu__title mt-2 flex justify-center text-lg text-primary">
                      メープルスフレ
                    </h3>
                    <p className="menu__price flex justify-center text-xs">単品 930円/セット1,400円</p>
                    <p className="menu__body mt-2 text-sm leading-relaxed tracking-widest">
                      メープル好きにはたまらない！メープルをたっぷり入れて焼き上げた風味豊かな優しい味のスフレです。
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center mt-12 max-w-md mx-auto">
                  <h3 className="text-center mt-8 text-xl font-bold tracking-widest text-primary">
                    <small>お待たせしない</small><br />「しっとり」スフレケーキ
                  </h3>
                  <p className="mt-2 text-center">
                    あらかじめ焼き上げたスフレケーキにアイスを添えて。<br />
                    しっとり食感をお楽しみください。
                  </p>
                  <p className="mt-0 text-sm font-bold">(12:00から提供開始 数量限定／なくなり次第終了)</p>
                </div>

                <div className="mt-8 grid gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 md:px-0">

                  <div className="grid__item">
                    <FadeIn delay={isMobile ? 0 : 0.5}>
                      <div className="image-with-border flex justify-center">
                        <Image
                          src="/images/souffle/souffle_sittori_strawberry.jpg"
                          width={450}
                          height={300}
                          alt="『いちご農園ICHIJYU』コラボスフレ"
                          className="souffle-item rounded-lg"
                        />
                      </div>
                    </FadeIn>
                    <h3 className="menu__title mt-2 flex justify-center text-lg text-primary">
                      『いちご農園ICHIJYU』コラボスフレ(季節限定)
                    </h3>
                    <p className="menu__price flex justify-center text-xs">単品 1,010円/セット1,480円</p>
                    <p className="menu__body mt-2 text-sm leading-relaxed tracking-widest">
                      いちご農園ICHIJYUさんのジャムをたっぷり使ったプレミアムいちごスフレ。1日10食限定販売となりますので、お早めにご来店ください。
                    </p>
                  </div>
<div className="grid__item">
                    <FadeIn delay={isMobile ? 0 : 0.5}>
                      <div className="image-with-border flex justify-center">
                        <Image
                          src="/images/souffle/souffle_sittori_cheeze_chocola.jpg"
                          width={450}
                          height={300}
                          alt="チーズスフレケーキ チョコレートソース"
                          className="souffle-item rounded-lg"
                        />
                      </div>
                    </FadeIn>
                    <h3 className="menu__title mt-2 flex justify-center text-lg text-primary">
                      しっとりプレミアムスフレ
                    </h3>
                    <p className="menu__price flex justify-center text-xs">880円〜</p>
                    <p className="menu__body mt-2 text-sm leading-relaxed tracking-widest">
                      濃厚なチーズスフレに、ベルギー産チョコレートソースをとろりとかけて仕上げました。チーズのコクとチョコのほろ苦さが絶妙にマッチした贅沢な一皿です。
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center mt-12 max-w-md mx-auto">
                  <h3 className="text-center mt-8 text-xl font-bold tracking-widest text-primary">
                    サンドイッチ、ドリンクメニュー
                  </h3>
                  <p className="mt-2 text-center">
                    美味しいサンドイッチやドリンクなどをご用意しております。<br />
                    ゆったりとした店内で、くつろぎの一時をお過ごしください。
                  </p>
                </div>

                <div className="mt-8 grid gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 md:px-0">

                                    <div className="grid__item">
                    <FadeIn delay={isMobile ? 0 : 1.25}>
                      <div className="image-with-border flex justify-center">
                        <Image
                          src="/images/souffle/mix-sandwitch.jpg"
                          width={450}
                          height={300}
                          alt="ミックスサンド"
                          className="souffle-item rounded-lg"
                        />
                      </div>
                    </FadeIn>
                    <h3 className="menu__title mt-2 flex justify-center text-lg text-primary">
                      ハーフミックスサンド
                    </h3>
                    <p className="menu__price flex justify-center text-xs">800円〜</p>
                    <p className="menu__body mt-2 text-sm leading-relaxed tracking-widest">
                      スープやドレッシングも手作りにこだわった美味しいサンドイッチ。他にミックスサンド、チキンサンド、ワンプレートチキンサンドがございます。
                    </p>
                  </div>
                  <div className="grid__item">
                    <FadeIn delay={isMobile ? 0 : 1.5}>
                      <div className="image-with-border flex justify-center">
                        <Image
                          src="/images/souffle/hot-chocolate.jpg"
                          width={450}
                          height={300}
                          alt="ホットチョコレート"
                          className="souffle-item rounded-lg"
                        />
                      </div>
                    </FadeIn>
                    <h3 className="menu__title mt-2 flex justify-center text-lg text-primary">
                      ドリンクメニュー
                    </h3>
                    <p className="menu__price flex justify-center text-xs">530円〜</p>
                    <p className="menu__body mt-2 text-sm leading-relaxed tracking-widest">
                      コーヒー、紅茶、ハーブティ、ジュース、フロートなど、多種多様のドリンクを提供しています。
                    </p>
                    <div className="group relative inline-block w-full">
                      <button
                        type="button"
                        className="mt-2 flex w-full justify-center text-sm font-bold cursor-pointer"
                        aria-label="ドリンクメニューを表示"
                      >
                        » ドリンクメニューを見る
                      </button>
                      <div
                        className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-1/2 z-10 bottom-full mb-2 -translate-x-1/2 transform rounded-lg border border-dashed border-primary-200 bg-white bg-paper text-left shadow-md transition-opacity duration-300"
                        role="tooltip"
                        style={{ minWidth: '360px' }}
                      >
                        <div className="px-4 pt-4 flex justify-center text-lg font-bold tracking-wider text-primary underline">
                          Drink Menu
                        </div>
                        <div className="py-3 px-4 text-gray-600">
                          <dl>
                            <dt className="pt-3 font-bold text-secondary-500 first:pt-0">
                              Coffee:
                            </dt>
                            <dd className="text-sm text-gray-600">
                              ライト(アメリカン)、ミドル(ブレンド)、ヘビー(濃いブレンド)、ストロング(エスプレッソ)、アイスコーヒー、カフェオレ(Hot/Ice)、カフェラテ(Hot/Ice)、ウインナーコーヒー(Hot/Ice)
                            </dd>
                            <dt className="pt-3 font-bold text-secondary-500 first:pt-0">Tea:</dt>
                            <dd className="text-sm text-gray-600">
                              シンガンパティ(Hot/Ice)、アールグレイ(Hot/Ice)、ダージリン(Hot/Ice)、ハーブティー(Hot)
                            </dd>
                            <dt className="pt-3 font-bold text-secondary-500 first:pt-0">Juice:</dt>
                            <dd className="text-sm text-gray-600">
                              100%生搾りオレンジ、100%すりおろしリンゴ、生搾りレモンスカッシュ、マンゴージュース、コーラ、ジンジャーエール
                            </dd>
                            <dt className="pt-3 font-bold text-secondary-500 first:pt-0">Float:</dt>
                            <dd className="text-sm text-gray-600">
                              コーヒーフロート、メロンフロート、いちごフロート、ラムネフロート、コーラフロート、ジンジャーフロート
                            </dd>
                            <dt className="pt-3 font-bold text-secondary-500 first:pt-0">
                              Others:
                            </dt>
                            <dd className="text-sm text-gray-600">
                              ミルク(Hot/Ice)、ホットチョコレート(カカオ64%)、バニラアイスクリーム
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="takeout" className="takeout py-16">
              <div className="container px-0">
                <h2 className="header-deco flex flex-col items-center text-xs font-normal tracking-wide">
                  <Image
                    src="/images/souffle/header_takeout.png"
                    width={147}
                    height={29}
                    alt="Takeout"
                    className="header-above-image"
                  />
                  テイクアウト
                </h2>
                <div className="mt-10 items-center lg:grid lg:grid-cols-5 lg:gap-12">
                  <div className="col-span-3 flex flex-col items-center">
                    <div className="takeout-images mx-auto max-w-xl">
                      <FadeIn>
                        <Image
                          src="/images/souffle/takeout-images.jpg"
                          width={600}
                          height={680}
                          layout="responsive"
                          alt="テイクアウト(サンドイッチ、店頭)"
                          className="takeout-image"
                        />
                      </FadeIn>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-xl tracking-widest text-primary">サンドイッチ</h3>
                    <p className="mt-2">
                      テイクアウトのサンドイッチ2種類。セットはドリンク付き。ランチタイムやお帰りの際に、ぜひご利用くださいませ。
                    </p>
                    <p className="mt-0 text-sm">
                      (ショーケースの中に商品が無くてもお作りできますので、お気軽にお声がけ下さい)
                    </p>
                    <ul className="mt-3 list-inside list-square font-bold marker:text-primary-200">
                      <li>
                        ミックスサンド{' '}
                        <small className="font-normal">単品 680円 / セット 1,000円</small>
                      </li>
                      <li>
                        チキンサンド{' '}
                        <small className="font-normal">単品 760円 / セット 1,000円</small>
                      </li>
                    </ul>
                    {/*
                    <h3 className="mt-8 text-xl tracking-widest text-primary">
                      ワンハンド・スフレ
                    </h3>
                    <p className="mt-2">
                      片手で持てるスフレコーン。ふわふわのスフレの上にかわいくて美味しいトッピングを載せました。コーンの中にはアイスクリーム！
                    </p>
                    <p className="mt-0 text-sm">
                      (ご注文を受けてからお作りします。お気軽にお声がけください)
                    </p>
                    <ul className="mt-3 list-inside list-square font-bold marker:text-primary-200">
                      <li>
                        チョコレートアイススフレ{" "}
                        <small className="font-normal">単品 500円</small>
                      </li>
                      <li>
                        キャラメルアイススフレ{" "}
                        <small className="font-normal">単品 500円</small>
                      </li>
                      <li>
                        抹茶アイススフレ{" "}
                        <small className="font-normal">単品 500円</small>
                      </li>
                    </ul>
                    */}

                    
                  </div>
                </div>
              </div>
            </section>
            <hr className="border-dashed border-t-primary-100" />

            <section id="voice" className="voice alignfull relative bg-dots2 py-16">
              <h2 className="header-deco flex flex-col items-center text-xs font-normal tracking-wide">
                <Image
                  src="/images/souffle/header_voice.png"
                  width={107}
                  height={28}
                  alt="Voice"
                  className="header-above-image"
                />
                お客様の声
              </h2>
              <p className="mt-3 flex justify-center">お客様からいただいた声の一部を紹介します！</p>

              <div className="container mx-auto max-w-4xl px-6">
                <div className="voice__article mt-5 rounded-2xl border-4 border-dotted border-primary-200 bg-white/75 p-4">
                  <p className="voice__article__title text-lg font-bold text-secondary">
                    ナッツベリーのチーズスフレの大ファンです！
                  </p>
                  <p className="voice__article__body mt-2">
                    地元の人なら知っている有名店。ナッツベリーのチーズスフレの大ファンでよく食べに来ます。昔から通い続けていますがいつ来ても美味しい。長年変わらない味を守ってくれていて嬉しいです。
                  </p>
                </div>

                <div className="voice__article mt-5 rounded-2xl border-4 border-dotted border-primary-200 bg-white/75 p-4">
                  <p className="voice__article__title text-lg font-bold text-secondary">
                    口に入れた途端、ふわっふわでとろける食感♪
                  </p>
                  <p className="voice__article__body mt-2">
                    初めて焼きたてのスフレケーキを食べました。今まで食べたどのスイーツよりも一番美味しくて驚きました。口に入れた途端なくなるくらいふわっふわでとろける食感、しっかりミルクと卵が感じられて幸せです。季節限定のスフレメニューもあって何度でも通いたくなるお店！
                  </p>
                </div>

                <div className="voice__article mt-5 rounded-2xl border-4 border-dotted border-primary-200 bg-white/75 p-4">
                  <p className="voice__article__title text-lg font-bold text-secondary">
                    「熱々で甘さ控えめのスフレ」と「冷たくて甘いクリーム」のバランスが最高。
                  </p>
                  <p className="voice__article__body mt-2">
                    焼き上がりに15〜20分かかるので時間に余裕がある時がオススメ。チーズのとっても良い香りと一緒に運ばれてきます。綺麗な形を崩すのは忍びないけど一気にクリームをスフレの中に落とし込んでいきます。熱々で甘さ控えめのスフレと冷たくて甘いクリームのバランスが良くてとても美味しいです。フワフワで口当たりもとても滑らかだけどしっかり味もついているので、1番シンプルなチーズスフレでも充分満足できました。
                    合わせるドリンクは甘くないものがオススメです！
                  </p>
                </div>

                <div className="voice__article mt-5 rounded-2xl border-4 border-dotted border-primary-200 bg-white/75 p-4">
                  <p className="voice__article__title text-lg font-bold text-secondary">
                    ハニーマスタードが絶妙で美味しい「チキンサンド」
                  </p>
                  <p className="voice__article__body mt-2">
                    リニューアルされ、店内は明るく清潔な雰囲気に。テーブル席も増え、落ち着いて過ごせます。全面禁煙になったのでありがたいです。サンドイッチの軽食もあり、ランチタイムも夕方もいつも賑わってます。ミックスサンドはリニューアルしたそうで更に美味しくなっていました。パンはふわふわで、卵焼きは温かく柔らかい。たっぷりの具材で食べ応えもありました。チキンサンドはあつあつのチキンに絡めてあるハニーマスタードが絶妙で美味しい！
                  </p>
                </div>

                <div className="voice__article mt-5 rounded-2xl border-4 border-dotted border-primary-200 bg-white/75 p-4">
                  <p className="voice__article__title text-lg font-bold text-secondary">
                    待つこと15分。焼きたてスフレだからこその美味しさがあります。
                  </p>
                  <p className="voice__article__body mt-2">
                    スフレは15分ほど時間がかかるので気長に待ちます。その間にハーブティーが登場。ポット入りで、砂時計の砂が落ちるまでこちらも待ちます。焼き上がったばかりのスフレだからこその美味しさがあります。レモングラスがベースとなったもので飲みやすかったです。ポットの量もしっかり2杯分あり満足。
                  </p>
                </div>

                <div className="voice__article mt-5 rounded-2xl border-4 border-dotted border-primary-200 bg-white/75 p-4">
                  <p className="voice__article__title text-lg font-bold text-secondary">
                    ふわふわの食感。口に含むと細かくはぜるように溶けてゆきます♪
                  </p>
                  <p className="voice__article__body mt-2">
                    ふわふわの食感が楽しい！あっさりしているので、一つ食べてもまだ食べたくなるおいしさ。そっと口に含んでみるとチーズの濃厚な味わいと香りを放出しながらクシュクシュ細かくはぜるように溶けてゆきます。ふんわり軽い生地ですが、存在感のあるスフレです。
                  </p>
                </div>

                <div className="voice__article mt-5 rounded-2xl border-4 border-dotted border-primary-200 bg-white/75 p-4">
                  <p className="voice__article__title text-lg font-bold text-secondary">
                    淡く儚い食感なのに、食べ応えもあるスフレ。
                  </p>
                  <p className="voice__article__body mt-2">
                    淡く儚い(はかない)食感なのに、食べ応えも同居した存在感のあるスフレ。地がカップから垂直に大きくはみ出ていて上に生クリームが乗ってます。焼き立てなのでチーズが物凄く香ってきます。真ん中を突き崩してクリームと混ぜて食べるよう店員さんが教えてくれます。美味しい珈琲との相性も良かったです。
                  </p>
                </div>

                <div className="voice__article mt-5 rounded-2xl border-4 border-dotted border-primary-200 bg-white/75 p-4">
                  <p className="voice__article__title text-lg font-bold text-secondary">
                    スフレのふわふわ感。濃厚だがしつこくなく、美味しかったです。
                  </p>
                  <p className="voice__article__body mt-2">
                    店員さんは、いつも愛想がよく、テキパキと働いていらっしゃってすごく気持ちが良いです。スフレ特有のふわふわ感はあるけど、すぐ消えてしまうほどの軽さではなくて、わりとしっかりした生地かと思います。濃いめの味ですが、しつこくないのでペロリと頂けちゃいます。美味しかったです^^
                  </p>
                </div>

                <div className="voice__article mt-5 rounded-2xl border-4 border-dotted border-primary-200 bg-white/75 p-4">
                  <p className="voice__article__title text-lg font-bold text-secondary">
                    甘さ控えめ、軽い食感がいい。男性でも美味しくいただけました。
                  </p>
                  <p className="voice__article__body mt-2">
                    地元で人気のスフレ。スフレ焼き機は特許品とのこと。甘さ控えめなので、おっさんでも美味しくいただけました♪たっぷり乗った生クリームとスフレ生地の相性も良く、軽い食感がまたいい！レンコン茶も案外口当たりがよく，ハーブティーみたいで美味でした！
                  </p>
                </div>

                <div className="voice__article mt-5 rounded-2xl border-4 border-dotted border-primary-200 bg-white/75 p-4">
                  <p className="voice__article__title text-lg font-bold text-secondary">
                    待つこと15分。焼きたてスフレだからこその美味しさがあります。
                  </p>
                  <p className="voice__article__body mt-2">
                    スフレは15分ほど時間がかかるので気長に待ちます。その間にハーブティーが登場。ポット入りで、砂時計の砂が落ちるまでこちらも待ちます。焼き上がったばかりのスフレだからこその美味しさがあります。レモングラスがベースとなったもので飲みやすかったです。ポットの量もしっかり2杯分あり満足。
                  </p>
                </div>
              </div>
            </section>
            <hr className="border-dashed border-t-primary-100" />

            <section id="instagram" className="instagram py-16">
              <div className="container">
                <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 lg:grid-cols-5">
                  <div className="order-1 flex flex-col items-center md:order-2 lg:col-span-2">
                    <h2 className="header-deco mb-8 flex flex-col items-center text-xs font-normal tracking-wide">
                      <Image
                        src="/images/souffle/header_instagram.png"
                        width={172}
                        height={31}
                        alt="Instagram"
                        className="header-above-image"
                      />
                      ギャラリー
                    </h2>

                    <div className="flex justify-center">
                      <Image
                        src="/images/souffle/instagram-profile.jpg"
                        width={100}
                        height={100}
                        alt="ナッツベリー"
                        className="rounded-full"
                      />
                    </div>
                    <p>
                      <b>
                        <a
                          href="https://www.instagram.com/knottsberry_kawanishi/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          ナッツベリー 公式 Instagram
                        </a>
                      </b>
                    </p>
                    <p className="mt-0 tracking-wider text-secondary">
                      <small>knottsberry_kawanishi</small>
                    </p>
                    <p className="mt-3">ぜひフォローしてください！</p>
                  </div>
                  <div className="order-2 mt-8 md:order-1 md:mt-0 lg:col-span-3">
                    <div className="grid grid-cols-3 gap-5">
                      <Image
                        src="/images/souffle/instagram-01.jpg"
                        width={300}
                        height={300}
                        layout="responsive"
                        alt=""
                        className="instagram-image"
                      />
                      <Image
                        src="/images/souffle/instagram-02.jpg"
                        width={166}
                        height={166}
                        layout="responsive"
                        alt=""
                        className="instagram-image"
                      />
                      <Image
                        src="/images/souffle/instagram-03.jpg"
                        width={166}
                        height={166}
                        layout="responsive"
                        alt=""
                        className="instagram-image"
                      />
                      <Image
                        src="/images/souffle/instagram-04.jpg"
                        width={166}
                        height={166}
                        layout="responsive"
                        alt=""
                        className="instagram-image"
                      />
                      <Image
                        src="/images/souffle/instagram-05.jpg"
                        width={166}
                        height={166}
                        layout="responsive"
                        alt=""
                        className="instagram-image"
                      />
                      <Image
                        src="/images/souffle/instagram-06.jpg"
                        width={166}
                        height={166}
                        layout="responsive"
                        alt=""
                        className="instagram-image"
                      />
                      <Image
                        src="/images/souffle/instagram-07.jpg"
                        width={166}
                        height={166}
                        layout="responsive"
                        alt=""
                        className="instagram-image"
                      />
                      <Image
                        src="/images/souffle/instagram-08.jpg"
                        width={166}
                        height={166}
                        layout="responsive"
                        alt=""
                        className="instagram-image"
                      />
                      <Image
                        src="/images/souffle/instagram-09.jpg"
                        width={166}
                        height={166}
                        layout="responsive"
                        alt=""
                        className="instagram-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="about" className="about alignfull bg-dots3 py-20">
              <div className="container">
                <div className="lg:grid lg:grid-cols-5 lg:items-center lg:gap-12">
                  <div className="lg:col-span-2">
                    <h2 className="header-deco mb-8 flex flex-col items-center text-xs font-normal tracking-wide">
                      <Image
                        src="/images/souffle/header_about.png"
                        width={88}
                        height={24}
                        alt="About"
                        className="header-above-image"
                      />
                      ナッツベリーについて
                    </h2>
                    <p className="mt-6 font-bold leading-8 tracking-wider text-primary-600">
                      平成元年4月
                      アステ川西にてカフェ開業。創業以来、ナッツベリーのスフレのファンが拡がっています。
                    </p>
                    <p className="font-bold leading-8 tracking-wider text-primary-700">
                      2010年夏 宝塚花組公演のミュージカル
                      『麗しのサブリナ』で、タカラジェンヌのトップスターが、スフレづくりのシーンを参考するために、ナッツベリーを訪問見学されました。
                    </p>
                  </div>
                  <div className="mt-8 flex justify-center px-6 lg:col-span-3 lg:mt-0">
                    <FadeIn delay={isMobile ? 0 : 0.5}>
                      <Image
                        src="/images/souffle/shop-images.jpg"
                        width={700}
                        height={628}
                        layout="responsive"
                        alt="店舗のイメージ(オードリー・ヘプバーン、スフレ、店内風景)"
                        className="about-image mx-auto max-w-2xl"
                      />
                    </FadeIn>
                  </div>
                </div>
              </div>
            </section>

            <section id="access" className="alignfull bg-leaf access relative py-16">
              <div className="md:container">
                <h2 className="header-deco flex flex-col items-center text-xs font-normal tracking-wide">
                  <Image
                    src="/images/souffle/header_access.png"
                    width={130}
                    height={27}
                    alt="Access"
                    className="header-above-image"
                  />
                  アクセス
                </h2>
                <p className="mt-5 flex justify-center">
                  ナッツベリーの店舗は、阪急川西能勢口駅より徒歩２分、JR川西池田駅より徒歩４分の「アステ川西」２階にあります。
                </p>
                <div className="embed-container mt-8">
                  <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.1814514062803!2d135.41077131560328!3d34.82653007550028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000f729e9167133%3A0x59dbbcbb7a653741!2z44CSNjY2LTAwMzMg5YW15bqr55yM5bed6KW_5biC5qCE55S677yS77yV4oiS77yR!5e0!3m2!1sja!2sjp!4v1570938894632!5m2!1sja!2sjp"
                    width="600"
                    height="450"
                    className="mx-auto border-0"
                    allowFullScreen={false}
                  ></iframe>
                </div>
                <p className="mt-1 flex justify-center">
                  <small>
                    <a
                      href="https://goo.gl/maps/ZmQsXe6CbTe4kv9S6"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      » Googleマップで見る
                    </a>
                  </small>
                </p>
              </div>
            </section>
          </motion.div>
        </Layout>
      )}
    </>
  );
};

export default Home;
