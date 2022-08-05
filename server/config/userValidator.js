import Joi from "joi";

export const userValidator = (userData, googleSignIn) => {
  const schema = Joi.object({
    user_id: Joi.string().required(),
    user_name: Joi.string().min(5).required(),
    user_email: Joi.string().email(),
    user_address: Joi.string(),
    user_contact: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),
    user_gfid: Joi.string(),
    user_toc: Joi.object({
      date: Joi.string(),
      time: Joi.string(),
    }),
    user_referral: Joi.string(),
    user_image: Joi.string().required(),
  });

  return schema.validate(userData);
};

export const loginValidator = (loginData) => {
  const schema = new Joi.object({
    id: new Joi.string().required(),
  });
  return schema.validate(loginData);
};
