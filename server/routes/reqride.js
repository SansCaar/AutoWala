import express from "express";
import {setRide,getRide, getValidRides,setAccepted} from '../controller/_reqrides.js';
const reqriderouter = express.Router();

reqriderouter.route("/").get(getRide)
reqriderouter.route("/post").post(setRide)
reqriderouter.route("/getrides").get(getValidRides)
reqriderouter.route("/accept/:id").get(setAccepted)

// router.route("/:id").get(getOneUser)
// router.route("/:id").delete(dltUser)
// router.route("/:id").patch(updateUser)

export default reqriderouter;
               