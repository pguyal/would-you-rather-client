const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onError)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onError)
}

const onChangePasswordBtn = function (event) {
  event.preventDefault()
  $('#change-pw-btn').hide()
  $('#sign-out').hide()
  $('#create-question-btn').hide()
  $('#view-question').hide()
  $('#change-password').show()
  $('#change-password-return').show()
}

const onChangePasswordReturn = function (event) {
  event.preventDefault()
  $('form').trigger('reset')
  $('#create-question').hide()
  $('#change-password').hide()
  $('#change-password-return').hide()
  $('#create-question-btn').show()
  $('#view-question').show()
  $('#change-pw-btn').show()
  $('#sign-out').show()
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onChangePasswordBtn,
  onChangePasswordReturn
}
