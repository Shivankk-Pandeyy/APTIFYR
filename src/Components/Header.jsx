import  {useState} from 'react'
import {NavLink} from 'react-router-dom';
import "./Components.css"
import menu from "./MENU.png"
import cross from "./CROSS.png"
const Header = () => {
    const [ham,setHam]=useState(false);
    const setMenu=()=>{
        setHam(!ham);
    }
    return (
        <div className={ham?'header-on':'header'}>
        <div className='name'>
            <p>APTIFYR</p>
        </div>
        <div className={ham?'links-on':'links'}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/About'>About us</NavLink>
            <NavLink to="/Skills">Skills</NavLink>
            <NavLink to='/Contact'>Contact us</NavLink>
        </div>
        <div className='menu'>
        <NavLink to="/Signup">Signup</NavLink>
        <NavLink to="/Login">Login</NavLink>
        <img src={menu} alt='MENU'  className={ham?"menu-off":"menu-on"} onClick={setMenu}></img>
        <img src={cross} alt='CROSS' className={ham?"menu-on":"cross"} onClick={setMenu}></img>
        </div>
        </div>
      )
}
export default Header
