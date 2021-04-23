const store = require('../store')

const onCreateQuestionSuccess = function (response) {
  store.question = response.question
  $('#create-question-message').text('Question created successfully')
  $('#create-question-message').addClass('success')
  setTimeout(() => {
    $('#create-question-message').text('')
    $('#create-question-message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
}

const onCreateQuestionFailure = function () {
  $('#create-question-message').text('Something went wrong, please try again later')
  $('#create-question-message').addClass('failure')
  setTimeout(() => {
    $('#create-question-message').text('')
    $('#create-question-message').removeClass('failure')
  }, 5000)
  $('form').trigger('reset')
}

module.exports = {
  onCreateQuestionSuccess,
  onCreateQuestionFailure
}
