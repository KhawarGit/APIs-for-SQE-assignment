const Router = require('express').Router()
const { getAllProducts, getProductById } = require('./product.controller.js');

Router.get("/all", getAllProducts);
Router.get("/:id", getProductById);
module.exports = Router;