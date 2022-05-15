import './App.css';
import { Route, Routes } from "react-router-dom"
import "."
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard';
import Mess from './components/Mess'
import Contact from './components/Contact';
// import User from '../../server/model/userSchema';
import Users from "./components/List"
import { useState } from "react"


function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/dashboard" element={<Dashboard email={email} />}></Route>
        <Route exact path="/mess" element={<Mess />}></Route>
        <Route exact path="/contact" element={<Contact></Contact>}></Route>
        <Route exact path="/users" element={<Users></Users>}></Route>
      </Routes>

    </>

  );
}

export default App;
