FROM node:14

WORKDIR /src
COPY . .

RUN yarn install

RUN yarn build

CMD ["yarn", "start"]
