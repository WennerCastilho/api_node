const http = require("http")

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

server.listen(3000, () => console.log("🔥 Server started at http://localhost:3000"))