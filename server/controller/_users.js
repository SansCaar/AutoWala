import userSchema from "../model/userSchema.js";

//Getting whole user
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
