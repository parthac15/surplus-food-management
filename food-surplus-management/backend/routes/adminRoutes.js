const express = require('express');
const User = require('../models/User');
const Product = require('../models/Product');
const router = express.Router();

router.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

module.exports = router;
