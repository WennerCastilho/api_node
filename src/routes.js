const SingerController = require('./controllers/SingerController')

module.exports = [
  {
    endpoint: '/singers',
    method: 'GET',
    handler: SingerController.listSingers,
  },
  {
    endpoint: '/singers/:id',
    method: 'GET',
    handler: SingerController.getSingersById,
  }
]