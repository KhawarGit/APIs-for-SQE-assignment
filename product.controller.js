const productData = require('./product.data.json');

const getAllProducts = (req, res) => {
    res.send(productData);
};
const getProductById = (req, res) => {
    if(!(Number.isInteger(parseInt(req.params.id)))){
        res.status(400).json({
            message: "Id of the required product is not provided or is not integer."
        });
    }else{
        let product = productData.filter(p => p.id==parseInt(req.params.id));
        if(product.length==0){
            res.status(400).json({
                message: "Provided id is not correct."
            });
        } else{
            res.status(200).json({
                data: product
            });
        };
    }
}

module.exports = {
    getAllProducts,
    getProductById,

}