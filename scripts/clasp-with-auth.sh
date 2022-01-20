#!/bin/bash
set -e

CLASPRC_JSON="${HOME}/.clasprc_tmp.json"

if test -f "${CLASPRC_JSON}"; then
  echo "push with ${CLASPRC_JSON}"
  clasp --auth "${CLASPRC_JSON}" "${@}"
else
  clasp "${@}"
fi

