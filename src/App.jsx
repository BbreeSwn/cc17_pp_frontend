import  { Suspense , React } from "react";
import AppRouter from "./route/authenRoute";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./context/authContext";

function App() {
  return (
    <>
    <Suspense fallback={<h1>loading....</h1>}>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AuthContextProvider>
      </Suspense>
    </>
  );
}

export default App;
