FROM node:12

# Create app directory
WORKDIR /var/www

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . /var/www

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]