import { createContext, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import userApi from "../api/userApi";
import { useEffect, useState } from "react";

const AuthContext = createContext(null)

export const AuthProvider = () =>{
  const [user, setUser] = useState(null)

  const login = user =>{
    setUser(user)
  }
  const logOut = () =>{
    setUser(null)
  }
  return <AuthContext.Provider value={{user, login, logOut}}></AuthContext.Provider>
}

export const useAuth = () =>{
  return useContext(AuthContext)
}
