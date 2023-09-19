const products = [];
let id = 1;
module.exports = class Product{

    constructor(title, image, description, price) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.price = price;
    }
    static Add (product){
        product.id = id
        products.push(product);
        id ++
    }
    static getAll(){
        return products;
    }

    static findById(id){
        const result =  products.find(p => p.id === id)
        return result[0]
    }
}