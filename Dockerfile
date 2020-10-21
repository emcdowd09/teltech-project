# build
FROM node:12 as frontend
WORKDIR /app
COPY package*.json ./
COPY .env.template .env
RUN yarn install
COPY . .
RUN yarn build

# production
FROM nginx:1.18.0-alpine
COPY --from=frontend /app/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]