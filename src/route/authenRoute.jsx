import Navbar from "../feature/authenticate/components/navBar";
import RegisterForm from "../feature/authenticate/components/registerForm";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import useAuth from "../hook/useAuth";
import LoginPage from "../pages/loginPage";

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
      </>
    ),
  },

  {
    path: "/kidsprogram",
    element: (
      <>
        <Navbar />
        <h1>Kidsprogram</h1>
      </>
    ),
  },
  {
    path: "/album",
    element: (
      <>
        <Navbar />
        <h1>Activity's Album</h1>
      </>
    ),
  },
  {
    path: "/trytodo",
    element: (
      <>
        <Navbar />
        <h1>ลองทำดู</h1>
      </>
    ),
  },
  {
    path: "/news",
    element: (
      <>
        <Navbar />
        <h1>ข่าวสาร และ บทความ</h1>
      </>
    ),
  },
]);

const guestRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <LoginPage />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Navbar />
        <RegisterForm />
      </>
    ),
  },

  {
    path: "/album",
    element: (
      <>
        <Navbar />
        <h1>Activity's Album</h1>
      </>
    ),
  },
  {
    path: "/news",
    element: (
      <>
        <Navbar />
        <h1>ข่าวสาร และ บทความ</h1>
      </>
    ),
  },
]);

export default function AppRouter() {
  const user = useAuth();
  const finalRouter = user?.id ? userRouter : guestRouter;
  return <RouterProvider router={finalRouter} />;
}
