#!/bin\bash
set -e

# ビルドされたコードにテスト用のコードを結合する.
# ビルドされたコードはエクスポートされていないための対応.
cat test/build/md2html_src.js build/md2html.js > test/build/md2html.spec.js