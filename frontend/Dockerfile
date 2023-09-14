FROM node:20-alpine as build

WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .
RUN npm i -g pnpm
RUN pnpm install --ignore-scripts --frozen-lockfile
COPY . .
RUN pnpm build

FROM nginx:1.21.5
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /etc/nginx/html
