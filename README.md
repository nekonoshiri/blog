# blog

猫野詩梨 ([@nekonoshiri](https://github.com/nekonoshiri)) のブログ。

## 必要なもの

- Node.js (v26 以上)
- npm

## 準備

以下のコマンドで依存パッケージをインストールします。

```sh
npm install
```

## 利用できるスクリプト

- `npm run build`: ブログのビルドを行います。
- `npm run clean`: ビルドされたブログが配置されるディレクトリ (`docs/`) を削除します。

## ディレクトリ構成

- `article/`: ブログ記事を配置するディレクトリ。
- `docs/`: ビルドされたブログが配置されるディレクトリ。このディレクトリが GitHub Pages として公開されます。
- `public/`: ファビコンやスタイルシート等を配置するディレクトリ。このディレクトリ配下のファイルは、そのまま `docs/` ディレクトリにコピーされます。
- `script/`: ビルド等に使用する各種スクリプトを配置するディレクトリ。
- `template/`: レイアウト等のテンプレートを配置するディレクトリ。

> [!NOTE]
>
> GitHub Pages では、GitHub Actions ワークフローを使用 **せずに** サイトを公開する場合、リポジトリのルートディレクトリ
> (`/`) か、`/docs` ディレクトリのいずれかを公開ディレクトリとして指定できます。
>
> See: [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
