import styled from "styled-components";
import border2 from '../../images/Element.png'
import border3 from '../../images/border1.png'

export const Homeborder = styled.div`
  width: 100%;
  height: 5vh;
  img{
    width: 100%;
    height: 100%;
}
`;
export const Homemain = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Homecenter = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
`;
export const Homepart1 = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;

`;
export const Homepart1center = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

`;
export const Homepart1left = styled.div`
  width: 47%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  /* background-color: orange; */
  font-family: "Squada One";
  justify-content: center;
  #Explore{
    font-size: 80px;
    color: #0492bb;
  }
  #budget{
    font-size: 40px;
  }
  #hotels{
    font-size: 140px;
    color: #ed6009;
  }
`;
export const Part1lefttoptext= styled.div`
width: 100%;
height: auto;
`
export const Part1leftmidtext= styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
P{
  font-size: 30px;
}
`
export const Part1leftdetailtext= styled.div`
width: 100%;
height: 20vh;
display: flex;
justify-content: start;

`
export const Part1leftdetailtextcenter= styled.div`
width: 90%;
height: auto;
P{
  font-family: Poppins;
    /* font-weight: 400; */
    font-size: 13px;
    line-height: 22px;
}
`
export const Part1leftexplorebutton= styled.button`
width: 130px;
height: 45px;
background-color: #ED6009;
border: none;
border-radius: 15px;
color: #ffff;

`
export const Homepart1right = styled.div`
  width: 53%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

`;
export const Part1rightimg1 = styled.div`
  width: 50%;
  height: 90vh;
  display: flex;
  align-items: end;
  justify-content: start;
  -webkit-box-reflect: below 5px linear-gradient(transparent 70%, #0004);
    transition: .5s;
  img{
    width: 260px;
    height: 410px;
    border-radius: 28px;
  }

`;
export const Part1rightimg2 = styled.div`
width: 50%;
height: 90vh;
display: flex;
align-items: start;
justify-content: end;
img{
    width: 260px;
    height: 410px;
    border-radius: 28px;
  }
`;

export const Homepart2 = styled.div`
width: 100%;
height: 30vh;
display: flex;
align-items: center;
`
export const Part2center = styled.div`
width: 100%;
height: 20vh;
display: flex;

`
export const Part2text = styled.div`
width: 85%;
/* height: 30vh; */
display: flex;
flex-direction: column;

`
export const Part2textheading = styled.div`
width: 100%;
/* height: 30vh; */
display: flex;
font-family: Squada One;
font-size: 30px;

`
export const Part2textdetails = styled.div`
width: 55%;
/* height: 30vh; */
display: flex;
font-family: Poppins;
font-size: 15px;
color: #21282A;

`
export const Part2viewallbutton = styled.div`
    width: 15%;
    height: 10vh;
    display: flex;
    font-family: Poppins;
    align-items: center;;

`
export const Part2button = styled.button`
width: 110px;
    display: flex;
    background-color: brown;
    font-family: Poppins;
    border-radius: 15px;
    height: 42px;
    background-color: #ED6009;
    border: none;
    align-items: center;
    justify-content: center;
    color: #fff;
`
export const Part3 = styled.div`
width: 100%;
height: 100vh;
display: flex;
/* background-color: yellow; */
`
export const Part4 = styled.div`
width: 100%;
height: 130vh;
display: flex;
/* background-color: yellow; */
background-image: url(${border2});
background-repeat: no-repeat;
background-position: top;
    background-size: contain;
`
export const Part5 = styled.div`
width: 100%;
height: 100vh;
display: flex;
/* background-color: yellow; */
background-image: url(${border3});
background-repeat: no-repeat;
background-position: center;
    background-size: cover;
`
export const Part6 = styled.div`
width: 100%;
height: 110vh;
display: flex;
align-items: center;
justify-content: center;

`
export const Part6center = styled.div`
width: 85%;
height: 110vh;
display: flex;
align-items: end;
justify-content: center;
flex-direction: column;
`
export const Part6text= styled.div`
width: 100%;
height: 50vh; 
display: flex;
align-items: center;
text-align: center;
justify-content: center;
flex-direction: column;
`
export const Part6text1= styled.div`
width: 100%;
height: 20vh;
display: flex;
align-items: end;
justify-content: center;
color: #21282A;
font-weight: 400;
font-size: 55px;
font-family: Squada One;
`
export const Part6text2= styled.div`
width: 45%;
height: 15vh;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
color:  #21282ACC;
font-size: 18px;
`
export const Part7 = styled.div`
width: 100%;
height: 100vh;
`