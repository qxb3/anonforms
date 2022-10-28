module.exports = {
  $id: 'form',
  type: 'object',
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    description: { type: 'string' },
    content: { type: 'string' },
    private: { type: 'boolean' },
    uploadedDate: {
      type: 'object',
      properties: {
        timestamp: { type: 'integer' },
        readable: { type: 'string' }
      }
    }
  }
}
