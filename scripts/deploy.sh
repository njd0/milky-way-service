#!/bin/bash

set -e

# Import the settings from the common settings file
source ./project_settings.sh

bash ./build.sh

docker run --rm -v "$PWD":/app treeder/bump patch
version=`cat VERSION`

# docker tag $USERNAME/$IMAGE $USERNAME/$IMAGE:$version
docker tag $USERNAME/$IMAGE $USERNAME/$IMAGE:latest # TODO REMOVE, latest is created when push to master
# docker push $USERNAME/$IMAGE:$version # TODO add back in when ready
docker push $USERNAME/$IMAGE:latest

kubectl create secret generic regcred \
    --from-file=.dockerconfigjson=$HOME/.docker/config.json \
    --type=kubernetes.io/dockerconfigjson \
    --dry-run=client -o yaml | kubectl apply -f -

kubectl apply -f mongo.yaml

kubectl apply -f app.yaml