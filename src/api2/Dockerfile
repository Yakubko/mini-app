FROM node:12-alpine

WORKDIR /api2

COPY package.json ./

RUN npm install

EXPOSE 8000

CMD [ "npm", "run", "start" ]
