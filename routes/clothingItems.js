const router = require("express").Router();
const auth = require("../middlewares/auth");

const { validateCardBody, validateId } = require("../middlewares/validation");

const {
  getItems,
  createItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");

router.get("/", getItems);
router.post("/", auth, validateCardBody, createItem);
router.delete("/:id", auth, validateId, deleteItem);

router.put("/:id/likes", auth, validateId, likeItem);
router.delete("/:id/likes", auth, validateId, dislikeItem);

module.exports = router;
