const SingerController = require('./controllers/SingerController')

module.exports = [
  {
    endpoint: '/singers',
    method: 'GET',
    handler: SingerController.listSingers,
  },
  {
    endpoint: '/singers',
    method: 'POST',
    handler: SingerController.listSingers,
  }
]