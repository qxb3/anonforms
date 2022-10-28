const Forms = require('../../../lib/models/forms')

module.exports = async (req, reply, app) => {
  const {
    title,
    description,
    content,
    private
  } = req.body

  try {
    const form = await Forms.create({
      title,
      description,
      content,
      private
    })

    reply.send(form)
  } catch(err) {
    app.somethingWentWrong(app, err, reply)
  }
}
