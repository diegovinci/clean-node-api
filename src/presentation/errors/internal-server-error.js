module.exports = class InternalServerError extends Error {
  constructor () {
    super('An error occurred on the server')
    this.name = 'InternalServerError'
  }
}
