const router = require("express").Router();

const userRouter = require("./users.js");
const itemRouter = require("./clothingItems.js");

router.use("/users", userRouter);
router.use("/items", itemRouter);

router.use((req, res) => {
  res.status(404).send({
    message: "Requested resource not found",
  });
});

module.exports = router;
