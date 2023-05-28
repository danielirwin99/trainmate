import { StatusCodes } from "http-status-codes";

const createExercise = (req, res) => {
  res.status(StatusCodes.CREATED).json({ msg: "Create Exercise" });
};

const getExercise = (req, res) => {
  res.status(StatusCodes.CREATED).json({ msg: "Get Exercise" });
};

const updateExercise = (req, res) => {
  res.status(StatusCodes.CREATED).json({ msg: "Update Exercise" });
};

const deleteExercise = (req, res) => {
  res.status(StatusCodes.CREATED).json({ msg: "Delete Exercise" });
};

export { createExercise, getExercise, updateExercise, deleteExercise };
