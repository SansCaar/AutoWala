import express from "express";
import { getAllUsers } from "../controller/userController";

const router = express.Router();

router.route("/").get(getAllUsers); // for getting all the users

export default router;
