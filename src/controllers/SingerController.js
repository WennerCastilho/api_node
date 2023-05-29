const singers = require('../mocks/singers')

module.exports = {
  listSingers(_, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(singers))
  }
}