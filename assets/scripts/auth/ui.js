const store = require('../store')

const onSignUpSuccess = function () {
  $('#message').text('Account successfully created!')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 2000)
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(response.user.email + ' signed in successfully')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 2000)
  $('form').trigger('reset')
  $('#sign-out').show()
  $('#change-pw-button').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const onChangePasswordSuccess = function () {
  $('#message').text('Password changed successfully')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 2000)
  $('form').trigger('reset')
  $('#change-password').hide()
  $('#return').hide()
  $('#change-pw-button').show()
  $('#sign-out').show()
}

const onSignOutSuccess = function () {
  store.user = null
  $('#message').text('Signed out successfully')
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('success')
  }, 2000)
  $('form').trigger('reset')
  $('#change-pw-button').hide()
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
