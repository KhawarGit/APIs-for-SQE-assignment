const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const prodRouter = require('./product.router.js');
app.use("/product", prodRouter);

app.listen(8000, () => {
    console.log("App running on port : http://localhost:8000");
});