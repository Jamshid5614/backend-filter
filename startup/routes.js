const express = require('express');
const productRoutes = require('../routes/product');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api',productRoutes);
}













