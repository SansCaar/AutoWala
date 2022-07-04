import express from "express";
// importing the login and register controllers
import { loginUser } from "../controller/_loginUser.js";
import { registerUser } from "../controller/_registerUser.js";
import {
  dltUser,
  getAllUser,
  getOneUser,
  postUser,
  updateUser,
  uploadImage,
} from "../controller/_users.js";
const router = express.Router();

// for image parsing
import multer from "multer";

// for making the file name random
import { v4 as uuid } from "uuid";

router.route("/").get(getAllUser);
router.route("/").post(postUser);
router.route("/:id").get(getOneUser);
router.route("/:id").delete(dltUser);
router.route("/:id").patch(updateUser);

// login and register routes
router.route("/login").post(loginUser);
router.route("/register").post(registerUser);

// route for uploading the user image to the server

// setting up the storage mechanism
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, uuid() + file.originalname);
  },
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
});

const upload = multer({ storage: storage });

router.route("/uploadImage").post(upload.single("profile"), uploadImage);
export default router;
