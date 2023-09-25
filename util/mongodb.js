const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
let _mongoConnectionPool

const mongoConnect = (callback) => {
    mongoClient.connect('mongodb+srv://dattran932017:trancckute11@nodejs.bb2z4qm.mongodb.net/?retryWrites=true&w=majority')
        .then(client => {
        console.log('connected')
        _mongoConnectionPool = client.db()
        callback()
    })
        .catch(err => console.log(err))
}

const getDB = () => {
    if (_mongoConnectionPool){
        return _mongoConnectionPool
    }
    throw 'No database found'
}

module.exports.mongoConnect = mongoConnect
module.exports.getDB = getDB