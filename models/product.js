const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    category: String,
    title: String,
    price: Number,
    description: String
});


const Product = mongoose.model('Products',productSchema);


module.exports = Product;