const {Router} = require("express")
const { create, createshow } = require("../controllers/product.controller")
const { verifyAdmin } = require("../middlewares/auth")

const ProductRoute = Router()

ProductRoute.get("/create",createshow)
ProductRoute.post("/create",verifyAdmin,create)

module.exports = ProductRoute