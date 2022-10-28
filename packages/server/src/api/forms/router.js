const fetchController = require('./fetch/controller')
const fetchSchema = require('./fetch/schema')

const newController = require('./new/controller')
const newSchema = require('./new/schema')

module.exports = (app, _options, done) => {
  app.get('/fetch', {
    schema: fetchSchema
  }, (req, reply) => fetchController(req, reply, app))

  app.post('/new', {
    schema: newSchema
  }, (req, reply) => newController(req, reply, app))

  done()
}
