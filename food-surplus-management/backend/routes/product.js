const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Add Product
router.post('/', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json({ message: "Product added successfully" });
});

// Get All Products (For Buyer Page)
router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

module.exports = router;
