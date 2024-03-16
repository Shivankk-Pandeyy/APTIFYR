import { Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import HomePage from "./Pages/Homepage"
const App = () => {
  return (
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    </Routes>
  )
}

export default App
