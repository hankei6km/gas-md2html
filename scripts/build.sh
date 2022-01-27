#!/bin/bash
set -e

BUILD_DIR="build"
# rollupjs でビルドされた結果(定義は "rollup.js" でされている).
OUT_MAIN="${BUILD_DIR}/main.js"
# 上記ファイルに結合して Apps Scpirt で参照できるようにするファイル.
SRC_INDEX="src/index_src.js"
# 型定義時のエラー出力.
# TS2403 対応で作成する.
ERR_TYPEDEF_OUT_FILE="${BUILD_DIR}/tsc_err.txt"

# Apps Scipt へ push する用.
# iife 形式でビルドする(Apps Scriptからは参照できない状態).
# LICENSE の情報をまとめる.
npx rollup --config
# LICENSE のバナーと App Script で参照できるようにするファイルと結合.
cat scripts/banner.txt "${OUT_MAIN}" "${SRC_INDEX}" > "${BUILD_DIR}/md2html.js"

# Assets に含める LICENSE ファイルをコピー.
cp LICENSE "${BUILD_DIR}/LICENSE.txt"

# 型定義を作成.
# TS2403 が発生するのでエラーの除外を行う、おそらく現状で正攻法な対応策はない.
# https://github.com/DefinitelyTyped/DefinitelyTyped/issues/32585
npx tsc src/index.ts --declaration --allowJs --emitDeclarationOnly --outDir build \
  | tee "${ERR_TYPEDEF_OUT_FILE}" | grep -o -e 'TS[0-9]\+' | grep -c -v TS2403 | grep -q 0 \
  && rm "${ERR_TYPEDEF_OUT_FILE}"  

# エラーがあれば出力して終了.
test -f "${ERR_TYPEDEF_OUT_FILE}" && cat "${ERR_TYPEDEF_OUT_FILE}" && exit 1

# 型定義を移動.
mv "${BUILD_DIR}"/*.d.ts .



# 作業用ファイルなどを削除.
npx rimraf "${OUT_MAIN}" build/src build/test "${ERR_TYPEDEF_OUT_FILE}"
