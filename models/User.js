import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please provide name"],
    minLength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    require: [true, "Please provide email"],
    minLength: 5,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
  },
  password: {
    type: String,
    require: [true, "Please provide password"],
    select: false,
  },
  lastName: {
    type: String,
    maxlength: 20,
    trim: true,
    default: "Last Name",
  },
});

// Hashing password function
UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// JWT function
UserSchema.methods.createJWT = function () {
  console.log(this._id)
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

export default mongoose.model("User", UserSchema);
