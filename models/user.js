const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: String,
  credits: {
    default: 0,
    type: Number
  }
});

mongoose.model("users", UserSchema);
