const { addProduct, getAllProducts, addTocart } = require("./controller");

const router = require("express").Router();

// Product Management

// router for creating new product

router.post("/addProduct", addProduct);

// router for view all products

router.get("/getAllProducts", getAllProducts);

// Add Product to Cart

router.get("/addTocart", addTocart);

module.exports = router;
