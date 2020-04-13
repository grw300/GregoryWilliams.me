FROM node:12.10-alpine

EXPOSE 9000

RUN npm install -g gatsby-cli

WORKDIR /app
COPY ./app .
RUN npm install
RUN gatsby build
CMD [ "gatsby", "serve", "-H", "0.0.0.0" ]
