import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";
import Journal from "../models/Journal.js";

const createExercise = async (req, res) => {
  const { sets, reps, weight } = req.body;

  if (!sets || !reps || !weight) {
    throw new BadRequestError("Please provide values");
  }

  res.status(StatusCodes.CREATED).json({ msg: "Create Exercise" });
};

const getExercises = (req, res) => {

  res.status(StatusCodes.CREATED).json({ msg: "Get Exercise" });
};

const updateExercise = (req, res) => {
  res.status(StatusCodes.CREATED).json({ msg: "Update Exercise" });
};

const deleteExercise = (req, res) => {
  res.status(StatusCodes.CREATED).json({ msg: "Delete Exercise" });
};

export { createExercise, getExercise, updateExercise, deleteExercise };
