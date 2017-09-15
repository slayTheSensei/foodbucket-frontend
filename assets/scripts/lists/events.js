'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const app = require('../app.js')

const onGetList = (event, data) => {
  console.log(data)
  api.getLists()
    .then(ui.getListSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  onGetList()
}

module.exports = {
  onGetList
}
