const router = require("express").Router();

const userRouter = require("./users.js");
const itemRouter = require("./clothingItems.js");

router.use("/users", userRouter);
router.use("/items", itemRouter);

module.exports = router;
