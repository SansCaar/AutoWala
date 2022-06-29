import express from "express";
import {setRide,getAllRide,getRideById ,getValidRides,setAccepted,checkAccepted} from '../controller/_reqrides.js';
const reqriderouter = express.Router();

reqriderouter.route("/").get(getAllRide)
reqriderouter.route("/:id").get(getRideById)
reqriderouter.route("/post").post(setRide)
reqriderouter.route("/get/rides").get(getValidRides)
reqriderouter.route("/accept/:id").get(setAccepted)
reqriderouter.route("/check/:id").get(checkAccepted)


// router.route("/:id").get(getOneUser)
// router.route("/:id").delete(dltUser)
// router.route("/:id").patch(updateUser)

export default reqriderouter;
               