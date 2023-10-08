const bodyParser = require('../helpers/bodyParser')
let users = require('../mocks/users')

module.exports = {
  listUsers(request, response) {
    const { order } = request.query
    const sortedUsers = users.sort((a, b) => {
      if (order === 'desc') {
        return a.id < b.id ? 1 : -1
      }
      return a.id > b.id ? 1 : -1
    })
    response.send(200, { users: sortedUsers })
  },
  getUserById(request, response) {
    const { id } = request.param
    const user = users.find((userObj) => userObj.id === Number(id))

    if (user) {
      return response.send(200, { user })
    }
    response.send(400, { error: "User not found" })
  },
  createUser(request, response) {
    const { body } = request
    const lastUserId = users[users.length - 1].id

    const newUser = {
      id: lastUserId + 1,
      name: body.name,
    }

    users.push(newUser)

    response.send(200, newUser)
  },
  updateUser(request, response) {
    let { id } = request.param
    const { name } = request.body
    const { body } = request

    id = Number(id)

    let userExists = users.find((userObj) => userObj.id === id)

    if (!userExists) return response.send(200, { error: 'User not found' })

    userExists.name = body.name
      users = users.map((user) => {
        if (user.id === id) ({
          id,
          name: body,
        })
        return user
      })

      response.send(200, userExists)
  },
  deleteUser(request, response) {
    const { id } = request.param
    const userExists = users.find((user) => user.id === Number(id))
    if(!userExists) {
      response.send(400, { error: 'User not found' })
    }

    users = users.filter((user) => user.id !== Number(id))
    response.send(200, userExists)
  }
}