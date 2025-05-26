FROM node:22

WORKDIR /app

COPY package.json ./
COPY back-end ./back-end

RUN npm install -g pnpm \
  && pnpm install --filter back-cogna... \
  && pnpm --filter back-cogna build

WORKDIR /app/back-end

CMD ["pnpm", "start"]
