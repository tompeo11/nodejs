const express = require('express');
const path = require("path");

const products = [];
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.render(path.join(__dirname, '..', 'views', 'add-product.ejs'));
});

router.post('/add-product', (req, res, next) => {
    products.push({
        title: req.body.title
    });
    res.redirect('/');
});


module.exports = {
    router : router,
    products: products
}