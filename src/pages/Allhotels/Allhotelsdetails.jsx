import { React, useState } from "react";
import {
  Hoteldetailscomponents,
  Hoteldetailsdetaliscenter,
  Hoteldetailsdetalismain,
  Hoteldetailsimage1,
  Hoteldetailsimage2,
  Hoteldetailsimage2a3,
  Hoteldetailsimages,
  Hotelnamecomponent,
  Hotelnamecomponentmain,
  Hoteloverviewdiv,
  Hoteloverviewdivcenter,
  Locationhotel,
  Namehotel,
  Overviewdivheading,
  Overviewdivpara1,
  Reviewhotel,
  Overviewdivpara11,
  Reviewshotel,
  Hotelfacilitesdiv,
  Hotelfacilitesdivcenter,
  Hotelfacilitiesheading,
  Hotelfacilitiesline1,
  Hotelfacilitiesbox1,
  Hotelmapcomponent,
  Hotelnamecomponentleft,
  Hotelnamecomponentright,
  Hotelnamecomponentrightimg,
  Hotelexplorearea,
  Hotelexploreline1,
  Hotelexplorebox1,
  Hotelexplorebox1right,
  Hotelbookingdiv,
  Bookingdiv1,
  Bookingdiv2,
  Bookingdivsecond,
  Bookingdivthird,
  Bookingsecondimg,
  Bookingsecondheading,
  Bookingcolumn1,
  Bookingbox1,
  Bookingcolumn2,
  Hotelfacilitiesbox11,
} from "./Allhotelsdetails.styled";
import { NavLink } from "react-router-dom";
import { FaWifi } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaHandHoldingWater } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { BiSolidOffer } from "react-icons/bi";
import { Rating } from "@mui/material";
import { MdLocationPin } from "react-icons/md";
import mapimg from "../../images/Rectangle 65.png";
import bookingimg from "../../images/Rectangle 67 (1).png";
import { FaChartArea } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaPlaneUp } from "react-icons/fa6";
import { FaStore } from "react-icons/fa";
import { TbBuildingCircus } from "react-icons/tb";
import { FaHotel } from "react-icons/fa6";
import { GiGroundSprout } from "react-icons/gi";

