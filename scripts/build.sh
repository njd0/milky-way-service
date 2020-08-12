#!/bin/bash

# Import the settings from the common settings file
source ./project_settings.sh

docker build -t $USERNAME/$IMAGE -f "$(dirname "$0")/../Dockerfile" "$(dirname "$0")/../"