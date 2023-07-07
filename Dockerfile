FROM node:18-alpine AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

COPY . .

RUN npm install
RUN npm run prisma:generate -w apps/cloud/
RUN npm run build -w apps/cloud/
RUN npm prune --production
RUN npm install --no-optional

FROM node:18-alpine

ENV DATABASE_URL="postgresql://myuser:mypassword@db:5432/mydatabase"

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/apps/cloud/ ./
COPY --from=builder /app/scripts/migrate.sh ./

EXPOSE 3000
CMD ["bash", "./migrate.sh"]