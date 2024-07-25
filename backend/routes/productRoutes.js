const express = require('express');
const {getProducts, createProduct} = require('../controllers/productcontroller')
const authMiddleware = require('../utils/authMiddleware');
const router = express.Router();

router.get('/products', getProducts);
router.post('/products', authMiddleware, createProduct);

module.exports = router;
