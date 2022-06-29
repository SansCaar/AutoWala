import Joi from "joi";

export const userValidator = (userData) => {
  const schema = Joi.object({
    username: Joi.string().min(5).required(),
    password: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    user_address: Joi.string(),
    user_contact: Joi.number().min(10).max(10),
    user_gfid: Joi.number(),
    user_toc: Joi.string(),
    user_referral: Joi.string(),
  });
  return schema.validate(userData);
};

export const loginValidator = (loginData) => {
  const schema = new Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });
  return schema.validate(loginData);
};
