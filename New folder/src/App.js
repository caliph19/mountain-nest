import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home/Home';
import Header from "./components/header/Header";
import Allhotels from "./pages/Allhotels/Allhotels";
import Allhotelsdetails from "./pages/Allhotels/Allhotelsdetails";
import Signin from "./pages/Contact/Signin";
import Footer from "./components/header/footer/Footer";
import Backtotop from "./components/header/Backtotop";
import Signup from "./pages/signup/Signup";






function App() {
  // const[val2,setVal2]=useState()
  function scrolltotop() {
    window.scrollTo(0, 0);
  }
  return (
    <BrowserRouter>
    <Header/>
    <Backtotop/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/hotels" element={<Allhotels />}></Route>
        <Route path="/hoteldetails" element={<Allhotelsdetails />}></Route>
      </Routes>
        <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
