const http = require('http')
const SingerController = require('./controllers/SingerController')
const NotFoundController = require('./controllers/NotFoundController')

const server = http.createServer((request, response) => {
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`)

  if (request.url === '/singers' && request.method === 'GET') {
    SingerController.listSingers(request, response)
  } else {
    NotFoundController(request, response)
  }

})

server.listen(3000, () => {
  console.clear()
  console.log("🔥 -> Server started on http://localhost:3000")
})