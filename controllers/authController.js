import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";
import attachCookies from "../utils/attachCookies.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please provide credentials");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    throw new BadRequestError("Email already in use");
  }

  const user = await User.create({ name, email, password });

  const token = user.createJWT();

  attachCookies({ res, token });

  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      name: user.name,
      password: user.password,
    },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new UnAuthenticatedError("No user found");
  }

  console.log(user);

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid password");
  }
  const token = user.createJWT();

  console.log(token);

  // Removes the password from the response so the Frontend does not get it
  user.password = undefined;

  attachCookies({ res, token });
  res
    .status(StatusCodes.OK)
    .json({ user, weight: user.weight, height: user.height });
};

const update = async (req, res) => {
  const { email, name, lastName, weight, height } = req.body;

  if (!email || !name || !lastName || !weight || !height) {
    throw new BadRequestError("Please provide all values");
  }

  const user = await User.findOne({ _id: req.user.userId });

  user.email = email;
  user.name = name;
  user.lastName = lastName;
  user.weight = weight;
  user.height = height;

  await user.save();

  const token = user.createJWT();

  attachCookies({ res, token });

  res.status(StatusCodes.OK).json({
    user,
    weight: user.weight,
    lastName: user.lastName,
    height: user.height,
  });
};

// When the User logs out it removes the cookie token too
const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    // Expires immediately after logging out
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "User Logged Out" });
};

const deleteUser = async (req, res) => {
  const { id: userId } = req.params;
  const user = await User.findOneAndDelete({ _id: userId });

  if (!user) {
    throw new NotFoundError(`No user with id :${_id}`);
  }

  res.status(StatusCodes.OK).json({ msg: "User Successfully Deleted" });
};

const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  res
    .status(StatusCodes.OK)
    .json({ user, weight: user.weight, height: user.height });
};

export { register, login, update, logout, deleteUser, getCurrentUser };
