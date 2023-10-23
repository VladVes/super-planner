import * as http from 'http';


const hostName = process.env.HOSTNAME || '127.0.0.1';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const startMessage = process.env.STARTMESSAGE || 'Let\'s do this!';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(startMessage);
});

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}`);
});