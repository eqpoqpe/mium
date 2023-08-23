#!/bin/bash/ env

provider_code=$(head /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 16)

echo -e "Created new provider code: \e[32m${provider_code}\e[0m"