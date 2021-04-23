const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateQuestionBtn = function (event) {
  event.preventDefault()
  $('#create-question-btn').hide()
  $('#change-pw-button').hide()
  $('#sign-out').hide()
  $('#create-question').show()
  $('#create-question-return').show()
}

const onCreateQuestion = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createQuestion(formData)
    .then(ui.onCreateQuestionSuccess)
    .catch(ui.onCreateQuestionFailure)
}

const onCreateQuestionReturn = function (event) {
  event.preventDefault()
  $('form').trigger('reset')
  $('#create-question-btn').show()
  $('#change-pw-button').show()
  $('#sign-out').show()
  $('#create-question').hide()
  $('#create-question-return').hide()
}

module.exports = {
  onCreateQuestionBtn,
  onCreateQuestion,
  onCreateQuestionReturn
}
