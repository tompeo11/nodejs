const getDB = require('../util/mongodb')

class Product{
    constructor(title, price, description, image) {
        this.titl = title
        this.price  = price
        this.description  = description
        this.image  = image
    }

    save(){
        const db = getDB()
        return db.collection('products')
            .insertOne(this)
            .then(result => console.log(result))
            .catch(err => console.log(err))
    }
}

module.exports = Product