const {
  addUser,
  addProduct,
  getAllProducts,
  addTocart,
  viewCart,
} = require("./controller");

const router = require("express").Router();
// user creation
router.post("/addUser", addUser);

// Product Management

// router for creating new product
router.post("/addProduct", addProduct);

// router for view all products
router.get("/getAllProducts", getAllProducts);

// Add Product to Cart
router.post("/addTocart", addTocart);

// View Cart
router.get("/viewCart/:id", viewCart);

module.exports = router;
