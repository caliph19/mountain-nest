import React, {usestate} from "react";
import Hoteldetais1 from "./Hotelsdata";
import { FaHeart } from "react-icons/fa";
import { Hotelcard, Hotelcardcenter, Hotelcarddetail, Hotelcardhover, Hotelcardhoverbutton, Hotelcardhovertext, Hotelcardimage, Hotelcardmain, Hotelcardname, Hotelcardstay } from "./Hotels.styled";

const Hotels = () => {
  // const = [heartcolor , setheartcolor] = usestate()
  return (
    <>
    <Hotelcardmain>
    <Hotelcardcenter>

      {Hoteldetais1.map((ee) => {
        return (
          <>
            <Hotelcard>
              <Hotelcardimage>
                <img id="set-hotelimg" src={ee.Hotelimg} alt=""  />
              </Hotelcardimage>
              <Hotelcardhover>
                <Hotelcardhovertext>
                <p>{ee.Hotelprice} PKR</p>
                </Hotelcardhovertext>
                <Hotelcardhoverbutton >

                <  FaHeart />
                </Hotelcardhoverbutton>
                
              </Hotelcardhover>
              <Hotelcarddetail>
              <Hotelcardname>
              <p>{ee.Hotelname} </p>
              </Hotelcardname>
              <Hotelcardstay>
              <p>{ee.Hotelstay}</p>
              </Hotelcardstay>
              </Hotelcarddetail>
            </Hotelcard>
          </>
        );
      })}
    </Hotelcardcenter>
    </Hotelcardmain>
    </>
  );
};

export default Hotels;
