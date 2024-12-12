import React from "react";
import { CgFacebook } from "react-icons/cg";

import {
  Signinbutton,
  Signinfb,
  Signinforgottenpassord,
  Signingoogle,
  Signinleft,
  Signinleftrouble,
  Signinlefttext,
  Signinmain,
  Signinpart2email,
  Signinpart2emailinput,
  Signinpart2forgotten,
  Signinpart2google,
  Signinpart2heading1,
  Signinpart2or,
  Signinpart2passwordinput,
  Signinright,
  Signinrightpart1,
  Signinrightpart2,
  Signinrightpart3,
} from "./Signin.styled";

const Signin = () => {
  return (
    <>
      <Signinmain>
        <Signinleft>
          <Signinlefttext>
            <p>Lorem ipsum dolor sit amet consectetur. Ultrices dictum</p>
          </Signinlefttext>
          <Signinleftrouble>Having troubles? Get Help</Signinleftrouble>
        </Signinleft>
        <Signinright>
          <Signinrightpart1>New User?Create an acount</Signinrightpart1>
          <Signinrightpart2>
            <Signinpart2heading1>
              <p>Sign in to Mountain Nest</p>
            </Signinpart2heading1>
            <Signinpart2google>
              <Signingoogle>Sign in with Google</Signingoogle>
              <Signinfb>
                <CgFacebook />
              </Signinfb>
            </Signinpart2google>
            <Signinpart2or>Or</Signinpart2or>
            <Signinpart2email>Email address</Signinpart2email>
            <Signinpart2emailinput>
              <input type="text" placeholder="abc123@gmil.com"/>
            </Signinpart2emailinput>
            <Signinpart2passwordinput>
              <input type="password" placeholder="password"/>
            </Signinpart2passwordinput>
            <Signinpart2forgotten>
              <Signinforgottenpassord>Forgot password?</Signinforgottenpassord>
              <Signinbutton>Sign In</Signinbutton>
            </Signinpart2forgotten>
          </Signinrightpart2>
          <Signinrightpart3>Protected by reCAPTCHA and subject to the Mountain Nest <br /> Privacy Policy and Terms of Service.</Signinrightpart3>
        </Signinright>
      </Signinmain>
    </>
  );
};

export default Signin;
