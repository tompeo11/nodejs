const Product = require("../models/product");
const Product1 = require('../models/mongoProduct');

exports.getProductList = async (req, res, next) => {
    const products = await Product1.getAll()
    res.render('shop', {
        pageTitle: 'Shop', path: '/', products: products
    });

}

exports.shoppingCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Cart'
    });
}

exports.listProduct = (req, res, next) => {
    res.render('admin/list-product');
}

exports.updateProduct = (req, res, next) => {
    res.render('admin/edit-product');
}