import Joi from "joi";

const registerSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "First Name is require" }), //ใช้เป็น chaining ต่อไปเรื่อยๆได้เลย
  lastName: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "Lastname is require" }),
  emailOrMobile: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/),
  ]).messages({
    "alternatives.match": "Invalid email address or mobile number",
  }),
  password: Joi.string()
    .pattern(/^[0-9a-zA-Z]{6,}$/)
    .messages({
      "string.empty": "password is require",
      "string.pattern.base": "password must be at least 6 characters",
    }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "string.empty": "confirm password is require",
    "any.only": "password and confirm not match",
  }),
}); // จะ validadte กับค่าอะไร เป็น strin number boolean ถ้าเป็น obj ก้ .object ต้องระบุค่าเป็น คีย์ที่รับมา และระบุ type

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false }); // validate(ค่าที่ต้องการvalidate) abortEary เช็คerror ให้ครบทุกตัว  allowUnknown: ใช้รับ keyที่ไม่มีเข้ามาได้

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validateRegister;