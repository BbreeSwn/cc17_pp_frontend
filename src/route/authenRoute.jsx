
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import HomePage from "../pages/homePage";
import KidsProgram from "../pages/kidsProgram";
import ProtectedRoute from "../feature/authenticate/components/protectRoute";
import RedirectIfLog from "../feature/authenticate/components/reDirectIfLogin";
import RedirectIfAdminLogin from "../feature/authenticate/components/RedirectIfAdminLogIn";
import AdminLoginForm from "../pages/loginAdmin";
import ActivityAlbum from "../pages/activity";
import TryToDo from "../pages/tryTodo";
import NewsContent from "../pages/NewsContent";
import ContextContainer from "../layout/ContextContainer";
import KidsProgramById from "../pages/kidsProgramById";


const Loginpage = lazy(() => import("../pages/loginPage"));
const Maincontainer = lazy(() => import("../layout/mainContainer"));
const KidsProgramManagePage = lazy(() => import("../pages/KidsProgramManagePage"))
const NewsManagePage = lazy(() => import("../pages/NewsManagePage"))

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Maincontainer /> <HomePage />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <RedirectIfAdminLogin>
      <RedirectIfLog>
        <Maincontainer />
        <Loginpage />
      </RedirectIfLog>
      </RedirectIfAdminLogin>
    ),
  },
  {
    path: "/kidsprogram",
    element: (
      <>
        <ProtectedRoute>
          <Maincontainer />
        </ProtectedRoute>
      </>
    ),
    children: [
      {path: "" , element:(<><KidsProgram /></>)},
      {path: "english" , element: <h1>english</h1>},
      {path: "art" , element: <h1>art</h1>},
      {path: "eateat" , element: <h1>cooking</h1>},
      {path: "natural" , element: <h1>natural</h1>},
      {path: "createKidsProgram" , element: <KidsProgramManagePage />},
      {path: ":contentId" , element: <KidsProgramById/>},
      
    ]
  },
  {
    path: "/album",
    element: (
      <>
        <Maincontainer /> <ActivityAlbum />
      </>
    ),
  },
  {
    path: "/trytodo",
    element: (
      <>
        <ProtectedRoute>
          <Maincontainer />
          <TryToDo />
        </ProtectedRoute>
      </>
    ),
  },
  {
    path: "/news",
    element: (
      <>
        <Maincontainer />
      </>
    ),
    children: [
      {path:"" , element: <NewsContent />},
      {path:"creatNewsContent" , element: <NewsManagePage />},
      {path:":contentId" , element: <ContextContainer/> },
    ]
  },
  {
    path: "/admin",
    element: (
      <>
<RedirectIfAdminLogin>
        <Maincontainer />
        <AdminLoginForm />
        
        </RedirectIfAdminLogin>

      </>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

//! ถ้า set page เสร็จ ก็มา log program
