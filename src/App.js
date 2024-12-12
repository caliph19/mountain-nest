import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Allhotels from "./pages/Allhotels/Allhotels";
import Allhotelsdetails from "./pages/Allhotels/Allhotelsdetails";
import Signin from "./pages/Contact/Signin";
import Footer from "./components/footer/Footer";
import Backtotop from "./components/header/Backtotop";
import Signup from "./pages/signup/Signup";
import NavWrap from './components/Navwrape/index'
import Forgotpassword from "./pages/Contact/Forgotpassword";
import Booknow from "./pages/booknow/Booknow";
import Whyus from "./pages/Whyus/Whyus";

function App() {
  function scrolltotop() {
    window.scrollTo(0, 0);
  }
  return (
    <BrowserRouter>
      <NavWrap>
        <Header />
      </NavWrap>
      <Backtotop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/whyus" element={<Whyus />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/forgotpassword" element={<Forgotpassword />}></Route>
        <Route path="/hotels" element={<Allhotels />}></Route>
        <Route path="/hoteldetails" element={<Allhotelsdetails />}></Route>
        <Route path="/booknow" element={<Booknow />}></Route>
      </Routes>
      <NavWrap>
        <Footer />
      </NavWrap>
    </BrowserRouter>
  );
}

export default App;
