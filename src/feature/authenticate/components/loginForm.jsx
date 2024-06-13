import Input from "../../../components/input";
import Button from "../../../components/button";
import { useState } from "react";
import validateLogin from "../validate-login/validate-login";
import useAuth from "../../../hook/useAuth";
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

export default function LoginForm() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const error = validateLogin(input);
      if (error) {
        return setInputError(error);
      }
      console.log(input)
      setInputError(initialInputError);
      await login(input);
      toast.success("login success");
      navigate('/');
    } catch (err) {
      if (err instanceof AxiosError) {
        const message =
          err.response.status === 401 ? "Invalid" : "Internal server error";
        return toast.error(message);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl my-10 text-center ">Login Form</h1>
        <div className="grid gap-4 ">
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
