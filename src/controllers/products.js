const ProductsModel = require('../models/products')

async function get(req, res){
    const { id } = req.params /// ?id=123
    
// parte mais importante da aula, saber como fazer o postman ler os id's sem precisar indenfica-los
    const obj = id ? { _id: id } : null //if ternário

    const products = await ProductsModel.find(obj)


    res.send(products)


}

async function post(req, res){
    const {
        name,
        brand,
        price,
    } = req.body


    const products = new ProductsModel({
        name,
        brand,
        price,
    })

    products.save()


    res.send({
        message: 'success'
    })
}

async function put(req, res){
    const { id } = req.params
    const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

    res.send({
        message: 'success',
        product,
    })

/*     const product = await ProductsModel.findOne({ _id: id })
    
    await product.updateOne(req.body)


    res.send({
        message: 'success',
        product,
    }) */
}

async function remove(req, res){
    const { id } = req.params

    const remove = await ProductsModel.deleteOne({ _id: id })

    const message = remove.ok ? 'error': 'success'



    res.send({
        message,
    })

}


module.exports = {
    get,
    post,
    put,
    remove,
}
