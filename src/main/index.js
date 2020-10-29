const app = require('./config/app')
const MongoHelper = require('../infra/helpers/mongo-helper')
const { port, mongoUrl } = require('./config/env')

MongoHelper.connect(mongoUrl)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`))
  })
  .catch(console.error)
