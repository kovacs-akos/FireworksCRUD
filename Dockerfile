FROM node:alpine
# Set the working directory
WORKDIR /usr/src/app
COPY . /usr/src/app

FROM node
WORKDIR /home/node/app
COPY ./db.json .
RUN npm i -g json-server