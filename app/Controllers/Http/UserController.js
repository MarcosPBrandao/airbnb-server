"use strict"

const User = use("App/Models/User")

class UserController {
  async create ({ request }) {
    const data = request.only(["username", "email", "password"])

    const user = await User.create(data)

    return user
  }
  async login ({ request, auth }) {
    const { email, password } = request.all()
    await auth.attempt(email, password)

    return auth.user
  }
  show ({ auth, params }) {
    //if (auth.id !== Number(params.id)) {
    //  return 'Voce só pode ver o seu próprio profile'
    //}
    return auth.user
  }
}

module.exports = UserController
