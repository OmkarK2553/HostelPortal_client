import './App.css';
import { Route, Routes } from "react-router-dom"
import "."
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard';
import Mess from './components/Mess'

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
      </Routes>

    </>

  );
}

export default App;
