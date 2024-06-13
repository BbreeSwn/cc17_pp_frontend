import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../hook/useAuth";
import {toast} from 'react-toastify'
import { useState } from "react";
import Button from "../components/button";
import useAuth from "../hook/useAuth";


export default function Dropdown() {
const {authUser , logout} = useAuth();

  const  navigate = useNavigate();


  //logout
  const handleClickLogout = () => {
    logout();
    navigate('/login')
  toast.success('Logout successfuly')
  };
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <div>
          <Link to="/login"> 
            {authUser ? (<Button onClick={handleClickLogout} bg="white" color="black" width='full'>Log out</Button>) : (<Button bg="white" color="black" width='full'>Login / Register</Button>) }
          </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}


