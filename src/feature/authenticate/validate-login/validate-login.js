import Joi from "joi";

const loginSchema = Joi.object({
  username: Joi.string().required().trim()
  .messages({ "string.empty": "Username is require" }),
  password: Joi.string().required().pattern(/^[0-9a-zA-Z]{6,}$/)
  .messages({
    "string.empty": "password is require",
    "string.pattern.base": "password must be at least 6 characters",
  }),
});

const validateLogin = (input) => {
  const { error } = loginSchema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};
export default validateLogin;