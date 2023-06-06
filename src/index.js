const http = require('http')
const NotFoundController = require('./controllers/NotFoundController')
const routes = require('./routes')

const server = http.createServer((request, response) => {
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`)

  const route = routes.find((routeObj) => routeObj.endpoint === request.url && routeObj.method === request.method)

  if (route) {
    route.handler(request, response)
  } else {
    NotFoundController(request, response)
  }

})

server.listen(3000, () => {
  console.clear()
  console.log("🔥 -> Server started on http://localhost:3000")
})