import "./Pages.css"
import { NavLink } from 'react-router-dom'
import google from "./google.png"
import fb from "./fb.png"
import apple from "./apple.png"
const Signup = () => {
  return (
    <div className="login">
    <div className="login-1">
    <div className="login-info">
    <h2>Sign up</h2>
    <p>Welcome back!Please log in to access your account.</p>
    </div>
    <form>
    <input type="text" placeholder="Enter Your Email" autoComplete="off"></input>
    <input type="password" placeholder="Enter Your Password" autoComplete="off"></input>
    <NavLink to="/Signup"><button>SIGNUP</button></NavLink>
    <p>Or</p>
    <div className="signup-image">
    <img src={google} alt="GOOGLE" title="SIGNUP USING GOOGLE"></img>
    <img src={fb} alt="FACEBOOK" title="SIGNUP USING FACEBOOK"></img>
    <img src={apple} alt="APPLE" title="SIGNUP USING APPLE"></img>
    </div>
    </form>
    </div>
    <div className="login-2">
    </div>
    </div>
  )
}

export default Signup
