import mongoose from "mongoose";
const user = new mongoose.Schema({
  user_name: {
    type: String,
  },
  user_email: {
    type: String,
  },
  user_password: {
    type: String,
  },
  user_address: {
    type: String,
  },
  user_contact: {
    type: Number,
  },
  user_gfid: {
    type: Number,
  },
  user_toc: {
    type: String,
  },
  user_referral: {
    type: String,
  },
});

const userSchema = mongoose.model("users", user);
export default userSchema;
