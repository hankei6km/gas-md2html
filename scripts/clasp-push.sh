#!/bin/bash
set -e

CLASPRC_JSON=".clasprc.json"

if test -f "${CLASPRC_JSON}"; then
  clasp push --auth "${CLASPRC_JSON}"
else
  clasp push
fi

