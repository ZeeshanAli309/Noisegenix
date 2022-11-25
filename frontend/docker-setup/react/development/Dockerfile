FROM node:14.15.4-alpine

# Create app directory
WORKDIR /frontend

# Install app dependencies
COPY package*.json  ./

COPY . .

RUN npm install

ENV NODE_ENV=development

CMD [ "npm", "start" ]
