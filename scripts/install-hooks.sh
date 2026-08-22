#!/usr/bin/env bash
set -Eeuo pipefail
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
git -C "${ROOT_DIR}" config core.hooksPath .githooks
printf 'Git hooks enabled: %s/.githooks\n' "${ROOT_DIR}"
