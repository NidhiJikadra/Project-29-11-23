const ProductModel = require("../models/product.model")

const create = async(req,res) =>{
    let data = await ProductModel.create(req.body)
    res.render("showproduct")
}

const createshow = ()=>{
    res.render("product")
}

module.exports = {create,createshow}