const Allhotelsdetails = (props) => {
  const location = useLocation();
  const data = location.state;



  return (
    <>
      <Hoteldetailsdetalismain>
        <Hoteldetailsdetaliscenter>
          <Hoteldetailsimages>
            <Hoteldetailsimage1>
              <img src={data.hotelroomimage1} />
            </Hoteldetailsimage1>
            <Hoteldetailsimage2a3>
              <Hoteldetailsimage2>
                <img src={data.hotelroomimage2} />
              </Hoteldetailsimage2>
              <Hoteldetailsimage2>
                <img src={data.hotelroomimage3} />
              </Hoteldetailsimage2>
            </Hoteldetailsimage2a3>
          </Hoteldetailsimages>
          <Hoteldetailscomponents>
            <ul>
              <li>Overview </li>
              {/* <li>Rooms</li>
              <li>Guest Reviews</li> */}
            </ul>
          </Hoteldetailscomponents>
          <Hotelnamecomponentmain>
            <Hotelnamecomponentleft>
              <Hotelnamecomponent>
                <Namehotel>{data.hotelname}</Namehotel>
                <Reviewhotel>
                  <Rating
                    className="card-rating"
                    name="read-only"
                    value={data.hotelreview}
                    readOnly
                  />
                  <Reviewshotel>({data.hoteloverview} Reviews)</Reviewshotel>
                </Reviewhotel>
                <Locationhotel>
                  {" "}
                  <MdLocationPin id="set-loc" /> {data.hotellocations}{" "}
                </Locationhotel>
              </Hotelnamecomponent>
              <Hoteloverviewdiv>
                <Hoteloverviewdivcenter>
                  <Overviewdivheading>Overview</Overviewdivheading>
                  <Overviewdivpara1>{data.hotelsparagrap1}</Overviewdivpara1>
                  <Overviewdivpara1>{data.hotelsparagrap2}</Overviewdivpara1>
                  <Overviewdivpara11>{data.hotelsparagrap3}</Overviewdivpara11>
                  <Hotelfacilitesdiv>
                    <Hotelfacilitesdivcenter>
                      <Hotelfacilitiesheading>
                        Top facilities
                      </Hotelfacilitiesheading>
                      <Hotelfacilitiesline1>
                        <Hotelfacilitiesbox1>
                          <BiSolidOffer id="set-loc3" />
                          Special Offers
                        </Hotelfacilitiesbox1>
                        <Hotelfacilitiesbox1>
                          <FaCarAlt id="set-loc3" />
                          Parking Area
                        </Hotelfacilitiesbox1>
                      </Hotelfacilitiesline1>
                      <Hotelfacilitiesline1>
                        <Hotelfacilitiesbox11>
                          <FaWifi id="set-wifi" />
                          Free Wifi
                        </Hotelfacilitiesbox11>
                        <Hotelfacilitiesbox1>
                          <FaHandHoldingWater id="set-loc3"  />
                          Hot/cold Water
                        </Hotelfacilitiesbox1>
                      </Hotelfacilitiesline1>
                    </Hotelfacilitesdivcenter>
                  </Hotelfacilitesdiv>
                </Hoteloverviewdivcenter>
              </Hoteloverviewdiv>
            </Hotelnamecomponentleft>
            <Hotelnamecomponentright>
              <Hotelnamecomponentrightimg>
                <img src={mapimg} alt="" />
              </Hotelnamecomponentrightimg>
              <Hotelexplorearea>
                <Hotelexploreline1>
                  <Hotelexplorebox1>
                    <FaPlaneUp id="set-exp" />
                    Hotel Penselvenyia
                  </Hotelexplorebox1>
                  <Hotelexplorebox1right>2 min drive</Hotelexplorebox1right>
                </Hotelexploreline1>
                <Hotelexploreline1>
                  <Hotelexplorebox1>
                    <FaStore id="set-exp" />
                    Travis Bakery store house
                  </Hotelexplorebox1>
                  <Hotelexplorebox1right>10 min drive</Hotelexplorebox1right>
                </Hotelexploreline1>
                <Hotelexploreline1>
                  <Hotelexplorebox1>
                    <GiGroundSprout id="set-exp" />
                    Olivia Johnson Garden
                  </Hotelexplorebox1>
                  <Hotelexplorebox1right>5 min drive</Hotelexplorebox1right>
                </Hotelexploreline1>
                <Hotelexploreline1>
                  <Hotelexplorebox1>
                    <TbBuildingCircus id="set-exp" />
                    Norman Opera Circus
                  </Hotelexplorebox1>
                  <Hotelexplorebox1right>12 min drive</Hotelexplorebox1right>
                </Hotelexploreline1>
                <Hotelexploreline1>
                  <Hotelexplorebox1>
                    <FaHotel id="set-exp" />
                    Rockdeset hotel
                  </Hotelexplorebox1>
                  <Hotelexplorebox1right>20 min drive</Hotelexplorebox1right>
                </Hotelexploreline1>
              </Hotelexplorearea>
            </Hotelnamecomponentright>
          </Hotelnamecomponentmain>
          <Hotelbookingdiv>
            <Bookingdiv1>
              <img src={bookingimg} alt="" />
            </Bookingdiv1>
            <Bookingdivsecond>
              <Bookingsecondimg>
                <img src={data.hotelroomimage1} />
              </Bookingsecondimg>
              <Bookingsecondheading>
                Standard twin ben, Multiple beds
              </Bookingsecondheading>
              <Bookingcolumn1>
                <Bookingbox1>
                  <FaChartArea id="set-exp" />
                  300 sq ft
                </Bookingbox1>
                <Bookingbox1>
                  <FaRegCalendarDays id="set-exp" />
                  Sleeps 3
                </Bookingbox1>
                <Bookingbox1>
                  <IoBed id="set-exp" />
                  {data.hotelbedsquantity}
                  
                </Bookingbox1>
              </Bookingcolumn1>
              <Bookingcolumn2>
              <NavLink to="/booknow"><button> Reserve suite</button></NavLink>

              </Bookingcolumn2>
            </Bookingdivsecond>
            <Bookingdivthird>
              <Bookingsecondimg>
                <img src={data.hotelroomimage2} />
              </Bookingsecondimg>
              <Bookingsecondheading>
                Standard twin ben, Multiple beds
              </Bookingsecondheading>
              <Bookingcolumn1>
                <Bookingbox1>
                  <FaChartArea id="set-exp" />
                  300 sq ft
                </Bookingbox1>
                <Bookingbox1>
                  <FaRegCalendarDays id="set-exp" />
                  Sleeps 3
                </Bookingbox1>
                <Bookingbox1>
                  <IoBed id="set-exp" />
                  1 double bed and 1 twin bed
                </Bookingbox1>
              </Bookingcolumn1>
              <Bookingcolumn2>
            <NavLink to="/booknow"> <button> Reserve suite</button></NavLink>
              </Bookingcolumn2>
              </Bookingdivthird>
          </Hotelbookingdiv>
        </Hoteldetailsdetaliscenter>
      </Hoteldetailsdetalismain>
    </>
  );
};

export default Allhotelsdetails;
