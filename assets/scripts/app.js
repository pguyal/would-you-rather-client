'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const questionEvents = require('./question/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-out').hide()
  $('#change-password-return').hide()
  $('#question-return').hide()
  $('#change-password').hide()
  $('#change-pw-btn').hide()
  $('#create-question-btn').hide()
  $('#create-question').hide()
  $('#view-question').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#change-pw-btn').on('click', authEvents.onChangePasswordBtn)
  $('#change-password-return').on('click', authEvents.onChangePasswordReturn)
  $('#question-return').on('click', questionEvents.onQuestionReturn)
  $('#create-question-btn').on('click', questionEvents.onCreateQuestionBtn)
  $('#create-question').on('submit', questionEvents.onCreateQuestion)
  $('#view-question').on('click', questionEvents.onViewQuestion)
})
