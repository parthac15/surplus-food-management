const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

router.post('/add-product', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.sendStatus(201);
});

router.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

module.exports = router;
