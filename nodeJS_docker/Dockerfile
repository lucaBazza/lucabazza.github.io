FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm install express
# per erriri vurnerabilita
RUN npm audit fix       

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
#serve solo questo se poi si fa il mount volume 
#COPY server.js .       

LABEL version="0.6"
LABEL description="NPM node JS docker"

EXPOSE 8080
CMD [ "node", "server.js" ]


#   come usare: 
#   1       docker build -t zabba_nodejs .
#   2       docker run -p 8080:8080 -d zabba_nodejs
#   2alt    docker run  -p 8080:8080 -v /Users/lucabazzanella/Desktop/nodeJS_docker:/dist/ -d zabba_nodejs
#   3       browser at localhost:8080

#   oppure: docker-compose up
