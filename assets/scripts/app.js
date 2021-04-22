'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-out').hide()
  $('#change-pw-form').hide()
  $('#change-pw-button').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('change-pw-form').on('submit', authEvents.onConfirmChangePw)
  $('#change-pw-button').on('click', authEvents.onChangePw)
})
