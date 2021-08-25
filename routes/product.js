const express = require('express');
const router = express.Router();
const {
    createProduct,
    getProducts,
    getProductsByPrice,
    searchProducts
} = require('../controllers/product');


router.get('/products',getProducts);
router.get('/products/sort',getProductsByPrice); // sort?type=increment || decrement
router.get('/products/search',searchProducts) // search?title="text"
router.post('/products/new',createProduct);

module.exports = router;























