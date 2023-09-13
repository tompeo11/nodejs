const express = require('express');
const path = require('path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("in shop.js", adminData.products);
    res.render(path.join(__dirname, '..', 'views', 'shop.ejs'),
        {products : adminData.products});
});

module.exports = router;