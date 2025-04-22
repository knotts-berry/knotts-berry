# スフレ専門店 ナッツベリー (Knotts Berry) 公式ウェブサイト

[» デモ](https://nextjs-website-lemon.vercel.app/)

## 技術スタック

* TypeScript
* Biome v2
  * リンターとフォーマッターを統合
  * インテリジェントなコード整形
* React 18, Next.js 15
* PostCSS
  * postcss-import: 外部 CSS 読み込み
  * postcss-nesting: ネストで記述
  * postcss-preset-env: モダンCSSの先行実装
  * Tailwind CSS v3
  * autoprefixer: ベンダープレフィックス付与
  * cssnano: CSSの最適化と圧縮
* Tailwind CSS プラグイン, Preline (UIコンポーネント集)
  * @tailwindcss/typography: バニラHTMLにスタイリング
  * @tailwindcss/forms: 基本フォームスタイル(オーバーライド)
  * @tailwindcss/aspect-ratio: アスペクト比の維持
  * line-clamp: テキストの折り返し (※Tailwind CSS v3のコアに統合済み)
  * preline: Tailwind UI ライブラリ
* Framer Motion: アニメーション
* next-themes: ダークテーマ用
* データフェッチ
* テスト
* ユーティリティ
  * date-fns: 日付の操作
  * classnames: クラス名を条件付きで結合
  * react-scroll: スムーズスクロール
  * react-responsive: レスポンシブデザイン対応
* コンポーネント
  * @etchteam/next-pagination: ページネーション
  * @hashicorp/platform-code-highlighting: コードハイライト
* 素材
  * @heroicons/react: アイコンフォント
* Netlify連携
  * @netlify/plugin-nextjs: Netlifyデプロイ用プラグイン
  * netlify-cli: Netlify CLI
* パフォーマンス最適化
  * @next/bundle-analyzer: バンドルサイズの分析

## Next.js 15 への移行

2025年4月に Next.js 12 から Next.js 15 への移行を完了しました。主な変更点：

1. **Link コンポーネントの最適化**
   * `<Link>` 内の `<a>` タグを削除し、クラスや属性を直接 Link コンポーネントに適用
   * すべてのナビゲーション要素を最新の構文に更新

2. **ドキュメント構造の改善**
   * クラスコンポーネントから関数コンポーネントへの変更 (_document.tsx)
   * 最新の Next.js 仕様への準拠

3. **画像最適化**
   * Image コンポーネントに `priority` と `quality` 属性を追加
   * Web Vitals スコア向上のための最適化

4. **パフォーマンス向上**
   * Script コンポーネントに `strategy="afterInteractive"` を追加
   * next.config.js の最適化設定
   * 依存関係の更新

5. **SEO対応の強化**
   * メタタグの整理と強化
   * OGP と Twitter カードの改善

## Biome v2 への移行

2025年4月に ESLint/Prettier から Biome v2 への移行を完了しました。主な変更点：

1. **リンターとフォーマッターの統合**
   * ESLintとPrettierの代わりに単一のツールでコード品質とフォーマットを管理
   * 設定ファイルの簡素化

2. **パフォーマンス向上**
   * Rust ベースの高速な実行
   * インテリジェントなルール適用

3. **開発体験の向上**
   * 一貫したコードスタイルの適用
   * シンプルなコマンド体系

## ディレクトリ構造

```text
knotts-berry
├── components    # UIコンポーネント
├── lib           # ユーティリティ関数
├── pages         # ページコンポーネント
├── public        # 静的ファイル
└── styles        # CSSスタイル
```

## 開発手順

```bash
# 開発サーバーの起動
npm run dev

# 本番ビルド
npm run build

# 静的ファイルの書き出し
npm run export

# リンターの実行
npm run lint

# リント問題の自動修正
npm run lint:fix

# コードの自動整形
npm run format

# バンドル分析
npm run analyze
```

## プロジェクト設定ファイル

* **biome.json**: Biome v2 の設定ファイルで、コードスタイルやリンターのルールを定義します。
* **renovate.json**: Renovate Botの設定ファイルで、Netlifyでホスティングする際に依存関係を自動的に最新化するために使用されます。このボットはGitHubリポジトリを監視し、依存関係のアップデートがあれば自動的にプルリクエストを作成します。Netlify用の推奨設定が適用されています。

### 参考にしたサンプル

* [公式：next.js/examples at canary - vercel/next.js](https://github.com/vercel/next.js/tree/canary/examples)
  * [with-storybook](https://github.com/vercel/next.js/tree/canary/examples/with-storybook)
  * [with-clerk](https://github.com/vercel/next.js/tree/canary/examples/with-clerk)
  * [with-next-page-transitions](https://github.com/vercel/next.js/tree/canary/examples/with-next-page-transitions)
  * [cms-wordpress](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress)
