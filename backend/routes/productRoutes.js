const express = require('express');
const { addProduct, getAllProducts } = require('../controllers/productController');
const router = express.Router();

// Use the controller functions properly
router.post('/add', addProduct);       // Add product (Seller)
router.get('/all', getAllProducts);     // Get all products (Buyer)

module.exports = router;
