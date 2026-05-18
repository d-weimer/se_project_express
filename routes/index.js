const router = require("express").Router();

const userRouter = require("./users.js");
const itemRouter = require("./clothingItems.js");
const { NOT_FOUND_ERROR } = require("../utils/errors.js");

router.use("/users", userRouter);
router.use("/items", itemRouter);

router.use((req, res) => {
  res.status(NOT_FOUND_ERROR).send({
    message: "Requested resource not found",
  });
});

module.exports = router;
