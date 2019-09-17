FROM node:10

#Create app directory for application code
WORKDIR /usr/src/app

#Install app dependencies using package.json and package-lock.json (if exists)
# TODO: may not want to use package-lock.json?
COPY package*.json ./

RUN npm install
# If for production 
# RUN npm ci --only=production

# Bundle app source code inside docker image 
COPY . .

EXPOSE 3000
CMD [ "node", "app.js"]