import mongoose from "mongoose";
const user = new mongoose.Schema({
  user_id: {
    type: String,
  },
  user_name: {
    type: String,
  },
  user_email: {
    type: String,
  },
  user_address: {
    type: String,
  },
  user_contact: {
    type: String,
  },
  user_gfid: {
    type: String,
  },
  user_toc: {
    date: { type: String },
    time: { type: String },
  },
  user_referral: {
    type: String,
  },
  user_image: {
    type: String,
  },
});

const userSchema = mongoose.model("users", user);
export default userSchema;
