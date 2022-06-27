import express from "express";
import {setRide} from '../controller/_reqrides.js';
const reqriderouter = express.Router();

reqriderouter.route("/").get(setRide)
// router.route("/").post(postUser)
// router.route("/:id").get(getOneUser)
// router.route("/:id").delete(dltUser)
// router.route("/:id").patch(updateUser)

export default reqriderouter;
               