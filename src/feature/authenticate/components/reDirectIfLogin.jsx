import { Navigate } from "react-router-dom";
import useAuth from "../../../hook/useAuth";


export default function RedirectIfLog({children}){
    const{authUser , isAuthUserLoading} = useAuth();

    if(authUser && !isAuthUserLoading){
        return <Navigate to="/" />
    }

    return (
        <>
        {isAuthUserLoading}
        {children}
        </>
)}