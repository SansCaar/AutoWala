import userSchema from "../model/userSchema.js";
import { loginValidator } from "../config/userValidator.js";

export const loginUser = async (req, res) => {
  try {
    const data = {
      email: req.body.email,
    };

    // this will validate the incomming data
    // the incomming data will be validated as
    // all the necessary fields
    // their length
    // their type
    // and a customized err is sent if not validated

    const { value, error } = await loginValidator(data);

    // for google login no need to check for validation since the google api gives you the email after validating along with the other information and the tokens
    if (error) return res.status(400).json({ error: error.details[0].message });

    //   checking if the user exists or not in the database

    const exists = await userSchema.findOne({ user_email: data.email });
    if (!exists)
      return res.status(400).json({ error: "Invalid email or password" });

    //   all the validation passed means the user is legit and the id and passwords entered are correct
    res.status(200).json({ user: exists });
  } catch (e) {
    console.log(e);
  }
};
