const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  img: String,
  Stock: Number,
  rating: [{ userid: String, value: Number }],
  size: String,
  colour: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
});

const ProductModel = new mongoose.model("Products", ProductSchema);

module.exports = ProductModel;
