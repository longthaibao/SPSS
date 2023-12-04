const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    username: String,
    email: { type: String, default: "" },
    gender: String,
    password: String,
  },
  { collection: "User" }
);

mongoose.model("User", User);
