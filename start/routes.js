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

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// user

Route.group('', function () {
  Route.post('/login', 'UserController.login').validator('user_loginvalidate')
  Route.post('/logout', 'UserController.logout')
  Route.post('/register', 'UserController.register').validator('user_register')
}).prefix('api/v1')