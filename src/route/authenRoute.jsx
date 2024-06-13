import RegisterForm from "../feature/authenticate/components/registerForm";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import useAuth from "../hook/useAuth";
import { lazy } from "react";
import HomePage from "../pages/homePage";
import KidsProgram from "../pages/kidsProgram";

const Loginpage = lazy(() => import("../pages/loginPage"));
const Header = lazy(() => import("../layout/Header"));
const Maincontainer = lazy(() => import("../layout/mainContainer"));

// const userRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },

//   {
//     path: "/kidsprogram",
//     element: (
//       <>
//         <HomePage />
//         <h1>Kidsprogram</h1>
//       </>
//     ),
//   },
//   {
//     path: "/album",
//     element: (
//       <>
//         <HomePage />
//         <h1>Activity's Album</h1>
//       </>
//     ),
//   },
//   {
//     path: "/trytodo",
//     element: (
//       <>
//         <HomePage />
//         <h1>ลองทำดู</h1>
//       </>
//     ),
//   },
//   {
//     path: "/news",
//     element: (
//       <>
//         <HomePage />
//         <h1>ข่าวสาร และ บทความ</h1>
//       </>
//     ),
//   },
// ]);

// const guestRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/login",
//     element: (
//       <>
//         <HomePage />
//         <LoginPage />
//       </>
//     ),
//   },
//   {
//     path: "/register",
//     element: (
//       <>
//         <HomePage />
//         <RegisterForm />
//       </>
//     ),
//   },

//   {
//     path: "/album",
//     element: (
//       <>
//         <HomePage />
//         <h1>Activity's Album</h1>
//       </>
//     ),
//   },
//   {
//     path: "/news",
//     element: (
//       <>
//         <HomePage />
//         <h1>ข่าวสาร และ บทความ</h1>
//       </>
//     ),
//   },
// ]);

// เอา maincontainer มาใส่แทน homepage
const guestRouter = createBrowserRouter([
  {
    path: "/",
    element: <><Maincontainer /> <HomePage />
</>
  },
  {
    path: "/login",
    element: (
      <>
        <Header /><Loginpage />
      </>
    ),
  },
  {
    path: "/register",
    element: <RegisterForm />
  },

  {
    path: "/album",
    element: (
      <>
        <Maincontainer /><h1>Activity's Album</h1>
      </>
    ),
  },
  {
    path: "/news",
    element: (
      <>
        <Maincontainer /><h1>ข่าวสาร และ บทความ</h1>
      </>
    ),
  },
  {
    path: "/trytodo",
    element: (
      <>
        <Maincontainer /><h1>ลองทำดู</h1>
      </>
    ),
  },

  {
    path: "/kidsprogram",
    element: (
      <>
        <Maincontainer />
        <KidsProgram />
      </>
    ),
  },
]);

export default function AppRouter() {
  // const user = useAuth();
  // const finalRouter = user?.id ? userRouter : guestRouter;
  return <RouterProvider router={guestRouter} />;
}

//! ถ้า set page เสร็จ ก็มา log program
