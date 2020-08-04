#!/bin/bash

set -a

docker-compose -f docker-compose.yml build
docker-compose -f docker-compose.yml push

# docker stack deploy my-stack --compose-file docker-compose.yml --with-registry-auth