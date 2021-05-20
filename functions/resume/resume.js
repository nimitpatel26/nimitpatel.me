
const fetch = require('node-fetch');

const handler = async _ => {
  try {

    let resp = await fetch(process.env.RESUME_LINK);
    let buffer = await resp.buffer();


    return {
      statusCode: 200,
      headers: { "Content-Type": "application/pdf", "Content-Disposition": "attachment; filename=Nimit_Patel_Resume.pdf" },
      body: buffer.toString('base64'),
      isBase64Encoded: true,
    };



  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
