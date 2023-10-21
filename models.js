const mongoose = require("mongoose");

const user_Schema = new mongoose.Schema({
  name: String,
  userName: String,
});
const user = mongoose.model("User", user_Schema);

const product_Schema = new mongoose.Schema({
  name: String,
  price: Number,
  availableQuantity: Number,
});
const product = mongoose.model("Product", product_Schema);

const cart_Schema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: Number,
  totalPrice: Number,
});
const cart = mongoose.model("Cart", cart_Schema);

module.exports = { user, product, cart };
