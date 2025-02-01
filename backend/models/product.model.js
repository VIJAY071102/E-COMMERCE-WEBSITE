const mongoose = require("mongoose");
const productSchema = require("../schema/product.schema");
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
