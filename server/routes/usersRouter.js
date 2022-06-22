import express from "express";
import {getAllUser} from '../controller/_users.js';
const router = express.Router();
router.route("/").get(getAllUser)

export default router;
               