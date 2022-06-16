import React,{ useContext } from "react"
// import { Link} from "react-router-dom"
import { AuthContext } from "../Context/AuthContext";
import { Login } from "./Login";

export const RequiredAuth = ({children})=>{
const {tokens}=useContext(AuthContext);
//const location=useLocation();
if(tokens) return children;

//   get the token from auth context and if token exists return the children otherwise return the follwoing
    return <Login />
}