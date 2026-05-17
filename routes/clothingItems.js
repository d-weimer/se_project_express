const router = require("express").Router();

router.get("/", () => console.log("GET item"));
router.post("/", () => console.log("POST new item"));
router.delete("/:itemID", () => console.log("DELETE item by ID"));

module.exports = router;
