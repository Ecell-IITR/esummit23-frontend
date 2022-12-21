FROM node:14-alpine

LABEL maintainer="esummit22"

WORKDIR /usr/esummit22-frontend

COPY ./package.json ./package.json

RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "start"]

