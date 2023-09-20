const Product = require('../models/product');

exports.showAddProductForm = (req, res, next) => {
    res.render('./admin/add-product',{
        pageTitle: 'Add product',
        path: '/admin/add-product'
    });
}

exports.insertNewProduct = (req, res, next) => {
    const imageFile = req.file;
    let imgName;
    if (!imageFile){
        imgName = 'noImg.jpg';
    } else {
        imgName = imageFile.filename;
    }
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Product(title, price, description, imgName);
    Product.add(product);
    res.redirect('/');
}

exports.getProductList = (req, res, next) => {
    res.render('admin/list-product', {
        path : 'admin/list-product'
    })
}


exports.listProduct = (req, res, next) => {
    const products = Product.getAll();
    res.render('admin/list-product', {
        products : products,
        path : 'admin/list-product'
    });
}

exports.editProduct = (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        const product = Product.findById(id)
        const title = 'Admin - Edit Products'
        if (product) res.render('admin/edit-product', { product, title, path : 'admin/edit-product' })
        else res.redirect('/admin/list-product')
    } catch (err) {
        console.error(`[Get] - /admin/product/:id/edit ==> `, err)
    }
}

exports.updateProduct = (req, res, next) => {
    console.log(req.body)

    const imageFile = req.file;
    let imgName;
    if (!imageFile){
        imgName = req.body.imageUrl;
    } else {
        imgName = imageFile.filename;
    }
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Product(title, price, description, imgName);
    product.id = parseInt(req.body.id);

    console.log(product)
    Product.update(product);
    res.redirect('/admin/list-product')

}