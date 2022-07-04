import express from "express";
import {setRide,getAllRide,getRideById ,getValidRides,setAccepted,checkAccepted,driverCanceled,userCanceled,setValidate, driverCompleted} from '../controller/_reqrides.js';
const reqriderouter = express.Router();

reqriderouter.route("/").get(getAllRide)
reqriderouter.route("/:id").get(getRideById)
reqriderouter.route("/post").post(setRide)
reqriderouter.route("/get/rides").get(getValidRides)
reqriderouter.route("/accept/:id").get(setAccepted)
reqriderouter.route("/check/:id").get(checkAccepted)
reqriderouter.route("/drivercancel/:id").get(driverCanceled)
reqriderouter.route("/drivercomplete/:id").get(driverCompleted)
// reqriderouter.route("/usercomplete/:id").get(userCompleted)


reqriderouter.route("/usercancel/:id").get(userCanceled)
reqriderouter.route("/accept/validate/:id").get(setValidate)

// router.route("/:id").get(getOneUser)
// router.route("/:id").delete(dltUser)
// router.route("/:id").patch(updateUser)

export default reqriderouter;
               