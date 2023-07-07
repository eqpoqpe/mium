#!/bin/bash/ env

APP_ROOT=apps/
CLOUD_DIR=${APP_ROOT}cloud/

echo "Mium migrate database"
# npm run migrate:dev:init -w ${CLOUD_DIR} -y &&
# npm run prisma:generate -w ${CLOUD_DIR} &&
# npm run prisma:push -w ${CLOUD_DIR} &&
npm start -w ${CLOUD_DIR}