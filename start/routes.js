'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

// /** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
// const Route = use('Route')

// Route.get('/', () => {
//   return { greeting: 'Olá world in JSON' }
// })
'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.get('/usuarios', 'UsuariosController.index')
Route.post('/sessions', 'SessionController.create')
Route.get('/hello', () => 'Hello world mundao')
Route.get('/suario/:id', 'UsuariosController.show').middleware('auth')
Route.get('/teste', 'TesteadoniController.index')
Route.get('/todasasmusicas', 'LzfhsLacisumController.index')
Route.get('/musica/:mus', 'LzfhsLacisumController.show')
Route.get('/todososritmos', 'LzfhsLsomtirController.index')
Route.get('/todososextras', 'LzfhsLsartxesodadController.index')
Route.get('user/:id', 'UserController.show')
Route.post('login', 'UserController.login')
Route
  .get('/profile', 'UserController.profile')
  .middleware('auth.jwt')
