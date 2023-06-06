const http = require('http')
const NotFoundController = require('./controllers/NotFoundController')

const routes = require('./routes')

const { URL } = require('url')

const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://localhost:3000${request.url}`)
  console.log(`Request method: ${request.method} | Endpoint: ${parsedUrl.pathname}`)

  const route = routes.find((routeObj) => routeObj.endpoint === parsedUrl.pathname && routeObj.method === request.method)

  if (route) {
    request.query = Object.fromEntries(parsedUrl.searchParams)
    route.handler(request, response)
  } else {
    NotFoundController(request, response)
  }

})

server.listen(3000, () => {
  console.clear()
  console.log("🔥 -> Server started on http://localhost:3000")
})