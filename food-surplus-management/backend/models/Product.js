const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: String,
    description: String,
    price: Number,
    contact: String,
});

module.exports = mongoose.model('Product', ProductSchema);
