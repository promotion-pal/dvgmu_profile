FROM node:22-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package*.json ./

RUN pnpm install
RUN ls -la node_modules/.bin/next

COPY . .

RUN pnpm run build

EXPOSE 3010

CMD ["pnpm", "start", "--", "-p", "3010"]