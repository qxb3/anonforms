module.exports = {
  body: {
    type: 'object',
    required: ['title', 'description', 'content', 'private'],
    properties: {
      title: { type: 'string' },
      description: { type: 'string' },
      content: { type: 'string' },
      private: { type: 'boolean' }
    }
  },
  response: {
    200: { $ref: 'form' }
  }
}
