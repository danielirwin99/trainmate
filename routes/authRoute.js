import express from "express";
const router = express.Router();
import {
  register,
  login,
  update,
  logout,
  deleteUser,
  getCurrentUser,
} from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").patch(authenticateUser, update);
router.route("/logout").get(logout);
router.route("/:id").delete(deleteUser);
router.route("/getCurrentUser").get(authenticateUser, getCurrentUser);
export default router;
