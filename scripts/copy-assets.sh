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
rm -rf .build/images
mkdir -p ./build/scripts
mkdir -p ./build/images
cp -r ./src/components/ecl-accordion/build ./build
cp -r ./src/components/ecl-expandable/build ./build
cp -r ./src/components/ecl-social-media-share/build ./build