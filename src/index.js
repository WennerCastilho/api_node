const http = require('http')

const server = http.createServer((request, response) => {
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`)
  response.writeHead(200, { 'Content-Type': 'application/json'})
  response.end(JSON.stringify({ 'message': 'Success' }))
})

