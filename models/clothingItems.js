const mongoose = require("mongoose");

const clothingItemsSchema = new mongoose.Schema({});

modules.exports = mongoose.model("item", clothingItemsSchema);
