import { useState } from "react";
import Button from "../../../components/button";
import Input from "../../../components/input";
import validateRegister from "../validator/validate-register";
import authApi from "../../../apis/auth-api"
import { toast } from "react-toastify";
import { AxiosError } from "axios";

//ค่าในกล่อง input
// {
//   firstName: String;
//   lastName: String;
//   Email: String
//   password: String;
//   confirmPassword: String
// }

// สร้างตัวแปร initialInput หรือ ค่าตัวแปรเริ่มต้นของ input เพื่อเกบค่าที userพิมลงใน input
const initialInput = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const initialInputError = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm({ onSuccess }) {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);
console.log("input",input)
  // set handle input
  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // submit form
 const handleSubmit = async (e) => {
  try{
    e.preventDefault();
    const error = validateRegister(input);
    if (error) {
      return setInputError(error);
    }
    setInputError({ ...initialInput});
    
    await authApi.register(input);
    onSuccess();
    toast.success('register is complete')
    setInputError({...initialInputError})
  } catch (err) {

    if(err instanceof AxiosError ) {
      if(err.response.data.field === 'userName')
      setInputError(prev => ({
        ...prev,userName:err.response.data.msg
      }));
    }
  }

 }

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-5">
        <div className="my-2">
          <Input
            placeholder="Username"
            value={input.userName}
            onChange={handleInputChange}
            name="userName"
            error={inputError.userName}
          />
        </div>

        <div className="my-2">
          <Input
            placeholder="Email"
            value={input.email}
            onChange={handleInputChange}
            name="email"
            error={inputError.email}
          />
        </div>
        <div className="my-2">
          <Input
            placeholder="Password"
            type="password"
            value={input.password}
            onChange={handleInputChange}
            name="password"
            error={inputError.password}
          />
        </div>
        <div className="my-2 mb-5">
          <Input
            placeholder="Confirm password"
            type="password"
            value={input.confirmPassword}
            onChange={handleInputChange}
            name="confirmPassword"
            error={inputError.confirmPassword}
          />
        </div>
        <hr />
        <div className="text-center mt-4">
          <Button bg="green" width="60">
            ลงทะเบียน
          </Button>
        </div>
      </div>
    </form>
  );
}
