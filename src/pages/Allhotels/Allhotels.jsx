import React, { useState } from "react";
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

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const detailpage = (getID) => {
    navigate("/hoteldetails", {state : getID});
    console.log(getID)
  };

  
  return (
    <>
      <Allhotelsmain>
        <Allhotelscenter>
          <Allhotelspart1>
            <Allhotelsheading1>
              <p>All hotels</p>
            </Allhotelsheading1>
            {/* <Allhotelsdropdown>w</Allhotelsdropdown> */}
          </Allhotelspart1>
          <Allhotelspart2>
            <Allhotelspriceside>
              <Allhotelsearchpart1>
                <Allhotelsearchpart1text>
                  Search hotel by name
                </Allhotelsearchpart1text>
                <Allhotelsearchpart1search>
                  <input type="text" placeholder="e.g Old Hunza inn" onChange={(e)=>setSearch(e.target.value)} />
                </Allhotelsearchpart1search>
              </Allhotelsearchpart1>
              {/* <Allhotelsearchpart2>Filter by</Allhotelsearchpart2> */}
            </Allhotelspriceside>

            <Allhotelscardmain>
              {Allhotelsdata
              .filter((el)=>{
                if(search == ""){
                  return el
                }else if(el.hotelname.toLowerCase().includes(search.toLowerCase())){
                  return el
                }else if(el.id.toLowerCase().includes(search.toLowerCase())){
                  return el
                }
              })
              .map((ee) => {
                return (
                  <>
                    <Allhotelscard id={ee.id} onClick={()=>detailpage(ee)} >
                      <Allcardcenter>
                        <Allhotelscardimage>
                          <img src={ee.hotelimage} alt="" />
                        </Allhotelscardimage>
                        <Allhotelscardtext>
                          <Allhotelscardname>
                            <p>{ee.hotelname}</p>
                          </Allhotelscardname>
                          <Allhotelscardreview>
                            <Rating
                              className="card-rating"
                              name="read-only"
                              value={ee.hotelreview}
                              readOnly
                            />
                          <Allhotelsclientoverview>
                          {ee.hotelreview} ({ee.hoteloverview} Reviews) 
                          </Allhotelsclientoverview>
                          </Allhotelscardreview>
                          <Allhotelscarddisc>
                            <p>{ee.hoteldisc}</p>
                          </Allhotelscarddisc>
                          <Allhotelsbookingside>
                            <Allhotelscardbooknow>
                              <p>Book Now</p>
                            </Allhotelscardbooknow>
                            <Allhotelspricingbox>
                              <Allhotelsroomsdays>
                                <Allhotelstotalrooms>
                                  {ee.hoteltotalroom} room
                                </Allhotelstotalrooms>
                                <Allhotelstotaldays>
                                  {ee.hoteltotalday} days
                                </Allhotelstotaldays>
                              </Allhotelsroomsdays>
                              <Allhotelsroomsprice>
                                <b>{ee.hotelroomprice}PKR</b>
                              </Allhotelsroomsprice>
                              <Allhotelsroomstextfree>
                                {ee.hotelroomtextfree}
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
