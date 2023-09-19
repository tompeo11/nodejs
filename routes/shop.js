const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop-controller');


router.get('/', shopController.getProductList);
router.get('/shop/cart', shopController.shoppingCart);

module.exports = router;