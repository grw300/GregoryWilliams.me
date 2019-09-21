FROM node:12.10-alpine

EXPOSE 9000

RUN npm install -g gatsby-cli

WORKDIR /app
COPY . .
RUN npm install
RUN gatsby build
RUN gatsby serve