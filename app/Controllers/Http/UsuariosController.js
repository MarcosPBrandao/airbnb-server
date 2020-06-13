"use strict"
const User = use("App/Models/User")

class UsuariosController {
  async index () {
    const users = User.all()
    return users
  }
  async show ({ auth,params }) {
    const user = await User.findOrFail(params.id)
    return user
  }
//  index () {
//    return 'Dummy responsavel'
//  }
}

module.exports = UsuariosController
