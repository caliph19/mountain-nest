import React from "react";
import {
  Bookingbox1,
  Bookingbox1blue,
  Bookingbox1blueicon,
  Bookingbox1bluetext,
  Bookingbox1contant,
  Bookingbox2,
  Bookingbox2blue,
  Bookingbox2blueicon,
  Bookingbox2bluetext,
  Bookingbox2contant,
  Bookingbox3,
  Bookingbox3blue,
  Bookingbox3bluetext,
  Bookingbox3center,
  Bookingbox3contant,
  Bookingbox3text1,
  Bookingbox3text2,
  Bookingbox3text3,
  Bookingbox3text4,
  Bookingicon1,
  Bookingicon3,
  Bookingicons,
  Bookinginput1div,
  Bookinginput2div,
  Bookinginput3div,
  Bookinglastnameinput,
  Bookingliftside,
  Bookingnameinput,
  Bookingrightside,
  Bookingside,
  Bookingtop,
  Bookingtop1,
  Bookingtopcenter,
  Usercountryselect,
  Usernameinput,
  Usernameinput2,
  Usernametitle,
  Usernumber,
  Usernumberinput,
} from "./Booknow.styled";
import { FaUserCircle } from "react-icons/fa";
// import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { MdPayments } from "react-icons/md";
import easypaisa from "../../images/easypaisa2.png";
import jazcash from "../../images/Jazzcashlogo.png";
import { AiTwotoneBank } from "react-icons/ai";
import { FaLock } from "react-icons/fa";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Booknow = () => {
  return (
    <>
      <Bookingtop>
        <Bookingtopcenter>
          <Bookingtop1>
            <h3>Secure your reservation</h3>
          </Bookingtop1>
          <Bookingside>
            <Bookingliftside>
              <Bookingbox1>
                <Bookingbox1blue>
                  <Bookingbox1blueicon>
                    <FaUserCircle />
                  </Bookingbox1blueicon>
                  <Bookingbox1bluetext>
                    2 adults, 1 double bed and 1 twin bed, Non-smoking
                  </Bookingbox1bluetext>
                </Bookingbox1blue>
                <Bookingbox1contant>
                  <Bookinginput1div>
                    <Bookingnameinput>
                      <Usernametitle>First Name</Usernametitle>
                      <Usernameinput>
                        <input type="text" />
                      </Usernameinput>
                    </Bookingnameinput>
                    <Bookinglastnameinput>
                      <Usernametitle>Last Name</Usernametitle>
                      <Usernameinput>
                        <input type="text" />
                      </Usernameinput>
                    </Bookinglastnameinput>
                  </Bookinginput1div>
                  <Bookinginput2div>
                    <Usernametitle>Moble Number</Usernametitle>
                    {/* <Usernumberandpin> */}

                    <Usernumber>
                      <Usercountryselect></Usercountryselect>
                      <Usernumberinput>
                        <input type="number" placeholder="+92" />
                      </Usernumberinput>
                    </Usernumber>
                    {/* </Usernumberandpin> */}
                  </Bookinginput2div>
                  <Bookinginput3div>
                    <Checkbox {...label} />
                    <p>Receive text alerts about this trip.</p>
                  </Bookinginput3div>
                </Bookingbox1contant>
              </Bookingbox1>
              <Bookingbox2>
                <Bookingbox2blue>
                  <Bookingbox2blueicon>
                    <MdPayments />
                  </Bookingbox2blueicon>
                  <Bookingbox2bluetext>Payment options</Bookingbox2bluetext>
                </Bookingbox2blue>
                <Bookingbox2contant>
                  <Bookingicons>
                    <Bookingicon1>
                      <img src={easypaisa} alt="" />
                    </Bookingicon1>
                    <Bookingicon1>
                      <img src={jazcash} alt="" />
                    </Bookingicon1>
                    <Bookingicon3>
                      <AiTwotoneBank />
                    </Bookingicon3>
                  </Bookingicons>
                  <Bookinginput2div>
                    <Usernametitle>Name on card</Usernametitle>
                    <Usernumber>
                      <Usernameinput2>
                        <input type="text" placeholder="" />
                      </Usernameinput2>
                    </Usernumber>
                  </Bookinginput2div>
                  <Bookinginput2div>
                    <Usernametitle>Debit/Credit card number</Usernametitle>
                    <Usernumber>
                      <Usernameinput2>
                        <input type="number" placeholder="" />
                      </Usernameinput2>
                    </Usernumber>
                  </Bookinginput2div>
                  <Bookinginput1div>
                    <Bookingnameinput>
                      <Usernametitle>Security Code</Usernametitle>
                      <Usernameinput>
                        <input type="text" />
                      </Usernameinput>
                    </Bookingnameinput>
                    <Bookinglastnameinput>
                      <Usernametitle>Billing Zip code</Usernametitle>
                      <Usernameinput>
                        <input type="text" />
                      </Usernameinput>
                    </Bookinglastnameinput>
                  </Bookinginput1div>
                </Bookingbox2contant>
              </Bookingbox2>
              <Bookingbox3>
                <Bookingbox3blue>
                  <Bookingbox3bluetext>
                    2 adults, 1 double bed and 1 twin bed, Non-smoking
                  </Bookingbox3bluetext>
                </Bookingbox3blue>
                <Bookingbox3contant>
                  <Bookingbox3center>
                    <Bookingbox3text1>
                      <ol>
                        <li>
                          This rate is non-refundable. If you change or cancel
                          your booking you will not get a refund or credit to
                          use for a future stay.
                        </li>
                        <li>Stay extensions will require a new reservation.</li>
                        <li>Front desk staff will greet guests on arrival</li>
                        <li>
                          No refunds will be issued for late check-in or early
                          check-out.
                        </li>
                      </ol>
                    </Bookingbox3text1>
                    <Bookingbox3text2>
                      <p>
                        By clicking the button below, I acknowledge that I have
                        reviewed the Privacy Statement and have reviewd and
                        accept the Rules and Restrictions and Terms of Use.
                      </p>
                    </Bookingbox3text2>

                    <Bookingbox3text3>
                      <button>Complete Booking</button>
                    </Bookingbox3text3>
                    
                    <Bookingbox3text4>
                      <button><FaLock /></button>
                      <p>We use secure transmission and encrypted storage to protect your personal information</p>
                    </Bookingbox3text4>
                  </Bookingbox3center>
                </Bookingbox3contant>
              </Bookingbox3>
            </Bookingliftside>
            <Bookingrightside></Bookingrightside>
          </Bookingside>
        </Bookingtopcenter>
      </Bookingtop>
    </>
  );
};

export default Booknow;
