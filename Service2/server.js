const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  const fromMessage = `Hello from ${req.client.remoteAddress}:${req.client.remotePort}`;
  const toMessage = `to ${req.client.localAddress}:${req.client.localPort}`;

  const fullMessage = [fromMessage, toMessage].join('\n');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(fullMessage);
});

server.listen(port, () => {
  console.log(`Service 2 running at internal port ${port}`);
});
