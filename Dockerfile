# Common build stage
FROM node:14.17.0

COPY package.json ./

RUN yarn install --production

COPY dist ./dist
COPY .env.production ./
ENV NODE_ENV production

EXPOSE 3000
CMD ["yarn", "run", "start:prod"]
