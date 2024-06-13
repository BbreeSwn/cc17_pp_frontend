import { useState } from 'react';
import { createContext } from 'react';
import authApi from '../apis/auth-api';
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken
} from '../utils/local-storage';
import { useEffect } from 'react';


export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [isAuthUserLoading, setIsAuthUserLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (getAccessToken()) {
          const res = await authApi.getAuthUser();
          setAuthUser(res.data.user);
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

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };



  return (
    <AuthContext.Provider
      value={{ login, logout, authUser, isAuthUserLoading}}
    >
      {children}
    </AuthContext.Provider>
  );
}