const express = require('express');
const { getAllUsers, getAllProducts } = require('../controllers/adminController');
const router = express.Router();

// Get all users for admin
router.get('/users', getAllUsers);

// Get all products for admin
router.get('/products', getAllProducts);

module.exports = router;
