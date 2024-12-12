import React from "react";
import { MdPeopleAlt } from "react-icons/md";
import {
  Givebox1,
  Givebox1detail,
  Givebox1heading,
  Givebox1icon,
  Givebox2,
  Giveboxes,
  Givecenter,
  Giveheading,
  Giveheading1,
  Giveheading2,
  Givemain,
} from "./give.styled";
import { FaLocationDot } from "react-icons/fa6";
import { PiChatTextFill } from "react-icons/pi";

const Give = () => {
  return (
    <>
      <Givemain>
        <Givecenter>
          <Giveheading>
            <Giveheading1>
              <p>WHAT WE GIVE?</p>
            </Giveheading1>
            <Giveheading2>
              <p>Isn’t just features, we give all the best for you</p>
            </Giveheading2>
          </Giveheading>
          <Giveboxes>
            <Givebox1>
              <Givebox1icon>
                <MdPeopleAlt />
              </Givebox1icon>
              <Givebox1heading>
                <p>Security Guaranteed</p>
              </Givebox1heading>
              <Givebox1detail>
                <p>
                  Lorem ipsum dolor sit amet consectetur. dolor sit amet
                  consectetur Volutpat facilisi libero mauris leo purus.
                </p>
              </Givebox1detail>
            </Givebox1>
            <Givebox1>
              <Givebox1icon>
                <FaLocationDot /> 
              </Givebox1icon>
              <Givebox1heading>
                <p>Insurance</p>
              </Givebox1heading>
              <Givebox1detail>
                <p>
                In every trip includes insurance. So don’t worry, we’ll cover it!
                </p>
              </Givebox1detail>
            </Givebox1>
            <Givebox2>
              <Givebox1icon>
              <PiChatTextFill />
              </Givebox1icon>
              <Givebox1heading>
                <p>Unique Hotels</p>
              </Givebox1heading>
              <Givebox1detail>
                <p>
                Many unique spots in the world is waiting for you. Don’t forget bring your own camera!
                </p>
              </Givebox1detail>
            </Givebox2>
          </Giveboxes>
        </Givecenter>
      </Givemain>
    </>
  );
};

export default Give;
