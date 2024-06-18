import { useState } from 'react';
import { createContext } from 'react';
import authApi from '../apis/auth-api';
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken
} from '../utils/local-storage';

import {
  getAdminAccessToken,
  removeAdminAccessToken,
  setAdminAccessToken
} from '../utils/admin-storage';


import { useEffect } from 'react';


export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [authAdmin , setAuthAdmin] = useState(null)
  const [isAuthUserLoading, setIsAuthUserLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log('testtttt')
        if (getAccessToken()) {
          const resUser = await authApi.getAuthUser();
          setAuthUser(resUser.data.user);
          
        }

        if(getAdminAccessToken()){
          const resUser = await authApi.getAuthAdmin();
          setAuthAdmin(resUser.data.user);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsAuthUserLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = async credentials => {
    const res = await authApi.login(credentials); // ไปจัดการ utils สำหรับเก็บข้อมูล acees token
    setAccessToken(res.data.token);
    const resGetAuthUser = await authApi.getAuthUser();
    setAuthUser(resGetAuthUser.data.user);
  };

  const loginAdmin = async credentials => {
    const res = await authApi.loginAdmin(credentials); // ไปจัดการ utils สำหรับเก็บข้อมูล acees token
    setAdminAccessToken(res.data.token);
    
    const resGetAuthAdmin = await authApi.getAuthAdmin();
    
    setAdminAccessToken(resGetAuthAdmin.data.user);
  };

  

  const logout = () => {
    removeAccessToken();
    removeAdminAccessToken()
    setAuthAdmin(null)
    setAuthUser(null);
  };

console.log('adminnn',authAdmin )
console.log('userrrrr',authUser)

  return (
    <AuthContext.Provider
      value={{ login, logout, authUser, isAuthUserLoading , loginAdmin ,authAdmin}}
    >
      {children}
    </AuthContext.Provider>
  );
}