import Input from "../../../components/input";
import Button from "../../../components/button";

export default function LoginForm() {
  return (
    <div >
      <h1 className="text-4xl my-10 text-center ">Login Form</h1>
      <form>
        <div className="grid gap-4 ">
          <div>
            <Input placeholder="Username or Email" />
          </div>
          <div>
            <Input
              placeholder="Password"
              type="password"
              error="test error message"
            />
          </div>
          <div>
            <Button bg="yellow" width="full"> Login </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

// bg-gradient-to-b from-orange-300 to-yellow-200
