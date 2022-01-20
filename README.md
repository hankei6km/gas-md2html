# gas-md2html

Markdown を HTML へ変換する Googl Apps Script Library。

実装中。

## メモ

`npm run push` するためには `$GAS_SCRIPT_ID` が必要。

GitHub Actions から `clasp push` と `clasp deploy` をするために以下の environment が必要。

- dev - 開発用プロジェクトに push する
- rel - 公開用プロジェクトに push & delpoy する

それぞれに SECRET が必要。

- `GAS_SCRIPT_ID`
- `ACCESS_TOKEN`
- `SCOPE`
- `ID_TOKEN`
- `EXPIRY_DATE`
- `REFRESH_TOKEN`
- `CLIENT_ID`
- `CLIENT_SECRET`

`GAS_SCRIPT_ID` は dev と rel で切り替える。 開発と公開で異なるクレデンシャルが必要ならその他も切り替える。

## License

MIT License

Copyright (c) 2022 hankei6km
