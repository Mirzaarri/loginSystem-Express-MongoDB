const express = require('express');
const router = express.Router();

const productController = require('../controllers/product')


router.post('/product', productController.addData);
router.get('/getproducts', productController.getAllProducts);
module.exports = router;