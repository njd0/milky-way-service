FROM node:12-slim
WORKDIR /usr/src/app
COPY package*.json ./

# --only=production
RUN npm install  

COPY . ./

CMD [ "npm", "start" ]