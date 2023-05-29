import express from "express";
const router = express.Router();

import {
  register,
  login,
  update,
  logout,
} from "../controllers/authController.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/update").patch(update);
router.route("/logout").get(logout);
export default router;
