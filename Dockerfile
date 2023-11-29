FROM node:20-bullseye

WORKDIR /app

COPY . .

ENV HOSTNAME 0.0.0.0
ENV PORT 3000
ENV STARTMESSAGE "Are you readey? Let's roll!"

RUN npm install

CMD make server