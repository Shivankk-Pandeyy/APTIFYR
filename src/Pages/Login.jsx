/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./Pages.css"
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Mouse from "./Mouse";
import axios from "axios";
import Header from "../Components/Header";
import PIC from './LOGIN.png'
const Login = () => {
  const notify1 = () => toast.error('All Fields are Mandatory!');
  const notify2 = () => toast.success('Login Successfull!');
  const notify3 = () => toast.error('Invalid Password!');
  const notify4 = () => toast.error('Account not Found!');
  const notify5 = () => toast.warning('Arrive Soon!');
  const [data,setData]=useState({
    email:"",
    password:"",
  });
  const handleData=(e)=>{
    const{name,value}=e.target;
    setData({
      ...data,
      [name]:value
    })
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(data.email===""||data.password===""){
      return notify1()
    }
    else{
      try{
        const response=await axios.post("http://localhost:1818/api/Aptifyr/LoginUser",data);
        //console.log(response.data.message);
        if(response.data.message==="LOGIN"){
          return notify2()
        }
      }
      catch(err){
        //console.log(err.response.data.message);
        if(err.response.data.message==="ACCOUNT"){
          return notify4()
        }
        if(err.response.data.message==="PASSWORD"){
          return notify3()
        }
      }
    }
  }
  const not=()=>{
    notify5()
  }
  return (
    <>
    <Header/>
    <Mouse/>
    <ToastContainer/>
    <div className="login">
    <div className="login-1">
    <div className="login-info">
    <h2>Login</h2>
    <p>Welcome back!Please log in to access your account.</p>
    </div>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Enter Your Email" autoComplete="off" name="email" onChange={handleData}></input>
    <input type="password" placeholder="Enter Your Password" autoComplete="off" name="password" onChange={handleData}></input>
    <p onClick={not}>Forgot Password?</p>
    <button type="submit">LOGIN</button>
    <NavLink to='/Signup'><button>SIGNUP</button></NavLink>
    </form>
    </div>
    <div className="login-2">
    <img src={PIC} alt="LOGIN IMAGE"></img>
    </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Login
