import { userValidator } from "../config/userValidator.js";
import userSchema from "../model/userSchema.js";

export const registerUser = async (req, res) => {
  const data = {
    user_name: req.body.username,
    user_email: req.body.email,
    user_contact: req.body.contact,
    user_address: req.body.address,
    user_referral: req.body.referral,
    user_gfid: req.body.gfid,
    user_toc: req.body.toc,
    user_image: req.body.image,
  };

  const { value, error } = userValidator(data);

  //   checking for the validation errors
  if (error) return res.status(400).json({ error: error.details[0].message });

  //   checking if the user exists in the db or not
  const exists = await userSchema.findOne({
    user_email: data.user_email,
  });

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
