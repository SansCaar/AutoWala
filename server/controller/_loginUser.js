import bcrypt from "bcrypt";
import userSchema from "../model/userSchema.js";
import { loginValidator } from "../config/userValidator.js";

export const loginUser = async (req, res) => {
  const data = {
    email: req.body.email,
    password: req.body.password,
  };

  // this will validate the incomming data
  // the incomming data will be validated as
  // all the necessary fields
  // their length
  // their type
  // and a customized err is sent if not validated

  const { value, error } = await loginValidator(data);

  if (error) return res.status(400).json({ error: error.details[0].message });

  //   checking if the user exists or not in the database

  const exists = await userSchema.findOne({ user_email: data.email });
  console.log({ exists });
  if (!exists)
    return res.status(400).json({ error: "Invalid email or password" });

  // since the password is incripted in the db it must be decripted and validated
  const validPass = await bcrypt.compare(data.password, exists.password);

  if (!validPass)
    return res.status(400).json({ error: "Invalid email or password" });

  //   all the validation passed means the user is legit and the id and passwords entered are correct
  res.status(200).json({ user: exists });
};
