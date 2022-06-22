import express from "express";
import {getAllUser} from '../controller/_users.js';
import {postUser} from '../controller/_users.js';

const router = express.Router();
router.route("/get").get(getAllUser)
router.route("/post").post(postUser)

export default router;
               