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

// adding new product
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
      // calculating the total price
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

    console.log(viewPeoducts.length);

    // handiling the empty cart
    if (viewPeoducts.length === 0) {
      return res.status(200).json({
        status: true,
        data: {
          message: "Cart is empty",
        },
      });
    } else {
      return res.status(200).json({
        status: true,
        data: viewPeoducts,
      });
    }
  } catch (error) {
    console.log(error);
    next(error.message);
  }
};

// Remove Item from Cart
const removeItem = async (req, res, next) => {
  try {
    const { id } = req.params;

    const item = await cart.findByIdAndDelete({ _id: id });

    return res.status(200).json({
      status: true,
      data: item,
    });
  } catch (error) {
    console.log(error);
    next(error.message);
  }
};

// Calculate Total Price

const totalPrice = async (req, res, next) => {
  const { id } = req.params;

  const viewPeoducts = await cart.find({
    userId: id,
  });

  const totalPrice = viewPeoducts.reduce((total, product) => {
    itemPrice = product.totalPrice;
    return total + itemPrice;
  }, 0);

  return res.status(200).json({
    status: true,
    data: {
      totalCartPrice: totalPrice,
    },
  });
};

module.exports = {
  addUser,
  addProduct,
  getAllProducts,
  addTocart,
  viewCart,
  removeItem,
  totalPrice,
};
