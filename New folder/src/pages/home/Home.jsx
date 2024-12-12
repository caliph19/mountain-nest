import React from "react";
import {
  Homeborder,
  Homecenter,
  Homemain,
  Homepart1,
  Homepart1center,
  Homepart1left,
  Homepart1right,
  Homepart2,
  Part1leftdetailtext,
  Part1leftdetailtextcenter,
  Part1leftexplorebutton,
  Part1leftmidtext,
  Part1lefttoptext,
  Part1rightimg1,
  Part1rightimg2,
  Part2button,
  Part2center,
  Part2text,
  Part2textdetails,
  Part2textheading,
  Part2viewallbutton,
  Part3,
  Part4,
  Part5,
  Part6,
  Part6center,
  Part6text,
  Part6text1,
  Part6text2,
  Part7,
} from "./Home.styled";
import border1 from "../../images/Vector.png";
import part1img1 from "../../images/sider3.PNG";
import part1img2 from "../../images/side1.png";
import Hotels from "../../components/header/hotels/Hotels";
import Adventure from "../../components/header/special adventure/Adventure";
import Give from "../../components/header/we give/Give";
import Teamslider from '../../components/header/teamslider/Teamslider'
// import Teamslider from "../../components/header/teamslider/Teamslider";
import Footer from "../../components/header/footer/Footer";
import Cardslider2 from "../../components/card-sider2/Cardslider2";



const Home = () => {
  
  return (
    <>
      {/* <Homeborder>
        <img src={border1} />
      </Homeborder> */}
      <Homemain>
        <Homecenter>
          <Homepart1>
            <Homepart1center>
              <Homepart1left>
                <Part1lefttoptext>
                  <p>
                    {" "}
                    <span id="Explore">EXPLORE</span>
                    <span id="budget">BUDGET FRIENDLY </span>
                    <span id="hotels">HOTELS</span>
                  </p>
                </Part1lefttoptext>
                <Part1leftmidtext>
                  <p> AFFORDABLE HOTELS IN JUST ONE CLICK</p>
                </Part1leftmidtext>
                <Part1leftdetailtext>
                  <Part1leftdetailtextcenter>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit elit. Sapiente delectus illum
                      distinctio nulla voluptas voluptate earum voluptatem nisi!
                      Corporis molestias quis necessitatibus nesciunt fugit est?
                    </p>
                  </Part1leftdetailtextcenter>
                </Part1leftdetailtext>
                <Part1leftexplorebutton>Explore More</Part1leftexplorebutton>
              </Homepart1left>
              <Homepart1right>
                <Part1rightimg1>
                  <img src={part1img1} alt="" />
                </Part1rightimg1>
                <Part1rightimg2>
                  <img src={part1img2} alt="" />
                </Part1rightimg2>
              </Homepart1right>
            </Homepart1center>
          </Homepart1>
          <Homepart2>
            <Part2center>
              <Part2text>
                <Part2textheading>
                  <h1>EXPLORE OUT POPULAR HOTELS.</h1>
                </Part2textheading>
                <Part2textdetails>
                  {" "}
                  <p>
                    Many categories are presented, each containing trip relevant
                    to the main category and ready for you to explore.
                  </p>{" "}
                </Part2textdetails>
              </Part2text>
              <Part2viewallbutton>
                <Part2button>View All Hotels</Part2button>
              </Part2viewallbutton>
            </Part2center>
          </Homepart2>
          <Part3>
            <Hotels />
          </Part3>
        </Homecenter>
      </Homemain>
      <Part4>
        <Adventure />
      </Part4>
      <Part5>
        <Give />
      </Part5>
      <Part6>
        <Part6center>
          <Part6text>
            <Part6text1>WHAT OUR CUSTOMER SAY ?</Part6text1>
            <Part6text2>Let's see what those who are already using our services say and enjoy their experience.</Part6text2>
          </Part6text>
        <Cardslider2/>
        </Part6center>
      </Part6>
    </>
  );
};

export default Home;
