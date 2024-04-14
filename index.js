const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
app.use(cors());
app.use(bodyParser.json());
const prodRouter = require('./product.router.js');
app.use("/product", prodRouter);

app.listen(8000, () => {
    console.log("App running on port : http://localhost:8000");
});