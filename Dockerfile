FROM ubuntu:18.04

COPY . /WORKPLACE
WORKDIR /WORKPLACE

RUN apt-get update && apt-get install -y nodejs npm mysql-server
RUN npm install
RUN npm run test

ARG port=5408
EXPOSE $port

CMD npm start