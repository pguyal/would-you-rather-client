const store = require('../store')

const onSignUpSuccess = function () {
  $('#message').text('Account successfully created!')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 1000)
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(response.user.email + ' signed in successfully')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 1000)
  $('form').trigger('reset')
  $('#create-question-btn').show()
  $('#view-question').show()
  $('#change-pw-btn').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const onChangePasswordSuccess = function () {
  $('#message').text('Password changed successfully')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 1000)
  $('form').trigger('reset')
  $('#change-password').hide()
  $('#change-password-return').hide()
  $('#create-question-btn').show()
  $('#view-question').show()
  $('#change-pw-btn').show()
  $('#sign-out').show()
}

const onSignOutSuccess = function () {
  store.user = null
  $('#message').text('Signed out successfully')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 1000)
  $('form').trigger('reset')
  $('#create-question-btn').hide()
  $('#change-pw-btn').hide()
  $('#view-question').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}

const onError = function () {
  $('#message').text('Something went wrong, please try again.')
  $('#message').addClass('failure')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('failure')
  }, 5000)
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onChangePasswordSuccess,
  onError
}
