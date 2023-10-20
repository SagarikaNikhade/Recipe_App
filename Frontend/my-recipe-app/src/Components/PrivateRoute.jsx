import { useSelector } from "react-redux";
import {Navigate, useLocation} from "react-router-dom";
import React from "react";

export const PrivateRoute = ({children}) =>{
  const {auth} =useSelector((store)=>store.authReducer);
  const location = useLocation();
  console.log(location)
  return auth ? children : <Navigate to={"/login"} state={location.pathname} replace/>
};
