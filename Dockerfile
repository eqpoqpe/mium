FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

COPY . .

# RUN npm ci

RUN npm run prisma:generate -w apps/cloud/

RUN npm run build -w apps/cloud/
RUN npm prune --production --no-optional

FROM node:18-alpine AS production

WORKDIR /app

EXPOSE 3000

COPY --from=build /app/node_modules/ ./node_modules
COPY --from=build /app/package*.json ./

# apps/cloud
COPY --from=build /app/apps/cloud/package*.json ./apps/cloud/
COPY --from=build /app/apps/cloud/dist/ ./apps/cloud/dist/
COPY --from=build /app/apps/cloud/prisma/ ./apps/cloud/prisma/

# run script
COPY --from=build /app/scripts/ ./scripts

CMD ["/bin/sh", "./scripts/migrate.sh"]