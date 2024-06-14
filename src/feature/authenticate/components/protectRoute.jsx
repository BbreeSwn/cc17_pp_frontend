import { Navigate } from "react-router-dom";
import useAuth from "../../../hook/useAuth";

export default function ProtectedRoute({ children }) {
  const { authUser, isAuthUserLoading ,authAdmin } = useAuth();

  if (!authUser && !isAuthUserLoading && !authAdmin) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {isAuthUserLoading}
      {children}
    </>
  );
}