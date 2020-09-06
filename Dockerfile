FROM node:12.16.0

WORKDIR /Library/WebServer/Documents/express-node-server

COPY package.json .

RUN npm install

EXPOSE 3000

COPY . .

CMD [ "npm", "start" ]