const store = require('../store')

const onCreateQuestionSuccess = function (response) {
  store.question = response.question
  $('#question-message').text('Question created successfully')
  $('#question-message').addClass('success')
  setTimeout(() => {
    $('#question-message').text('')
    $('#question-message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
}

const onQuestionError = function () {
  $('#question-message').text('Something went wrong, please try again later')
  $('#question-message').addClass('failure')
  setTimeout(() => {
    $('#question-message').text('')
    $('#question-message').removeClass('failure')
  }, 5000)
  $('form').trigger('reset')
}

const onViewQuestionSuccess = function (response) {
  $('#create-question-btn').hide()
  $('#sign-out').hide()
  $('#change-pw-btn').hide()
  $('#view-question').hide()
  const questions = response.questions
  let questionsHtml = ''
  questions.forEach(question => {
    questionsHtml += `
    <h4>Question: ${question.text}</h4>
    <p>Option one: ${question.option_one}</p>
    <p>Option two: ${question.option_two}</p>
    `
  })
  $('#questions-display').html(questionsHtml)
}

module.exports = {
  onCreateQuestionSuccess,
  onQuestionError,
  onViewQuestionSuccess
}
