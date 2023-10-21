const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const product_Schema = new mongoose.Schema({
  name: String,
  price: Number,
  availableQuantity: Number,
});
const product = mongoose.model("Product", product_Schema);

const cart_Schema = new mongoose.Schema({
  name: String,
  price: Number,
  availableQuantity: Number,
});
const cart = mongoose.model("Cart", cart_Schema);

module.exports = { product, cart };
