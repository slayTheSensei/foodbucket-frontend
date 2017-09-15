'use strict'

// const showPatientsTemplate = require('../templates/patient-listing.handlebars')
const showListTemplate = require('../templates/list.handlebars')
// const appEvents = require('./events.js')

const getListSuccess = (data) => {
  console.log(data)
  const showListHtml = showListTemplate({ users: data.user.yelp_id })
  $('#dash-content').append(showListHtml)
}

const failure = (error) => {
  console.error('You suck guy')
  console.error(error)
}

module.exports = {

}
