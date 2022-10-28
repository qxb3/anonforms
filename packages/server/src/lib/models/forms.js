const { createSchema, requiredType } = require('../utils/db')
const moment = require('moment')

module.exports = createSchema('forms', {
  title: requiredType(String),
  description: requiredType(String),
  content: requiredType(String),
  private: requiredType(Boolean),
  uploadedDate: {
    timestamp: {
      type: Number,
      default: moment.now()
    },
    readable: {
      type: String,
      default: moment().format('MMM DD, YYYY - LT')
    }
  }
})
