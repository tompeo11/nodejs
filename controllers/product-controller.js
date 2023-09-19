const ProductController = require('../models/product');

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

    const products = {
        title: req.body.title,
        image: imgName,
        description : req.body.description,
        price : req.body.price
    }
    ProductController.Add(products);
    res.redirect('/');
}

exports.getProductList = (req, res, next) => {
    res.render('admin/list-product', {
        path : 'admin/list-product'
    })
}


exports.listProduct = (req, res, next) => {
    const products = ProductController.getAll();
    console.log(products)
    res.render('admin/list-product', {
        products : products,
        path : 'admin/list-product'
    });
}

exports.editProduct = (req, res, next) => {
    const id = req.params.id
    const product = ProductController.findById(id)
    console.log(product)
    res.render('admin/edit-product', {
        product : product,
        path : 'admin/edit-product'
    });
}