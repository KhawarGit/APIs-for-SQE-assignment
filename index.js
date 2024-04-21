const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
//configuring third party middlewares
app.use(cors());
app.use(bodyParser.json());

//Router middleware
const prodRouter = require('./product.router.js');
//configuring product (router) middleware. 
app.use("/product", prodRouter);
//app listen on port: 8000
app.listen(8000, () => {
    console.log("App running on port : http://localhost:8000");
});