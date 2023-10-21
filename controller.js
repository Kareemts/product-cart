const { product, cart, user } = require("./models");

// user creation
const addUser = async (req, res, next) => {
  try {
    const newUser = await user.create(req.body);
    return res.status(200).json({
      status: true,
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    next(error.message);
  }
};

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

// getting all products
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
    const { productId, quantity } = req.body;

    // for checkint available Stock
    const productDetails = await product.findById(productId);

    if (productDetails.availableQuantity < quantity) {
      return res.status(404).json({
        status: false,
        data: "Stock not available for this product",
      });
    } else {
      const totalPrice = productDetails.price * quantity;
      const productAdded = await cart.create({ ...req.body, totalPrice });
      return res.status(200).json({
        status: true,
        data: productAdded,
      });
    }
  } catch (error) {
    console.log(error);
    next(error.message);
  }
};

// view products in cart
const viewCart = async (req, res, next) => {
  try {
    const { id } = req.params;

    const viewPeoducts = await cart
      .find({
        userId: id,
      })
      .populate("productId");

    return res.status(200).json({
      status: true,
      data: viewPeoducts,
    });
  } catch (error) {
    console.log(error);
    next(error.message);
  }
};

module.exports = {
  addUser,
  addProduct,
  getAllProducts,
  addTocart,
  viewCart,
};
