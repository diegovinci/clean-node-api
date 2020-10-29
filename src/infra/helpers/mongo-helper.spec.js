const sut = require('./mongo-helper')

describe('sut', () => {
  beforeAll(async () => {
    await sut.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await sut.disconnect()
  })

  test('Should reconnect when getCollection method is invoked and client is diconnected', async () => {
    expect(sut.db).toBeTruthy()
    await sut.disconnect()
    expect(sut.db).toBeFalsy()
    await sut.getCollection('users')
    expect(sut.db).toBeTruthy()
  })
})
