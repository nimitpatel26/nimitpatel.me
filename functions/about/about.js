

const readRoute = require('../fauna/read')

const handler = async () => {
  try {

    return readRoute.handler("about")

  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
