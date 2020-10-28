const app = require('./config/app')
const MongoHelper = require('../infra/helpers/mongo-helper')
const env = require('./config/env')

MongoHelper.connect(env.mongoUrl)
  .then(() => {
    app.listen(5858, () => console.log('Server running'))
  })
  .catch(console.error)
