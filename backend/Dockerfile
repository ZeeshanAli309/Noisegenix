FROM node:14.15.4-alpine
# Create a directory for the app
WORKDIR /backend
# Install app dependencies
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]