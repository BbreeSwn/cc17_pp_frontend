import { Navigate } from "react-router-dom";
import useAuth from "../../../hook/useAuth";


export default function RedirectIfAdminLogin({children}){
    const{authAdmin , isAuthUserLoading} = useAuth();

    if(authAdmin && !isAuthUserLoading){
        return <Navigate to="/" />
    }

    return (
        <>
        {isAuthUserLoading}
        {children}
        </>
)}