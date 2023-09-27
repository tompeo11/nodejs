// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const url = 'mongodb+srv://dattran932017:trancckute11@nodejs.bb2z4qm.mongodb.net/c2206l_nodejs?retryWrites=true&w=majority'
// let _mongoConnectionPool;

//
// const mongoConnect = (callback) => {
//     MongoClient.connect()
//         .then(client => {
//             console.log('Connected');
//             _mongoConnectionPool = client.db();
//             callback();
//         })
//         .catch(err => console.log(err));
// }
//
// const getDB = () => {
//     if (_mongoConnectionPool) {
//         return _mongoConnectionPool;
//     }
//     throw 'No database found';
// }
//
// module.exports.mongoConnect = mongoConnect;
// module.exports.getDB = getDB;


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dattran932017:trancckute11@nodejs.bb2z4qm.mongodb.net/?retryWrites=true&w=majority";
let _mongoConnectionPool;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function mongoConnect(callback) {
    try {
        await client.connect();
        _mongoConnectionPool = client.db('c2206l_nodejs')
        console.log("Ket noi mongodb thanh cong");
        callback()
    }  catch (err){
        console.log(err)
    }
}

const getDb = () => {
    if (_mongoConnectionPool) return _mongoConnectionPool
    throw "Khong co database"
}

module.exports = {
    getDb,
    mongoConnect
}
