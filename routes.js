const { user_data } = require("./models");

const router = require("express").Router();

// router.get("/users", getUsers);

router.get("/user", async (req, res, next) => {
  const data = await user_data.find();
  console.log(data);
  return res.status(200).json({
    status: true,
    data,
  });
});

module.exports = router;
