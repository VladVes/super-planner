import * as http from 'http';


const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const startMessage = process.env.STARTMESSAGE || 'Let\'s do this!';
const serverMessage = process.env.SERVER_MESSAGE;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`${startMessage}\nserver message: ${serverMessage}\n`);
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});