import express from "express"
const router = express.Router()

import {
  createExercise,
  getExercise,
  deleteExercise,
  updateExercise,
} from "../controllers/journalController.js";

router.route("/").post(createExercise).get(getExercise)

router.route("/:id").patch(updateExercise).delete(deleteExercise)

export default router



