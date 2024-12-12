import styled from "styled-components";

export const Forgotpasswordmain = styled.div`
width: 100%;
height: 100vh;
display: flex;
/* background-color: #fff; */
`
export const Forgotpasswordleft = styled.div`
width: 510px;
height: 100vh;
display: flex;
background-color: #0492bb;
flex-direction: column;
align-items: center;
justify-content: space-between;

`
export const Forgotpasswordleftlogo = styled.div`
width: 50%;
height: 15vh;
align-items: center;
justify-content: center;
display: flex;
img{
    width: 100%;
}
`
export const Forgotpasswordlefttext = styled.div`
width: 50%;
height: 60vh;
align-items: start;
justify-content: center;
display: flex;
font-size: 36px;
font-family: Squada One;

color: #fff;

`
export const Forgotpasswordleftrouble = styled.div`
width: 100%;
height: 15vh;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-family: Poppins;
color: #fff;
`
export const Forgotpasswordright = styled.div`
width: 930px;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const Forgotpasswordrightpart2 = styled.div`
width: 457px;
height: 70vh;
display: flex;
/* align-items: center; */
justify-content: center;
flex-direction: column;
`
export const Forgotpasswordpart2heading1 = styled.div`
width: 100%;
height: 10vh;
display: flex;
align-items: center;
justify-content: start;
font-size: 20px;
color: #202020;
font-family: Squada One;

`
export const Forgotpasswordpart2google = styled.div`
width: 100%;
height: 15vh;
display: flex;
align-items: center;
justify-content: start;

`
export const Forgotpasswordgoogle = styled.button`
width:393px;
height: 48px;
display: flex;
align-items: center;
justify-content: center;
background-color: #ED6009;
border: none;
border-radius: 10px;
font-size: 15px;
color: #FFF;
font-family:Poppins;
cursor: pointer;
&:hover{
    background-color: #fff;
    color: #ED6009;
    border:2px solid #ED6009;
    transition: 0.3s all ease-in-out;
    transform: scale(1.05, 1.05);
}
`
export const Forgotpasswordpart2or = styled.div`
width: 85%;
height: 10vh;
display: flex;
align-items: center;
justify-content: center;
color: #84818A;
font-family:Poppins;
`
export const Forgotpasswordpart2email = styled.div`
width: 100px;
height: 20px;
display: flex;
align-items: center;
justify-content: start;
color: #84818A;
font-size: 12px;
font-family:Poppins;
`
export const Forgotpasswordpart2emailinput = styled.div`
width: 393px;
height: 55px;
display: flex;
align-items: center;
justify-content: center;
input{
    width: 393px;
height: 48px;
display: flex;
align-items: center;
justify-content: center;
font-size: 15px;
font-family:Poppins;
border: 1px #DCDBDD;
border-radius: 10px;
padding-left: 10px;
outline: none;
}
`

export const Forgotpasswordpart2forgotten = styled.div`
width: 393px;
height: 10vh;
display: flex;
align-items: end;
justify-content: center;
font-family:"Poppins";
`
export const Forgotpasswordforgottenpassord = styled.div`
width: 130px;
height: 10vh;
display: flex;
align-items: center;
justify-content: center;
font-family:Poppins;
font-size: 14px;
color: #47464A;
`
export const Forgotpasswordbutton = styled.button`
width: 100px;
height: 10vh;
display: flex;
align-items: center;
justify-content: start;
font-family:"Poppins";
cursor: pointer;
background-color: 'transpatent';
border: none;
font-size: 14px;
a {
    text-decoration: none;
    color: #47464A;

  }

`