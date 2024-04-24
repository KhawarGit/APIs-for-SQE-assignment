const Router = require('express').Router()
const { getAllProducts, getProductById, postAddProduct } = require('./product.controller.js');
//GET http://localhost:8000/product/all
Router.get("/all", getAllProducts);
//GET http://localhost:8000/product/1
Router.get("/:id", getProductById);
//POST http://localhost:8000/product/add
Router.post("/add", postAddProduct);
//exporting this router
module.exports = Router;