const ProductModel = require("../models/product.model")

const create = async(req,res) =>{
    try {
        req.createdBy = req.user.id
        let data = await ProductModel.create(req.body)
        res.send(data)
    } catch (error) {
        if(error){
            res.send(error)
        }
    }
}

const createshow = (req,res)=>{
    res.render("product")
}

module.exports = {create,createshow}