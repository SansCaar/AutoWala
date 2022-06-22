import express from "express";
<<<<<<< HEAD
import {getAllUser} from '../controller/_users.js';
import {postUser} from '../controller/_users.js';

const router = express.Router();
router.route("/get").get(getAllUser)
router.route("/post").post(postUser)
=======
import {dltUser, getAllUser, getOneUser, updateUser} from '../controller/_users.js';
const router = express.Router();
router.route("/").get(getAllUser)
router.route("/:id").get(getOneUser)
router.route("/:id").delete(dltUser)
router.route("/:id").patch(updateUser)
>>>>>>> aa7dd69e5b65ba47629d25133f2ad5ec847b2b39

export default router;
               