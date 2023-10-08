const http = require("http")
const routes = require("./routes");
const { URL } = require('url')

const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://localhost:3000${request.url}`)

  const route = routes.find(({ endpoint, method }) => {
    return parsedUrl.pathname === endpoint && request.method === method
  })
  if (route) {
    request.query = Object.fromEntries(parsedUrl.searchParams);
    route.handler(request, response);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`);
  }
});

server.listen(3000, () => console.log("🔥 Server started at http://localhost:3000"))