import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Allcardcenter,
  Allhotelsbookingside,
  Allhotelscard,
  Allhotelscardbooknow,
  Allhotelscarddisc,
  Allhotelscardimage,
  Allhotelscardmain,
  Allhotelscardname,
  Allhotelscardreview,
  Allhotelscardtext,
  Allhotelscenter,
  Allhotelsclientoverview,
  Allhotelsdropdown,
  Allhotelsearchpart1,
  Allhotelsearchpart1search,
  Allhotelsearchpart1text,
  Allhotelsearchpart2,
  Allhotelsheading1,
  Allhotelsmain,
  Allhotelspart1,
  Allhotelspart2,
  Allhotelspriceside,
  Allhotelspricingbox,
  Allhotelsroomsdays,
  Allhotelsroomsprice,
  Allhotelsroomstextfree,
  Allhotelstotaldays,
  Allhotelstotalrooms,
} from "./Allhotels.styled";
import '../../../src/App.css'
import Allhotelsdata from "./Allhotelsdata";
import { Rating } from "@mui/material";
// import Allhotelsdata from "./Allhotelsdata";

const Allhotels = () => {
  const navigate = useNavigate();

  const aman2 = () => {
    // props.fack();
    navigate("/hoteldetails");
  };

  
  return (
    <>
      <Allhotelsmain>
        <Allhotelscenter>
          <Allhotelspart1>
            <Allhotelsheading1>
              <p>All hotels</p>
            </Allhotelsheading1>
            <Allhotelsdropdown>w</Allhotelsdropdown>
          </Allhotelspart1>
          <Allhotelspart2>
            <Allhotelspriceside>
              <Allhotelsearchpart1>
                <Allhotelsearchpart1text>
                  Search hotel by name
                </Allhotelsearchpart1text>
                <Allhotelsearchpart1search>
                  <input type="text" placeholder="e.g Old Hunza inn" />
                </Allhotelsearchpart1search>
              </Allhotelsearchpart1>
              <Allhotelsearchpart2>Filter by</Allhotelsearchpart2>
            </Allhotelspriceside>

            <Allhotelscardmain>
              {Allhotelsdata.map((ee,index) => {
                return (
                  <>
                    <Allhotelscard onClick={aman2} key={index} >
                      <Allcardcenter>
                        <Allhotelscardimage>
                          <img src={ee.Allhotelsimg} alt="" />
                        </Allhotelscardimage>
                        <Allhotelscardtext>
                          <Allhotelscardname>
                            <p>{ee.Allhotelsname}</p>
                          </Allhotelscardname>
                          <Allhotelscardreview>
                            <Rating
                              className="card-rating"
                              name="read-only"
                              value={ee.Allhotelsreview}
                              readOnly
                            />
                          <Allhotelsclientoverview>
                          {ee.Allhotelsreview} ({ee.Allhotelsoverview} Reviews) 
                          </Allhotelsclientoverview>
                          </Allhotelscardreview>
                          <Allhotelscarddisc>
                            <p>{ee.Allhotelsdisc}</p>
                          </Allhotelscarddisc>
                          <Allhotelsbookingside>
                            <Allhotelscardbooknow>
                              <p>Book Now</p>
                            </Allhotelscardbooknow>
                            <Allhotelspricingbox>
                              <Allhotelsroomsdays>
                                <Allhotelstotalrooms>
                                  {ee.Allhotelstotalroom} room
                                </Allhotelstotalrooms>
                                <Allhotelstotaldays>
                                  {ee.Allhotelstotalday} days
                                </Allhotelstotaldays>
                              </Allhotelsroomsdays>
                              <Allhotelsroomsprice>
                                <b>{ee.Allhotelsroomsprice}PKR</b>
                              </Allhotelsroomsprice>
                              <Allhotelsroomstextfree>
                                {ee.Allhotelsroomstextfree}
                              </Allhotelsroomstextfree>
                            </Allhotelspricingbox>
                          </Allhotelsbookingside>
                        </Allhotelscardtext>
                      </Allcardcenter>
                    </Allhotelscard>
                  </>
                );
              })}
            </Allhotelscardmain>
          </Allhotelspart2>
        </Allhotelscenter>
      </Allhotelsmain>
      
    </>
  );
};

export default Allhotels;
