const Product = require('../models/product');
const Joi = require('joi');

exports.createProduct = async (req,res) => {
    try {
        const result = validate(req.body);
        if(result.success) {
            const newProduct = await Product.create({...req.body});
            return res.json({success: true,payload: newProduct});
        } else {
            return res.status(400).json(req.body);
        }
    } catch (error) {
        res.status(400).json({success: false,errorMsg: error.message});
    }
}

exports.getProducts = async (req,res) => {
    try {
        const products = await Product.find();
        return res.json(products)
    } catch (error) {
        res.status(400).json({success: false,errorMsg: error.message});
    }
}

exports.getProductsByPrice = async (req,res) => {
    try {
        const {type} = req.query;
        if(type === 'increment') {
            const products = await Product.find().sort(['price',1]);
        } else {
            const products = await Product.find().sort(['price',-1]);
        }
        res.json(products);
    } catch (error) {
        res.status(400).json({success: false,errorMsg: error.message});
    }
}

exports.searchProducts = async (req,res) => {
    try {
        const searchResult = await Product.find({$text: {$search: req.query.search}});
        res.json({success: true,payload: searchResult});
    } catch (error) {
        res.json({success: false,errorMsg: error.message});
    }
}


function validate(data) {
    const schema = Joi.object({
        title: Joi.string().required(),
        price: Joi.string().required(),
        description: Joi.string().required(),
        category: Joi.string().required()
    });

    const {error} = schema.validate(data);

    if(error) {
        return {success: false,errorMsg: error.details[0].message};
    } else {
        return {success: true};
    }
}
















































