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

module.exports = {
  createQuestion
}
