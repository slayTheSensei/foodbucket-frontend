'use strict'

const app = require('../app.js')

const getLists = function () {
  console.log(JSON.stringify(app.user)) // use this to personaly greet a user
  return $.ajax({
    url: app.host + '/list/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  getLists
}
