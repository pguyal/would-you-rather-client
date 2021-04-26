const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateQuestionBtn = function (event) {
  event.preventDefault()
  $('#create-question-btn').hide()
  $('#view-question').hide()
  $('#change-pw-btn').hide()
  $('#sign-out').hide()
  $('#create-question').show()
  $('#question-return').show()
}

const onCreateQuestion = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createQuestion(formData)
    .then(ui.onCreateQuestionSuccess)
    .catch(ui.onQuestionError)
}

const onQuestionReturn = function (event) {
  event.preventDefault()
  $('form').trigger('reset')
  $('#create-question-btn').show()
  $('#view-question').show()
  $('#change-pw-btn').show()
  $('#sign-out').show()
  $('#create-question').hide()
  $('#question-return').hide()
  $('#questions-display').hide()
}

const onViewQuestion = function () {
  $('#question-return').show()
  $('#questions-display').show()
  api.viewQuestion()
    .then(ui.onViewQuestionSuccess)
    .catch(ui.onQuestionError)
}

const onDynamicDestroyQuestion = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.destroyQuestion(id)
    .then(onViewQuestion)
    .then(ui.onDestroyQuestionSuccess)
    .catch(ui.onQuestionError)
}

module.exports = {
  onCreateQuestionBtn,
  onCreateQuestion,
  onQuestionReturn,
  onViewQuestion,
  onDynamicDestroyQuestion
}
