FROM node:21-alpine AS development
ENV NODE_ENV development

WORKDIR /app

COPY ./app/package.json .
#COPY yarn.lock .

RUN npm i && npm cache clean --force

COPY ./app .

EXPOSE 3000

CMD [ "yarn", "start" ]
