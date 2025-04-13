import React from "react";
import {
  Whyusbox1,
  Whyuscenter,
  Whyuscontantpara1,
  Whyusmain,
  Whyustextsection,
  Whyustextsectioncenter,
} from "./Whyus.styled";

const Whyus = () => {
  return (
    <>
      <Whyusmain>
        <Whyuscenter>
          <Whyuscontantpara1>{/* <h1>Why us</h1>  */}</Whyuscontantpara1>
        </Whyuscenter>
        <Whyustextsection>
          <Whyustextsectioncenter>
            <Whyusbox1>
              <p>
                Choose Mountain Nest for the best value hotel bookings in
                Gilgit-Baltistan. We make finding budget-friendly accommodations
                in this stunning region easy, with a simple booking process and
                handpicked hotels to ensure quality and comfort. Experience
                affordable travel without compromising on service, and let
                Mountain Nest make your stay in Gilgit-Baltistan stress-free and
                memorable. Choose Mountain Nest for quality stays that fit your
                budget.
              </p>
            </Whyusbox1>
            <Whyusbox1>
              <p>
                Mountain Nest is your go-to online platform for booking
                affordable hotels. Our user-friendly website and mobile app
                allow you to find and reserve budget-friendly accommodations
                with ease. Whether you're planning a weekend getaway or an
                extended vacation, Mountain Nest offers a wide range of low-cost
                hotel options to suit your needs. Enjoy hassle-free bookings,
                exclusive deals, and a seamless travel experience with Mountain
                Nest.
              </p>
            </Whyusbox1>
          </Whyustextsectioncenter>
        </Whyustextsection>
      </Whyusmain>
    </>
  );
};

export default Whyus;
