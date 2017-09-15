'use strict'

const user = require('../lists/events.js')
const app = require('../app.js')

const success = (data) => {
  if (data) {
    console.log(data)
  } else {
    console.log('Success')
  }
}

const signUpSuccess = (data) => {
  if (data) {
    console.log('new page')
  } else {
    console.log('Success')
  }
}

const failure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  app.user = data.user
  console.log(app.user)
  console.log(data)

  // location.href = 'http://localhost:7165/profile.html'
}

const signOutSuccess = () => {
  console.log('User signed out successfully')
  app.user = null
  location.href = 'http://localhost:7165/index.html'
}

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
  signUpSuccess
}
