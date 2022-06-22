import express from "express";
import {dltUser, getAllUser, getOneUser, updateUser} from '../controller/_users.js';
const router = express.Router();
router.route("/").get(getAllUser)
router.route("/:id").get(getOneUser)
router.route("/:id").delete(dltUser)
router.route("/:id").patch(updateUser)

export default router;
               