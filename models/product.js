const products = [];
let id = 0;
module.exports = class Product{

    constructor(title, image, description, price) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.price = price;
    }
    static Add (product){
        id ++
        product.id = id
        products.push(product);

    }
    static getAll(){
        return products;
    }

    static findById = (id) => {
        return products.find((p) => p.id === id)
    }
}