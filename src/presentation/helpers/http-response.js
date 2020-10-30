const { InternalServerError, UnauthorizedError } = require('../errors')

module.exports = class HttpResponse {
  static created (data) {
    return {
      statusCode: 201,
      body: data
    }
  }

  static badRequest (error) {
    return {
      statusCode: 400,
      body: {
        error: error.message
      }
    }
  }

  static unauthorized () {
    return {
      statusCode: 401,
      body: {
        error: new UnauthorizedError().message
      }
    }
  }

  static internalServerError () {
    return {
      statusCode: 500,
      body: {
        error: new InternalServerError().message
      }
    }
  }
}
