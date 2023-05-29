module.exports = (request, response) => {
  response.writeHead(404, { 'Content-Type': 'application/json'})
  return response.end(JSON.stringify({
    available_routes: ['/singers'],
  }))
}