import React from "react";
import {
  Contactline1,
  Contactline1icon,
  Contactline1text,
  Footercenter,
  Footerend,
  Footermain,
  Footermid,
  Footermid1,
  Footermid2,
  Footermid2heading,
  Footermid2ul,
  Footermid3,
  Footermid3contact,
  Footermid3heading,
  Footermid3icons,
  Footermid3icons1,
  Footermid3icons1icons,
  Footermid3icons1text,
  Footermid3logo,
  Footermid3ul,
  Footermid4,
  Footersubscribe,
  Subscribeinput1,
  Subscribeinputs,
  Subscribetitle,
} from "./footer.styled";
import logo1 from "../../../images/Frame.png";
import { FaHeart } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <Footermain>
        <Footercenter>
          <Footersubscribe>
            <Subscribetitle>
              <p>
                SUBSCRIBE OUR BEST <br /> NEWSLETTER.
              </p>
            </Subscribetitle>
            <Subscribeinputs>
              <Subscribeinput1>
                <input type="text" placeholder="Enter your email here" />
                <button>Subscribe</button>
              </Subscribeinput1>
            </Subscribeinputs>
          </Footersubscribe>
          <Footermid>
            <Footermid3logo>
              <Footermid3heading>
                <img src={logo1} id="set-footer-img" />
              </Footermid3heading>
              <Footermid3icons1>
                <Footermid3icons1text>
                  <p>Enjoy the touring with MountainNest</p>
                </Footermid3icons1text>
                <Footermid3icons1icons>
                  <CgFacebook id="set-icon" />
                  <FaInstagram id="set-icon" />
                </Footermid3icons1icons>
              </Footermid3icons1>
            </Footermid3logo>
            <Footermid2>
              <Footermid2heading>
                <p><b>Special Link</b> </p>
              </Footermid2heading>
              <Footermid2ul>
                <ul>
                  <li>Hotels</li>
                  <li>Special Offers</li>
                  <li>FAQs</li>
                </ul>
              </Footermid2ul>
            </Footermid2>
            <Footermid3>
              <Footermid3heading>
                <b><p>Information </p></b>
              </Footermid3heading>
              <Footermid3ul>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Pricing</li>
                </ul>
              </Footermid3ul>
            </Footermid3>
            <Footermid3>
              <Footermid3heading>
               <b> <p>Contact </p></b>
              </Footermid3heading>
              <Footermid3contact>
                <Contactline1>
                  <Contactline1icon>
                    <FaPhoneAlt id="contact-icon1" />
                  </Contactline1icon>
                  <Contactline1text>Phone@MountainNest</Contactline1text>
                </Contactline1>
                <Contactline1>
                  <Contactline1icon>
                    <FaEnvelope id="contact-icon1" />
                  </Contactline1icon>
                  <Contactline1text>Email@MountainNest</Contactline1text>
                </Contactline1>
                <Contactline1>
                  <Contactline1icon>
                    <IoLocationSharp id="contact-icon1" />
                  </Contactline1icon>
                  <Contactline1text>Location@MountainNest</Contactline1text>
                </Contactline1>
              </Footermid3contact>
            </Footermid3>
          </Footermid>
          <Footerend>
            <p>©2024 MountainNest. All rights reserved</p>
          </Footerend>
        </Footercenter>
      </Footermain>
    </>
  );
};

export default Footer;
