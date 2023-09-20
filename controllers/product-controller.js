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
    ProductController.add(products);
    res.redirect('/');
}

exports.getProductList = (req, res, next) => {
    res.render('admin/list-product', {
        path : 'admin/list-product'
    })
}


exports.listProduct = (req, res, next) => {
    const products = ProductController.getAll();
    res.render('admin/list-product', {
        products : products,
        path : 'admin/list-product'
    });
}

exports.editProduct = (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        const product = ProductController.findById(id)
        const title = 'Admin - Edit Products'
        if (product) res.render('admin/edit-product', { product, title, path : 'admin/edit-product' })
        else res.redirect('/admin/product')
    } catch (err) {
        console.error(`[Get] - /admin/product/:id/edit ==> `, err)
    }
}