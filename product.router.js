const Router = require('express').Router()
const { getAllProducts } = require('./product.controller.js');

Router.get("/products", getAllProducts);
module.exports = Router;