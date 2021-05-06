// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify([
        {
          "title": "experience title",
          "details": "experience details",
        },
        {
          "title": "experience title 2",
          "details": "experience details 2",
        }
      ]),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
