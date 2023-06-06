const http = require('http')
const NotFoundController = require('./controllers/NotFoundController')

const routes = require('./routes')

const { URL } = require('url')

const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://localhost:3000${request.url}`)
  console.log(`Request method: ${request.method} | Endpoint: ${parsedUrl.pathname}`)

  let { pathname } = parsedUrl
  let id = null

  const splitEndpoint = pathname.split('/').filter(Boolean)

  if (splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`
    id = splitEndpoint[1]
  }

  const route = routes.find((routeObj) => routeObj.endpoint === pathname && routeObj.method === request.method)

  if (route) {
    request.query = Object.fromEntries(parsedUrl.searchParams)
    request.params = { id }
    route.handler(request, response)
  } else {
    NotFoundController(request, response)
  }

})

server.listen(3000, () => {
  console.clear()
  console.log("🔥 -> Server started on http://localhost:3000")
})