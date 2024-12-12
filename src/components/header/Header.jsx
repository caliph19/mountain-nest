import { React, useEffect, useState } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50); // Change 50 to the scroll threshold you prefer
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Headermain isScrolled={isScrolled}>
        <Headercenter>
          <Headerlogo>
            <img src={logo} />
          </Headerlogo>
          <Headeritems>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
              <NavLink to="/whyus">Why Us</NavLink>
             </li>
              <li>
                <NavLink to="/hotels">Hotels</NavLink>
              </li>
              <li>Testimonial</li>
            </ul>
          </Headeritems>
          <Headerbuttons>
            <Headerbtn1>
            <NavLink to="/signin">Sign in</NavLink>

              </Headerbtn1>
            <Headerbtn2>
              <NavLink to="/signup">Sign up</NavLink>
            </Headerbtn2>
          </Headerbuttons>
        </Headercenter>
      </Headermain>
      <Scrolltotop />
    </>
  );
};

export default Header;
