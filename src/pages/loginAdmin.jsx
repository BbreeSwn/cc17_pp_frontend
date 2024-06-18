import Input from "../components/input";
import Button from "../components/button";
import { useState } from "react";
import validateLogin from "../feature/authenticate/validate-login/validate-login";
import useAuth from "../hook/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const initialInput = {
  username: "",
  password: "",
};

const initialInputError = {
  username: "",
  password: "",
};

export default function AdminLoginForm() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const { loginAdmin } = useAuth();
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // try {
    //   e.preventDefault();
    //   const error = validateLogin(input);
    //   if (error) {
    //     return setInputError(error);
    //   }
    //   console.log(input)
    //   setInputError(initialInputError);
    //   await loginAdmin(input);
    //   toast.success("login success");
    //   navigate('/');
    // } catch (err) {
    //   console.log(err)
    //   if (err instanceof AxiosError) {
    //     setInputError({...inputError,[err.response.data.field]:[err.response.data.msg]})
    //     const message =
    //       err.response.status === 400 ? "Invalid" : "Internal server error";
    //     return toast.error(message);
    //   }
    // }
    try {
      e.preventDefault();
      console.log("login admin -- ")
      const error = validateLogin(input);
      if (error) {
        return setInputError(error);
      }
      // console.log(input)
      setInputError(initialInputError);
      await loginAdmin(input);
      toast.success("login success");
      // navigate('/');
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log("adminn errrr")
        setInputError({...inputError,[err.response.data.field]:[err.response.data.msg]})
        const message =
          err.response.status === 400 ? "Invalid" : "Internal server error";
        return toast.error(message);
      }
    }
  };
  // console.log(inputError)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 bg-gradient-to-b from-orange-300 to-yellow-200 p-4 rounded-lg max-w-sm mx-auto shadow-lg mt-10 ">
        <h1 className="text-4xl  text-center ">Hello Admin</h1>
          <div>
            <Input
              placeholder="Username"
              value={input.username}
              name="username"
              onChange={handleChangeInput}
              error={inputError.username}
            />
          </div>
          <div>
            <Input
              placeholder="Password"
              type="password"
              value={input.password}
              name="password"
              onChange={handleChangeInput}
              error={inputError.password}
            />
          </div>
          <div>
            <Button bg="yellow" width="full">
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

// bg-gradient-to-b from-orange-300 to-yellow-200
