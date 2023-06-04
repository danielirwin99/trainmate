import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minLength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    minLength: 5,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
    select: false,
  },
  lastName: {
    type: String,
    maxlength: 20,
    trim: true,
    default: "Last Name",
  },
  height: {
    type: String,
    maxlength: 15,
    trim: true,
    default: "178cm",
  },
  weight: {
    type: String,
    maxlength: 10,
    trim: true,
    default: "80kg",
  },
});

// Hashing password function
UserSchema.pre("save", async function () {
  // If we are not modifying the password --> Return the whole thing successfully
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// JWT function
UserSchema.methods.createJWT = function () {
  console.log(this._id);
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (savedPassword) {
  const isMatching = await bcrypt.compare(savedPassword, this.password);
  return isMatching;
};

export default mongoose.model("User", UserSchema);
