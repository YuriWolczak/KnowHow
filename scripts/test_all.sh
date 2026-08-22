#!/usr/bin/env bash

set -Eeuo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BUILD_DIR="${ROOT_DIR}/build/local-ci"

cleanup() {
  rm -rf "${BUILD_DIR}"
}
trap cleanup EXIT

cd "${ROOT_DIR}"

require_command() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Required command not found: $1" >&2
    exit 1
  fi
}

for command in python3 node npm gcc cmake java javac mvn; do
  require_command "${command}"
done

printf '%s\n' '== Markdown and Python checks =='
python3 scripts/check_links.py
python3 scripts/test_examples.py

printf '%s\n' '== Web example checks =='
test -f examples/web/index.html
test -f examples/web/styles.css
test -f examples/web/script.js
grep -q '<!doctype html>' examples/web/index.html
grep -q 'rel="stylesheet"' examples/web/index.html
grep -q 'type="module"' examples/web/index.html
node --check examples/web/script.js
npm ci --prefix tests/web --ignore-scripts
npm --prefix tests/web test

printf '%s\n' '== C examples =='
mkdir -p "${BUILD_DIR}/c-examples"
mapfile -t c_examples < <(find examples/c -maxdepth 1 -type f -name '*.c' | sort)
test "${#c_examples[@]}" -gt 0
for source in "${c_examples[@]}"; do
  name="$(basename "${source%.c}")"
  gcc -std=c17 -Wall -Wextra -Wpedantic "${source}" -o "${BUILD_DIR}/c-examples/${name}"
  "${BUILD_DIR}/c-examples/${name}"
done

printf '%s\n' '== C unit tests with CTest =='
cmake -S tests/c -B "${BUILD_DIR}/c-tests" -DCMAKE_BUILD_TYPE=Debug
cmake --build "${BUILD_DIR}/c-tests" --parallel
ctest --test-dir "${BUILD_DIR}/c-tests" --output-on-failure

printf '%s\n' '== Java examples =='
mkdir -p "${BUILD_DIR}/java-examples"
mapfile -t java_examples < <(find examples/java -maxdepth 1 -type f -name '*.java' | sort)
test "${#java_examples[@]}" -gt 0
javac -Xlint:all -d "${BUILD_DIR}/java-examples" "${java_examples[@]}"
for source in "${java_examples[@]}"; do
  class_name="$(basename "${source%.java}")"
  java -cp "${BUILD_DIR}/java-examples" "${class_name}"
done

printf '%s\n' '== Java unit tests with Maven and JUnit =='
mvn --batch-mode --file tests/java/pom.xml test

printf '%s\n' 'All local checks passed.'
