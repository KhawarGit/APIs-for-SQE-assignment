const Router = require('express').Router()
const { getAllProducts } = require('./product.controller.js');

Router.get("/all", getAllProducts);
module.exports = Router;