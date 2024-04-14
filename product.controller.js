const productData = require('./product.data.json');

const getAllProducts = (req, res) => {
    res.send(productData);
};

export {
    getAllProducts,
    
}