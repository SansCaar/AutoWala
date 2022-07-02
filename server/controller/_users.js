import userSchema from "../model/userSchema.js";

//adding a user
export const postUser = async (req, res) => {
  try {
    const user = new userSchema(req.body);
    const userdata = await user.save();
    res.status(201).json(userdata);
  } catch (e) {
    res.status(400).json(e);
  }
};

//Getting all the users
export const getAllUser = async (req, res) => {
  try {
    const allUsers = await userSchema.find();
    res.status(201).send(allUsers);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Deleting specific user
export const dltUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const dltUser = await userSchema.findByIdAndDelete(_id);
    res.status(202).send(dltUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Getting specific user
export const getOneUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const singleUser = await userSchema.findById(_id);
    if (!singleUser) {
      return res.status(404).send();
    } else {
      res.status(201).send(singleUser);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

//Updating specific user
export const updateUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateUser = await userSchema.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(201).send(updateUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

// for uploading the user image to the data base

export const uploadImage = async (req, res) => {
  const imageToUpload = req.data;

  // the image url in the server
  const serverImageUrl = "someUrl";

  return res.status(200).json(serverImageUrl);
};
