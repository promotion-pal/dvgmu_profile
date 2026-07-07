FROM node:22-alpine

WORKDIR /app

RUN echo "auto-install-peers=true" > .npmrc && \
    echo "strict-peer-dependencies=false" >> .npmrc && \
    echo "ignore-scripts=true" >> .npmrc

RUN npm install -g pnpm

COPY package*.json ./

RUN pnpm install
RUN ls -la node_modules/.bin/next

COPY . .

RUN pnpm run build

EXPOSE 3010

CMD ["pnpm", "start", "--", "-p", "3010"]