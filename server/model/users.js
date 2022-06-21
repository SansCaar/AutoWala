import mongoose from "mongoose";

// making a schema of the user
const schema = new mongoose.Schema({
  userName: { type: string, required: [true, "THe user name cannot be empty"] },
  phoneNumber: number,
});

// creating a model for the user
const usersModel = mongoose.model("usersModel", usersSchema);
export default usersModel;