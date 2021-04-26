const store = require('../store')

const onCreateQuestionSuccess = function (response) {
  store.question = response.question
  $('#question-message').text('Question created successfully')
  $('#question-message').addClass('success')
  setTimeout(() => {
    $('#question-message').text('')
    $('#question-message').removeClass('success')
  }, 3000)
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
    <hr>
    <h4>Question: ${question.text}</h4>
    <p>Option one: ${question.option_one}</p>
    <p>Option two: ${question.option_two}</p>
    <button class='questions-destroy-dynamic' data-id=${question._id}>
        Delete Question
      </button>
    <hr>
    `
  })
  $('#questions-display').html(questionsHtml)
  // if (questionsHtml === ' ') {
  //   $('#questions-display').html('You have no questions!')
  // }
}

const onDestroyQuestionSuccess = function () {
  $('#question-delete-message').text('Question deleted successfully')
  $('#question-delete-message').addClass('success')
  setTimeout(() => {
    $('#question-delete-message').text('')
    $('#question-delete-message').removeClass('success')
  }, 3000)
}

module.exports = {
  onCreateQuestionSuccess,
  onQuestionError,
  onViewQuestionSuccess,
  onDestroyQuestionSuccess
}
