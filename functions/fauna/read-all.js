
const process = require('process')
const { query, Client } = require('faunadb')
const client = new Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
})

const handler = async (collectionName) => {

  try {
    const response = await client.query(query.Paginate(query.Documents(query.Collection(collectionName))));
    const itemRefs = response.data
    const getAllItemsDataQuery = itemRefs.map((ref) => query.Get(ref))
    let ret = await client.query(getAllItemsDataQuery);

    ret = ret.map(data => data.data);

    return {
      statusCode: 200,
      body: JSON.stringify(ret),
    }
  } catch (error) {
    console.log('error', error)
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    }
  }
}

module.exports = { handler }
