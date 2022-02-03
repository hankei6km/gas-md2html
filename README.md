# gas-md2html

Markdown を HTML へ変換する Googl Apps Script Library 用ライブラリー。

## Setup

ライブラリーは App Script で利用できる状態になっています。
Apps Script のコードエディターで以下の手順を実行するとプロジェクトへ追加できます。

1. コードエディターのファイル名一覧が表示される部分の「ライブラリ +」をクリック
1. 「スクリプト ID」フィールドに `1tJwBPELEMAtIhts4YIp4h8VvCbj68SkmLYHwW71pSMz1EWTB1CRtYL_g` を入力し検索をクリック
1. バージョンを選択(通常は最新版)
1. 「ID」を `MD2html` へ変更
1. 「追加」をクリック

上記以外にも Release ページから `md2html.zip` をダウンロードし、`/dist` ディレクトリーをプロジェクトへコピーできます。

## Usage

スプレッドシートのカスタム関数で利用する場合は、以下のようなコードを記述します。

```js
function MD2HTML(args) {
  return MD2html.toHtml(args);
}
```

セル内に `=MD2HTML(B6)` のように入力するとセル内に HTML が代入されます。


## TypeScript

TypeScript(clasp) でコードを記述している場合は、以下の方法で型定義を設定できます。

型定義パッケージをインストールします。

```console
$ npm install --save-dev @hankei6km/gas-md2html
```

`tsconfig.json` に定義を追加します。

```json
{
  "compilerOptions": {
    "target": "ES2019",
    "module": "ES2020",
    "lib": [ "ESNext" ],
    "types": [
       "@types/google-apps-script",
       "@hankei6km/gas-md2html"
    ],


```


## License

MIT License

Copyright (c) 2022 hankei6km

