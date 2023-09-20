const products = []
let _id = 0

class Product {
    constructor(title, price, description, image) {
        this.id = _id
        this.title = title
        this.price = price
        this.description = description
        this.image = image
    }

    static getAll = () => {
        return products
    }

    static add = (product) => {
        _id++
        const newProduct = { ...product, id: _id }
        products.push(newProduct)
    }

    static findById = (id) => {
        return products.find((p) => p.id === id)
    }

    static update = (product) => {
        const index = products.findIndex((p) => p.id === product.id)
        if (index !== -1) {
            products[index] = { ...products[index], ...product }
        } else {
            console.log('Update product >> Không tìm thấy product')
        }
    }

    static delete = (product) => {
        const index = products.findIndex((p) => p.id === product.id)
        if (index !== -1) {
            products.splice(index, 1)
            console.log('Xoa thanh cong')
        } else {
            console.log('Remove product >> Không tìm thấy product')
        }
    }

}

module.exports = Product;




