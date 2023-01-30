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
cp -r ./src/components/ecl-media-container/build ./build
cp -r ./src/components/ecl-message/build ./build
cp -r ./src/components/ecl-carousel/build ./build
cp -r ./src/components/ecl-file/build ./build
cp -r ./src/components/ecl-news-ticker/build ./build
cp -r ./src/components/ecl-select/build ./build
cp -r ./src/components/ecl-input/build ./build
cp -r ./src/components/ecl-category-filter/build ./build
cp -r ./src/components/ecl-select/build ./build
cp -r ./src/components/ecl-timeline/build ./build
cp -r ./src/components/ecl-breadcrumb/build ./build
cp -r ./src/components/ecl-inpage-navigation/build ./build