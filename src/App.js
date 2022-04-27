import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
    </>

  );
}

export default App;
