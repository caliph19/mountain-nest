import styled from "styled-components";

export const Signinmain = styled.div`
width: 100%;
height: 100vh;
display: flex;
/* background-color: #fff; */
`
export const Signinleft = styled.div`
width: 510px;
height: 100vh;
display: flex;
background-color: #0492bb;
flex-direction: column;
align-items: center;
justify-content: space-between;

`
export const Signinleftlogo = styled.div`
width: 50%;
height: 15vh;
align-items: center;
justify-content: center;
display: flex;
img{
    width: 100%;
}
`
export const Signinlefttext = styled.div`
width: 50%;
height: 60vh;
align-items: start;
justify-content: center;
display: flex;
font-size: 36px;
font-family: Squada One;

color: #fff;

`
export const Signinleftrouble = styled.div`
width: 100%;
height: 15vh;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-family: Poppins;
color: #fff;
`
export const Signinright = styled.div`
width: 930px;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const Signinrightpart1 = styled.div`
width: 80%;
height: 15vh;
display: flex;
align-items: center;
justify-content: end;
font-family: Poppins;

`
export const Signinrightpart2 = styled.div`
width: 457px;
height: 70vh;
display: flex;
/* align-items: center; */
justify-content: space-between;
flex-direction: column;
`
export const Signinpart2heading1 = styled.div`
width: 100%;
height: 6vh;
display: flex;
align-items: center;
justify-content: start;
font-size: 20px;
color: #202020;
font-family: Squada One;

`
export const Signinpart2google = styled.div`
width: 100%;
height: 9vh;
display: flex;
align-items: center;
justify-content: start;

`
export const Signingoogle = styled.button`
width:329px;
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
export const Signinfb = styled.button`
width: 48px;
height: 48px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
border: 1px solid #DCDBDD;
margin-left: 10px;
color: #ED6009;
font-size: 15px;
cursor: pointer;
&:hover{
    background-color: #ED6009;
    color: #DCDBDD;
    border:2px solid #ED6009;
    transition: 0.3s all ease-in-out;
    transform: scale(1.05, 1.05);
}
`
export const Signinpart2or = styled.div`
width: 85%;
height: 4vh;
display: flex;
align-items: center;
justify-content: center;
color: #84818A;
font-family:Poppins;
`
export const Signinpart2email = styled.div`
width: 100px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
color: #84818A;
font-size: 12px;
font-family:Poppins;
`
export const Signinpart2emailinput = styled.div`
width: 393px;
height: 48px;
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
export const Signinpart2passwordinput = styled.div`
width: 393px;
height: 12vh;
display: flex;
align-items: end;
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
padding-left:10px;
outline: none;
}
`
export const Signinpart2forgotten = styled.div`
width: 393px;
height: 15vh;
display: flex;
align-items: end;
justify-content: space-between;
font-family:"Poppins";
`
export const Signinforgottenpassord = styled.div`
width: 135px;
height: 10vh;
display: flex;
align-items: center;
justify-content: space-between;
font-family:Poppins;
font-size: 14px;
color: #47464A;
a {
    text-decoration: none;
    color: #47464A;

  }
`
export const Signinbutton = styled.button`
width: 164px;
height: 48px;
display: flex;
align-items: center;
justify-content: center;
font-family:"Poppins";
cursor: pointer;
background-color: #ED6009;
color: #fff;
border: none;
border-radius: 10px;
font-family: "Poppins Sans Mono", monospace;
font-size: 14px;
&:hover{
    background-color: #fff;
    color: #ED6009;
    border:2px solid #ED6009;
    transition: 0.3s all ease-in-out;
    transform: scale(1.05, 1.05);
}
`
export const Signinrightpart3 = styled.div`
width: 930px;
height: 15vh;
display: flex;
align-items: center;
justify-content: center;
font-size: 12px;
font-family:Poppins;
text-align: center;
`