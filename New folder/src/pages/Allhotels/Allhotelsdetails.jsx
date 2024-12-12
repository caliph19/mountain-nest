import { useLocation, React } from "react";
import {
  Hoteldetailscourses,
  Hoteldetailscoursesone,
  Hoteldetailscoursestwo,
  Hoteldetailsdetailcourses,
  Hoteldetailsdetaildiv,
  Hoteldetailsdetailimage,
  Hoteldetailsdetailname,
  Hoteldetailsdetailname2,
  Hoteldetailsdetaliscenter,
  Hoteldetailsdetalismain,
  Hoteldetailsimage1,
  Hoteldetailsimages,
} from "./Allhotelsdetails.styled";
import Allhotelsdata from "./Allhotelsdata";
const Allhotelsdetails = (props) => {
  // const location = useLocation();
  // const hotel = location.state?.hotel;

  // if (!hotel) {
  //   // Handle the case where hotel data is not available
  //   return <div>No hotel data found</div>;
  // }

  return (
    <>
      <Hoteldetailsdetalismain>
        <Hoteldetailsdetaliscenter>
          <Hoteldetailsimages>
            <Hoteldetailsimage1></Hoteldetailsimage1>
          </Hoteldetailsimages>
          <Hoteldetailsdetailname>
            <p>{props.value.Allhotelsname}</p>
          </Hoteldetailsdetailname>
          <Hoteldetailsdetaildiv>
            <Hoteldetailsdetailimage></Hoteldetailsdetailimage>
            <Hoteldetailsdetailname2>
              <p>{props.value.Allhotelsname}</p>
            </Hoteldetailsdetailname2>
          </Hoteldetailsdetaildiv>
        </Hoteldetailsdetaliscenter>

        {/* <p>{props.value.unive}</p> */}
      </Hoteldetailsdetalismain>
    </>
  );
};

export default Allhotelsdetails;
