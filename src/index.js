const http = require('http')
const singers = require('./mocks/singers')

const server = http.createServer((request, response) => {
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`)

  if (request.url === '/singers' && request.method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(singers))
  }

  response.writeHead(200, { 'Content-Type': 'application/json'})
  response.end(JSON.stringify({
    available_routes: ['/singers'],
  }))
})

server.listen(3000, () => {
  console.clear()
  console.log("🔥 -> Server started on http://localhost:3000")
})