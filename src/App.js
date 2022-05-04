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


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
        {/* <Route exact path="/mess" element={<Mess />}></Route> */}
        <Route exact path="/contact" element={<Contact></Contact>}></Route>
        {/* <Route exact path="/users" element={<Users />}></Route> */}
      </Routes>

    </>

  );
}

export default App;
