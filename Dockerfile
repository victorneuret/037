# base node image
FROM node:18-alpine as base

RUN npm install -g pnpm

FROM base as deps

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base as build

ENV NODE_ENV=production
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN pnpm run build
RUN pnpm prune --prod

FROM base as deploy

ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/build /app/build
COPY --from=build /app/public /app/public
COPY package.json ./

CMD ["pnpm", "run", "start"]
