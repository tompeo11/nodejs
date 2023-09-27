const {getDb} = require('../util/mongodb')

class Product {
    constructor(title, price, description, image) {
        this.title = title
        this.price = price
        this.description = description
        this.image = image
    }

    save() {
        const db = getDb()
        return db.collection('products')
            .insertOne(this)
            .then()
            .catch(err => console.log(err))
    }

    static getAll = async () => {
        const db = getDb()
        return await db.collection('products')
            .find()
            .toArray()
    }
}

module.exports = Product