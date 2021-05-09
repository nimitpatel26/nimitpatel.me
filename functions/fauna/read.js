
const process = require('process')
const faunadb = require('faunadb')
const serverClient = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET});

const handler = async (collectionName) => {

    try {
        var faunadb = require('faunadb'),
            q = faunadb.query;



        let ret = await serverClient.query(q.Get(q.Ref(q.Collection(collectionName), '298139636534870531')));
        ret = ret.data;

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
