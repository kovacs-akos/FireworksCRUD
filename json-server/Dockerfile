FROM node
WORKDIR /app
COPY ./db.json .
RUN npm i -g json-server
ENTRYPOINT [ "json-server", "db.json", "-p", "3000", "-h", "0.0.0.0" ]
