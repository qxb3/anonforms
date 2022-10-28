const Forms = require('../../../lib/models/forms')

module.exports = async (_req, reply, app) => {
  try {
    const forms = await Forms.find()
    reply.send(forms)
  } catch(err) {
    app.somethingWentWrong(app, err, reply)
  }
}
