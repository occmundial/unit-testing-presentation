FROM node:#WA_UNITTESTING_NODE_VERSION#

WORKDIR /app
COPY . /app
RUN npm install
RUN npm build

EXPOSE #WA_UNITTESTING_PORT#

CMD npm run start:Prod