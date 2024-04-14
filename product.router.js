const Router = require('express').Router()
const { getAllProducts, getProductById, postAddProduct } = require('./product.controller.js');

Router.get("/all", getAllProducts);
Router.get("/:id", getProductById);
Router.post("/add", postAddProduct);
module.exports = Router;