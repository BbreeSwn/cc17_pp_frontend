import Joi from "joi"

const registerSchema = Joi.object({
  userName: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "Username is require" }), //ใช้เป็น chaining ต่อไปเรื่อยๆได้เลย
  email: 
    Joi.string().email({ tlds: false }).messages({
    "alternatives.match": "Invalid email address",
  }),
  password: Joi.string()
    .pattern(/^[0-9a-zA-Z]{6,}$/)
    .messages({
      "string.empty": "password is require",
      "string.pattern.base": "password must be at least 6 characters",
    }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({ //เรียกใช้ function messages มีค่า params เป็น นิ่ ต้องบอก type
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
    return result; // return เมือ่มี error ถ้าไม่มี err มันจะเป็น undefine
  }
};

export default validateRegister;