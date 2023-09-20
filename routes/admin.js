const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-controller');
const upload = require('../middleware/upload');

router.get('/add-product', productController.showAddProductForm);
router.post('/add-product', upload.single('image'), productController.insertNewProduct);

router.get('/list-product', productController.listProduct);

router.get('/edit-product/:id', productController.editProduct);
router.post('/edit-product/' , upload.single('image'), productController.updateProduct);

module.exports = {
    router : router
}