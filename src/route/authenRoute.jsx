import RegisterForm from "../feature/authenticate/components/registerForm";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import HomePage from "../pages/homePage";
import KidsProgram from "../pages/kidsProgram";
import ProtectedRoute from "../feature/authenticate/components/protectRoute";
import RedirectIfLog from "../feature/authenticate/components/reDirectIfLogin";
import AdminLoginForm from "../pages/loginAdmin";
import ActivityAlbum from "../pages/activity";
import TryToDo from "../pages/tryTodo";
import NewsContent from "../pages/NewsContent";

const Loginpage = lazy(() => import("../pages/loginPage"));
const Maincontainer = lazy(() => import("../layout/mainContainer"));




const router = createBrowserRouter([
  {
    path: "/",
    element: <><Maincontainer/> <HomePage /></>
  },
  { path: "/login", element:( <RedirectIfLog> <Maincontainer /><Loginpage />  </RedirectIfLog> )},
  { path: "/kidsprogram", element: <><ProtectedRoute><Maincontainer /><KidsProgram /></ProtectedRoute></> },
  { path: "/album", element: <><Maincontainer /> <ActivityAlbum /></> },
  { path: "/trytodo", element: <><ProtectedRoute><Maincontainer /><TryToDo/> </ProtectedRoute></> },
  { path: "/news", element: <><Maincontainer /><NewsContent /></> },
  { path: "/admin", element: <><Maincontainer /><AdminLoginForm /></> },
])

export default function Router() {
  return <RouterProvider router={router} />
}

//! ถ้า set page เสร็จ ก็มา log program
