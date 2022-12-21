FROM node:12-alpine as builder

WORKDIR /app/website
COPY . /app/website
RUN apk add autoconf libtool automake
#RUN apk add libtool
#RUN apk add automake
RUN apk --update add gcc make g++ zlib-dev
#RUN npm install
RUN yarn
#EXPOSE 3000
RUN yarn build
#CMD ["yarn", "start"]