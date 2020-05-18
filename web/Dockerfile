# Use Node v8 as the base image.
FROM node:8

# create and set app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

# Copy app source from current host directory to container working directory
COPY . .
CMD ["npm", "start"]


# docker run  -d \
# --publish 4200:4200 \
# -e MYSQL_USER='root' \
# -e MYSQL_PASSWORD='pass' \
# -e MYSQL_DATABASE='Shmetsy' \
# -e MYSQL_HOST='172.17.0.2' \
# --link shmetsy-db:db \
# --name=shmetsy-web server
