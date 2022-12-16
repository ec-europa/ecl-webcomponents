#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Echo every command being executed
set -x

# Go to project root
cd "$(dirname "$0")"
cd ..

mkdir "src/components/$1/src"
mkdir "src/components/$1/src/styles"
touch "src/components/$1/$1.stories.ts"
touch "src/components/$1/package.json"
touch "src/components/$1/src/styles/$1-ec.scss"
touch "src/components/$1/src/styles/$1-eu.scss"
touch "src/components/$1/ecl-builder.confg.js"
