import express from "express";
import {setRide,getRide, getValidRides} from '../controller/_reqrides.js';
const reqriderouter = express.Router();

reqriderouter.route("/").get(getRide)
reqriderouter.route("/post").post(setRide)
reqriderouter.route("/get").get(getValidRides)

// router.route("/:id").get(getOneUser)
// router.route("/:id").delete(dltUser)
// router.route("/:id").patch(updateUser)

export default reqriderouter;
               