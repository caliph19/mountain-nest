import React from "react";
import { CgFacebook } from "react-icons/cg";

import {
  Forgotpasswordbutton,
  Forgotpasswordfb,
  Forgotpasswordforgottenpassord,
  Forgotpasswordgoogle,
  Forgotpasswordleft,
  Forgotpasswordleftlogo,
  Forgotpasswordleftrouble,
  Forgotpasswordlefttext,
  Forgotpasswordmain,
  Forgotpasswordpart2email,
  Forgotpasswordpart2emailinput,
  Forgotpasswordpart2forgotten,
  Forgotpasswordpart2google,
  Forgotpasswordpart2heading1,
  Forgotpasswordpart2or,
  Forgotpasswordpart2passwordinput,
  Forgotpasswordright,
  Forgotpasswordrightpart1,
  Forgotpasswordrightpart2,
  Forgotpasswordrightpart3,
} from "./forgotpassword.style";
import Forgotpasswordlogo from "../../images/logowhite.png";
import { NavLink } from "react-router-dom";


const Forgotpassword = () => {
  return (
    <>
      <Forgotpasswordmain>
        <Forgotpasswordleft>
          <Forgotpasswordleftlogo>
            <img src={Forgotpasswordlogo} />
          </Forgotpasswordleftlogo>
          <Forgotpasswordlefttext>
            <p>Lorem ipsum dolor sit amet consectetur. Ultrices dictum</p>
          </Forgotpasswordlefttext>
          <Forgotpasswordleftrouble>
            Having troubles? Get Help
          </Forgotpasswordleftrouble>
        </Forgotpasswordleft>
        <Forgotpasswordright>
          <Forgotpasswordrightpart2>
            <Forgotpasswordpart2heading1>
              <p>Forgot password?</p>
            </Forgotpasswordpart2heading1>
            <Forgotpasswordpart2or>
              No worriest! Just enter your email and we’ll send you a reset
              password link.
            </Forgotpasswordpart2or>
            <Forgotpasswordpart2email>Email address</Forgotpasswordpart2email>
            <Forgotpasswordpart2emailinput>
              <input type="text" placeholder="abc123@gmil.com" />
            </Forgotpasswordpart2emailinput>
            <Forgotpasswordpart2google>
              <Forgotpasswordgoogle>Sign in with Google</Forgotpasswordgoogle>
            </Forgotpasswordpart2google>
            <Forgotpasswordpart2forgotten>
              <Forgotpasswordforgottenpassord>
                Just a member?
              </Forgotpasswordforgottenpassord>
              <Forgotpasswordbutton>
              <NavLink to="/signin">Sign In</NavLink>
                </Forgotpasswordbutton>
            </Forgotpasswordpart2forgotten>
          </Forgotpasswordrightpart2>
        </Forgotpasswordright>
      </Forgotpasswordmain>
    </>
  );
};

export default Forgotpassword;
