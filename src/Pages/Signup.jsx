import { useState } from "react";
import "./Pages.css"
import { NavLink, useNavigate } from 'react-router-dom'
import google from "./google.png"
import fb from "./fb.png"
import apple from "./apple.png"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Mouse from "./Mouse";
import Header from "../Components/Header";
import PIC from './LOGIN.png'
const Signup = () => {
  const navigate=useNavigate();
  const notify1 = () => toast.error('All Fields are Mandatory!');
  const notify2 = () => toast.success('Registration Successfull!');
  const notify3 = () => toast.error('Email Exists!');
  const notify4 = () => toast.error('Enter Valid Email!');
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
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
    const isValidEmail = emailRegex.test(data.email);
    if(data.email===""||data.password===""){
      return notify1()
    }
    if(!isValidEmail){
      return notify4()
    }
    else{
      try{
        const response=await axios.post("http://localhost:1818/api/Aptifyr/RegisterUser",data);
        //console.log(response.data.message);
        
        if(response.data.message==="REGISTERED SUCCESSFULLY"){
          setData({
            email:"",
            password:"",
          })
          return notify2()
        }
      }
      catch(err){
        //console.log(err.response.data.message);
        if(err.response.data.message==="EMAIL"){
          return notify3()
        }
      }
    }
  }
  return (
    <>
    <Header/>
    <div className="login">
    <ToastContainer/>
    <Mouse/>
    <div className="login-1">
    <div className="login-info">
    <h2>Sign up</h2>
    <p>Welcome back!Please log in to access your account.</p>
    </div>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Enter Your Email" autoComplete="off" name="email" onChange={handleData} value={data.email}></input>
    <input type="password" placeholder="Enter Your Password" autoComplete="off" name="password" onChange={handleData} value={data.password}></input>
    <button type="submit">SIGNUP</button>
    <p>Or</p>
    <div className="signup-image">
    <img src={google} alt="GOOGLE" title="SIGNUP USING GOOGLE"></img>
    <img src={fb} alt="FACEBOOK" title="SIGNUP USING FACEBOOK"></img>
    <img src={apple} alt="APPLE" title="SIGNUP USING APPLE"></img>
    </div>
    </form>
    </div>
    <div className="login-2">
    <img src={PIC} alt="LOGIN IMAGE"></img>
    </div>
    </div>
    </>
  )
}

export default Signup
