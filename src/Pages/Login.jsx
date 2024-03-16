import "./Pages.css"
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
const Login = () => {
  const notify = () => toast.success('Here is your toast.');
  return (
    <>
    <div className="login">
    <div className="login-1">
    <div className="login-info">
    <h2>Login</h2>
    <p>Welcome back!Please log in to access your account.</p>
    </div>
    <form>
    <input type="text" placeholder="Enter Your Email" autoComplete="off"></input>
    <input type="password" placeholder="Enter Your Password" autoComplete="off"></input>
    <NavLink>Forgot Password?</NavLink>
    <a><button onClick={notify}>LOGIN</button></a>
    <NavLink to="/Signup"><button>SIGNUP</button></NavLink>
    </form>
    </div>
    <div className="login-2">
    </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Login
