import React from "react";
import {
  Bookingheadericon,
  Bookingleft1,
  Bookingtop,
  Bookingtop1,
  Bookingtop2,
  Bookingtop2left,
  Bookingtop2right,
  Bookingtopcenter,
  Left1contant,
  Left1header,
} from "./Booknow.styled";
import { FaUserCircle } from "react-icons/fa";


const Booknow = () => {
  return (
    <>
      <Bookingtop>
        <Bookingtopcenter>
          <Bookingtop1>
            <h1>Secure your reservation</h1>
          </Bookingtop1>
          <Bookingtop2>
            <Bookingtop2left>
              <Bookingleft1>
                <Left1header>
                  <Bookingheadericon><FaUserCircle /></Bookingheadericon>
                </Left1header>
                <Left1contant></Left1contant>
              </Bookingleft1>
            </Bookingtop2left>
            <Bookingtop2right></Bookingtop2right>
          </Bookingtop2>
        </Bookingtopcenter>
      </Bookingtop>
    </>
  );
};

export default Booknow;
