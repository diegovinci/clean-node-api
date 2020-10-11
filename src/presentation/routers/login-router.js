const HttpResponse = require('../helpers/http-response')
const MissingParaError = require('../helpers/missing-param-error')

module.exports = class LoginRouter {
  constructor (authUseCase) {
    this.authUseCase = authUseCase
  }

  async route (httpRequest) {
    try {
      const { email, password } = httpRequest.body
      if (!email) {
        return HttpResponse.badRequest(new MissingParaError('email'))
      }
      if (!password) {
        return HttpResponse.badRequest(new MissingParaError('password'))
      }

      const accessToken = await this.authUseCase.auth(email, password)
      if (!accessToken) {
        return HttpResponse.unauthorized()
      }

      return HttpResponse.ok({ accessToken })
    } catch (err) {
      return HttpResponse.internalServerError()
    }
  }
}
