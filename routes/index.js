const router = require("express").Router();

const userRouter = require("./users");
const itemRouter = require("./clothingItems");
const { login, createUser } = require("../controllers/users");
const auth = require("../middlewares/auth");
const {
  validateAuthentication,
  validateUserBody,
} = require("../middlewares/validation");
const NotFoundError = require("../errors/not-found-error");

router.post("/signin", validateAuthentication, login);
router.post("/signup", validateUserBody, createUser);
router.use("/items", itemRouter);

router.use(auth);

router.use("/users", userRouter);

router.use((req, res, next) => {
  next(new NotFoundError("Requested resource not found"));
});

module.exports = router;
