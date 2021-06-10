FROM node:10

WORKDIR /

COPY . /

RUN npm install

CMD yarn dev

EXPOSE 3000