import mongoose from "mongoose";
import exercises from "../exercises.json";

const ExerciseSchema = new mongoose.Schema(
  {
    exercise: {
      type: String,
      enum: [...exercises.chest_exercises],
      default: "Bench Press",
    },
    sets: {
      type: Number,
      default: "4",
    },

    reps: {
      type: Number,
      default: "10",
    },
    weight: {
      type: Number,
      default: "50",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Exercise", ExerciseSchema);
