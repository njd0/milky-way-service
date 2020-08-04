# #!/bin/bash

# # TODO replace this with dockerhub build rules w/ github

# # Import the settings from the common settings file
# source ./project_settings.sh

# set -ex

# # ensure we're up to date
# # git pull

# # bump version
# docker run --rm -v "$PWD":/app treeder/bump patch
# version=`cat VERSION`
# echo "version: $version"

# # run build
# ./build.sh

# # tag it
# git tag -a "$version" -m "version $version"
# git push --tags