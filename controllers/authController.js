import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import { BadRequestError } from "../errors/index.js";

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

  const token = user.createJWT()


  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      name: user.name,
      password: user.password,
      token,
    },
  });
};

const login = (req, res) => {
  res.status(StatusCodes.OK).send("Login User");
};

const update = (req, res) => {
  res.status(StatusCodes.OK).send("Update User");
};

export { register, login, update };
