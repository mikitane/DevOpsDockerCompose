const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  const fromMessage = `Hello from ${req.client.remoteAddress}:${req.client.remotePort}`;
  const toMessage = `to ${req.client.localAddress}:${req.client.localPort}`;

  http.get("http://service2:3000", service2Res => {
    service2Res.on("data", function(service2Message) {
      const fullMessage = [fromMessage, toMessage, service2Message].join('\n')

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(fullMessage);
    });
  });
});

server.listen(port, () => {
  console.log(`Service 1 running at internal port ${port}`);
});
