FROM node:20-bullseye

WORKDIR /app

COPY . .

ENV HOSTNAME 0.0.0.0
ENV PORT 3000
ENV STARTMESSAGE "Let's do this with Docker"

RUN npm install

CMD npm run server