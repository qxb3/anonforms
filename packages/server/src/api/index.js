module.exports = (app, _options, done) => {
  app.register(require('./forms/router'), { prefix: '/forms' })

  done()
}
