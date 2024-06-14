import LoginForm from "../feature/authenticate/components/loginForm"
import RegisterContainer from "../feature/authenticate/components/RegisterContainer"

export default function LoginPage(){
    return(
        <div className="bg-gradient-to-b from-orange-300 to-yellow-200 p-4 rounded-lg max-w-sm mx-auto shadow-lg mt-10"> 
            <LoginForm />
            <hr className="my-6 border" />
            <RegisterContainer/>
        </div>
    )
}