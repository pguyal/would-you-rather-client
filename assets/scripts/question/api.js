const config = require('../config')
const store = require('../store')

const createQuestion = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/questions',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const viewQuestion = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/questions',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const destroyQuestion = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/questions/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateQuestion = function (id, formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/questions/' + id,
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createQuestion,
  viewQuestion,
  destroyQuestion,
  updateQuestion
}
