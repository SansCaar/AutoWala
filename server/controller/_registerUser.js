import { userValidator } from "../config/userValidator.js";
import userSchema from "../model/userSchema.js";

export const registerUser = async (req, res) => {
  const data = {
    user_id: req.body.userId,
    user_name: req.body.username,
    user_email: req.body.email,
    user_contact: req.body.contact,
    user_address: req.body.address,
    user_referral: req.body.referral,
    user_gfid: req.body.gfid,
    user_toc: req.body.toc,
    user_image: req.body.image,
  };

  console.log({ data });

  // user existance is now sepeareated and moved to another route
  // //   checking if the user exists in the db or not
  // const exists = await userSchema.findOne({
  //   user_id: data.user_id,
  // });

  // if (exists)
  //   return res
  //     .status(409)
  //     .json({ error: "The user already exists try logging in " });

  // user should be checked before validating because if the btn is clicked for google login then there is no other data and if the user exists he she should be informed early rather than after filling the entire form

  const { value, error } = userValidator(data);

  //   checking for the validation errors
  if (error) return res.status(400).json({ error: error.details[0].message });

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
