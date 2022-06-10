const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: {
      type: String,
      default:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
