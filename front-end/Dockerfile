FROM node:22 AS builder

WORKDIR /app

ARG BACKEND_API_URL
ENV BACKEND_API_URL=$BACKEND_API_URL

COPY package.json ./
COPY front-end ./front-end

RUN npm install -g pnpm \
  && pnpm install --filter front-cogna... \
  && pnpm --filter front-cogna build

WORKDIR /app/front-end

CMD ["pnpm", "start"]
