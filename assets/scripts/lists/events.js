'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const app = require('../app.js')

const onGetList = (event, data) => {
  console.log('data is ' + data)
  api.getLists()
    .then(ui.getListSuccess)
    .catch(ui.failure)
}

const toSignUp = function () {
  $('#landing-view').hide()
  $('#signin-view').hide()
  $('#dash-view').hide()
  $('#signup-view').show()
}

const toSignIn = function () {
  $('#landing-view').hide()
  $('#signin-view').show()
  $('#dash-view').hide()
  $('#signup-view').hide()
}

const tolanding = function () {
  $('#landing-view').show()
  $('#signin-view').hide()
  $('#dash-view').hide()
  $('#signup-view').hide()
}

const toDash = function () {
  $('#landing-view').hide()
  $('#signin-view').hide()
  $('#dash-view').show()
  $('#signup-view').hide()
}

const addHandlers = () => {
  $('#get-list').on('click', onGetList)
  $('.to-signup').on('click', toSignUp)
  $('.to-signin').on('click', toSignIn)
}

module.exports = {
  onGetList,
  toSignIn,
  addHandlers,
  toDash
}
