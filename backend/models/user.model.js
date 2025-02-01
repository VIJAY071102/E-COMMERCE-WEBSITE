const mongoose = require("mongoose");
const userSchema = require("../schema/user.schema");
const User = mongoose.model("User", userSchema);

module.exports = User;
