'use strict'

// const showPatientsTemplate = require('../templates/patient-listing.handlebars')
const showRestaurantTemplate = require('../templates/list.handlebars')
// const appEvents = require('./events.js')

const getRestaurantSuccess = (data) => {
  console.log(data)
  const showRestauranHtml = showRestaurantTemplate({ users: data.user.yelp_id })
  $('#dash-content').append(showRestauranHtml)
}

const failure = (error) => {
  console.error('It is what it is')
  console.error(error)
}

module.exports = {
  getRestaurantSuccess,
  failure
}
