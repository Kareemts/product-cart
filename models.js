const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const user_Schema = new mongoose.Schema({
  name: String,
  email: String,
});
const user_data = mongoose.model("User", user_Schema);

module.exports = { user_data };
