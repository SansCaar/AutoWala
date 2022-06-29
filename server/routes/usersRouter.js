import express from "express";
// importing the login and register controllers
import { loginUser } from "../controller/_loginUser.js";
import { registerUser } from "../controller/_registerUser.js";
import {
  dltUser,
  getAllUser,
  getOneUser,
  postUser,
  updateUser,
} from "../controller/_users.js";
const router = express.Router();
router.route("/").get(getAllUser);
router.route("/").post(postUser);
router.route("/:id").get(getOneUser);
router.route("/:id").delete(dltUser);
router.route("/:id").patch(updateUser);

// login and register routes
router.route("/login").post(loginUser);
router.route("/register").post(registerUser);

export default router;
