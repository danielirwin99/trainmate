import mongoose from "mongoose";
import validator from "validator";

const ExerciseSchema = new mongoose.Schema({
  exercise: {
    type: String,
    require: [true, "Please provide the exercise"],
    minLength: 3,
    maxlength: 20,
    trim: true,
  },
  weight: {
    type: String,
    require: [true, "Please provide email"],
    minLength: 5,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
  },
  reps: {
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

export default mongoose.model("Exercise", ExerciseSchema);
