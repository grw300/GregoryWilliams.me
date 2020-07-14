FROM node:12.10-alpine as build

RUN npm install -g gatsby-cli
WORKDIR /app
COPY ./app .
RUN npm install
RUN gatsby build

FROM nginx:1.19-alpine

COPY --from=build /app/public /usr/share/nginx/html
EXPOSE 9000
