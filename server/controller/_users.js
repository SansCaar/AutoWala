import userSchema from "../model/userSchema.js";

// for parsing the file
import multer from "multer";

//adding a user
export const postUser = async (req, res) => {
  try {
    const user = new userSchema(req.body);
    const userdata = await user.save();
    return res.status(201).json(userdata);
  } catch (e) {
    return res.status(400).json(e);
  }
};

//Getting all the users
export const getAllUser = async (req, res) => {
  try {
    const allUsers = await userSchema.find();
    return res.status(201).send(allUsers);
  } catch (error) {
    return res.status(400).send(error);
  }
};

//Deleting specific user
export const dltUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const dltUser = await userSchema.findByIdAndDelete(_id);
    return res
      .status(202)
      .json({ message: "The user has been deleted successfully" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

//Getting specific user
export const getOneUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const singleUser = await userSchema.findOne({ user_id: _id });
    if (!singleUser) {
      return res.status(404).send("user not found");
    } else {
      return res.status(201).send(singleUser);
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

//Updating specific user
export const updateUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateUser = await userSchema.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    return res.status(201).send(updateUser);
  } catch (error) {
    return res.status(400).send(error);
  }
};

// it return a status code 404  when user is not matched and 200 when it does
export const userExistance = async (req, res) => {
  const id = req.body?.id;
  const exists = await userSchema.findOne({ user_id: id });
  if (!exists || exists?.length == 0)
    return res.status(404).json({ msg: "User not found" });
  return res.status(200).json({
    msg: "user exists ",
  });
};

// for uploading the user image to the data base
export const uploadImage = async (req, res) => {
  // const imageToUpload = req.data;

  // the image url in the server
  // const serverImageUrl = "someUrl";
  console.log("The incomming req is here" + req);
  console.log({ "function File": req.file });

  if (req.file) return res.status(200).json({ fileName: req.file.path });

  return res.status(400).json({ error: "failed to upload file " });
};

// only for the current use
export const deleteAll = async (req, res) => {
  const deleteUsers = await userSchema.deleteMany({});

  return res.status(200).json({ msg: "done deleting all the users" });
};
