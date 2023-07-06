FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./

EXPOSE 3000

CMD [ "npm", "start", "-w", "apps/cloud/"]