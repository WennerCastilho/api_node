const singers = require('../mocks/singers')

module.exports = {
  listSingers(request, response) {
    const sortedSingers = singers.sort((prevent, current) => {
      const { order } = request.query;
      if (order === 'desc') {
        return prevent.id < current.id ? 1 : -1;
      }
      return prevent.id > current.id ? 1 : -1;
    })
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(sortedSingers))
  },
  getSingersById(request, response) {
    const { id } = request.params

    const singer = singers.find(({ id: singerId }) => singerId === Number(id))
    
    if (singer) {
      response.writeHead(200, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify(singer))
    } else {
      response.writeHead(400, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify({ error: 'User not found' }))
    }
  }
}