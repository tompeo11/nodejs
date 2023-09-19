const Product = require("../models/product");

exports.getProductList = (req, res, next) => {
    const products = Product.getAll();
    res.render('shop', {
        pageTitle: 'Shop',
        path: '/',
        products : products
    });
}

exports.shoppingCart = (req, res, next) => {
    res.render('shop/cart',
        {pageTitle: 'Cart'
    });
}

exports.listProduct = (req, res, next) => {
    res.render('admin/list-product');
}

exports.updateProduct = (req, res, next) => {
    res.render('admin/edit-product');
}