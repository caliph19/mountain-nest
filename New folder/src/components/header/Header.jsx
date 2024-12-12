import React from "react";
import {
  Headerbtn1,
  Headerbtn2,
  Headerbuttons,
  Headercenter,
  Headeritems,
  Headerlogo,
  Headermain,
} from "./header.styled";
import logo from "../../images/logo.png";
import Scrolltotop from "./Scrolltotop";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <>
    <Headermain>
      <Headercenter>
        <Headerlogo>
          <img src={logo} />
        </Headerlogo>
        <Headeritems>
          <ul>
            <li>
            <NavLink to="/">HOME</NavLink>
            </li>
            <li>Why Us</li>
            <li>
            <NavLink to="/hotels">Hotels</NavLink>
              
            </li>
            <li>Testimonial</li>
          </ul>
        </Headeritems>
        <Headerbuttons>
          <Headerbtn1>Log In</Headerbtn1>
          <Headerbtn2>
                        <NavLink to="/signin">Sign up</NavLink>
            
            </Headerbtn2>
        </Headerbuttons>
      </Headercenter>
    </Headermain>
    <Scrolltotop/>
    </>
  );
};

export default Header;
