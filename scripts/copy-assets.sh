#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Echo every command being executed
set -x

# Go to project root
cd "$(dirname "$0")"
cd ..

# Copy builds
rm -rf .build/scripts
mkdir -p ./build/scripts
cp -r ./src/components/ecl-accordion/dist/scripts ./build
cp -r ./src/components/ecl-expandable/dist/scripts ./build