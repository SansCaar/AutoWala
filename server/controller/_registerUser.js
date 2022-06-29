import bcrypt from "bcrypt";

import { userValidator } from "../config/userValidator.js";
import userSchema from "../model/userSchema.js";

export const registerUser = async (req, res) => {
  const data = {
    user_name: req.body.username,
    user_email: req.body.email,
    user_password: req.body.password,
    user_contact: req.body.contact,
    user_address: req.body.address,
    user_referral: req.body.referral,
    user_gfid: req.body.gfid,
    user_toc: req.body.toc,
  };

  const { value, error } = userValidator(data);

  //   checking for the validation errors
  if (error) return res.status(400).json({ error: error.details[0].message });

  console.log(data);
  //   checking if the user exists in the db or not
  const exists = await userSchema.findOne({
    user_email: data.user_email,
  });

  // hassing the password
  const salt = await bcrypt.genSalt(10);
  const hashedpwd = await bcrypt.hash(data.user_password, salt);
  value.user_password = hashedpwd;

  console.log(exists);
  // the user should not be added if it exits in the database
  if (exists)
    return res
      .status(409)
      .json({ error: "The user already exists try logging in " });

  try {
    const user = new userSchema(data);
    const userData = await user.save();

    return res.status(201).json({ user: userData });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      error: "Sry there is some error in our side",
    });
  }
};
