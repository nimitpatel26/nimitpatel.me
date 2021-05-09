

const readAllRoute = require('../fauna/read-all')

const handler = async () => {
  try {

    return readAllRoute.handler("projects")

  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
