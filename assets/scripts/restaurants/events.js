'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields')
const app = require('../app.js')

const onGetRestaurant = (event, data) => {
  console.log(data)
  api.getRestaurant()
    .then(ui.getRestaurantSuccess)
    .catch(ui.failure)
}

module.exports = {
  onGetRestaurant
}
