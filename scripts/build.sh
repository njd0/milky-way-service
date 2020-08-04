#!/bin/bash

# Import the settings from the common settings file
source ./project_settings.sh

set -ex

docker build $USERNAME/$IMAGE ../