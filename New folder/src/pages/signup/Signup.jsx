import React from "react";
import { CgFacebook } from "react-icons/cg";

import {
  Signupbutton,
  Signupfb,
  Signupfirstname,
  Signupforgottenpassord,
  Signupgoogle,
  Signuplasttname,
  Signupleft,
  Signupleftrouble,
  Signuplefttext,
  Signupmain,
  Signupnamesection,
  Signuppart2email,
  Signuppart2emailinput,
  Signuppart2forgotten,
  Signuppart2google,
  Signuppart2heading1,
  Signuppart2or,
  Signuppart2passwordinput,
  Signupright,
  Signuprightpart1,
  Signuprightpart2,
  Signuprightpart3,
} from "./signup.styled";

const Signup = () => {
  return (
    <>
      <Signupmain>
        <Signupleft>
          <Signuplefttext>
            <p>Lorem ipsum dolor sit amet consectetur. Ultrices dictum</p>
          </Signuplefttext>
          <Signupleftrouble>Having troubles? Get Help</Signupleftrouble>
        </Signupleft>
        <Signupright>
          <Signuprightpart1>New User?Create an acount</Signuprightpart1>
          <Signuprightpart2>
            <Signuppart2heading1>
              <p>Sign up to Mountain Nest</p>
            </Signuppart2heading1>
            <Signuppart2google>
              <Signupgoogle>Sign up with Google</Signupgoogle>
              <Signupfb>
                <CgFacebook />
              </Signupfb>
            </Signuppart2google>
            <Signuppart2or>Or</Signuppart2or>
            <Signuppart2email>Email address</Signuppart2email>
            <Signuppart2emailinput>
              <input type="text" placeholder="abc123@gmil.com" />
            </Signuppart2emailinput>
            <Signupnamesection>
              <Signupfirstname>
                <input type="text" placeholder="First name" />
              </Signupfirstname>
              <Signuplasttname>
              <input type="text" placeholder="Last name" />

              </Signuplasttname>
            </Signupnamesection>
            <Signuppart2passwordinput>
              <input type="password" placeholder="password" />
            </Signuppart2passwordinput>
            <Signuppart2forgotten>
              <Signupbutton>Sign up</Signupbutton>
            </Signuppart2forgotten>
          </Signuprightpart2>
          <Signuprightpart3>
            Protected by reCAPTCHA and subject to the Mountain Nest <br />{" "}
            Privacy Policy and Terms of Service.
          </Signuprightpart3>
        </Signupright>
      </Signupmain>
    </>
  );
};

export default Signup;
