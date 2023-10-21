const { product, cart } = require("./models");

// Product Management

const addProduct = async (req, res, next) => {
  try {
    const porduct = await product.create(req.body);
    return res.status(200).json({
      status: true,
      data: porduct,
    });
  } catch (error) {
    console.log(error);
    next(error.message);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await product.find();
    return res.status(200).json({
      status: true,
      data: allProducts,
    });
  } catch (error) {
    console.log(error);
    next(error.message);
  }
};

// Add Product to Cart

const addTocart = async (req, res, next) => {
  try {
    const porduct = await product.create(req.body);
    return res.status(200).json({
      status: true,
      data: porduct,
    });
  } catch (error) {
    console.log(error);
    next(error.message);
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  addTocart,
};
