const ProductsModel = require('../models/products')

async function get(req, res){
    const { id } = req.params /// ?id=123
    
// parte mais importante da aula, saber como fazer o postman ler os id's sem precisar indenfica-los
    const obj = id ? { _id: id } : null //if ternário

    const products = await ProductsModel.find(obj)


    res.send(products)


}



module.exports = {
    get,
}
