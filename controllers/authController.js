import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";
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

  attachCookies({ res, token });

  // Removes the password from the response so the Frontend does not get it
  user.password = undefined;
  res
    .status(StatusCodes.OK)
    .json({ user, weight: user.weight, height: user.height });
};

const update = (req, res) => {
  attachCookies({ res, token });
  res.status(StatusCodes.OK).send("Update User");
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

export { register, login, update, logout };
