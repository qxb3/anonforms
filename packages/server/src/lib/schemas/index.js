const plugin = require('fastify-plugin')

module.exports = plugin((app, _options, done) => {
  app.addSchema(require('./form'))

  done()
})
