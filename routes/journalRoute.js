import express from "express"
const router = express.Router()

import {
  createExercise,
  getExercises,
  deleteExercise,
  updateExercise,
} from "../controllers/journalController.js";

router.route("/").post(createExercise).get(getExercises)

router.route("/:id").patch(updateExercise).delete(deleteExercise)

export default router



