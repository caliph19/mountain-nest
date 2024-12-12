import styled from "styled-components";

export const Signupmain = styled.div`
width: 100%;
height: 100vh;
display: flex;
`
export const Signupleft = styled.div`
width: 510px;
height: 100vh;
display: flex;
background-color: #0492bb;
flex-direction: column;
align-items: center;
justify-content: space-between;

`
export const Signupleftlogo = styled.div`
width: 50%;
height: 15vh;
align-items: center;
justify-content: center;
display: flex;
img{
    width: 100%;
}

`
export const Signuplefttext = styled.div`
width: 50%;
height: 60vh;
align-items: start;
justify-content: center;
display: flex;
font-size: 36px;
font-family: Squada One;
color: #fff;

`
export const Signupleftrouble = styled.div`
width: 100%;
height: 15vh;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-family: Poppins;
color: #fff;
`
export const Signupright = styled.div`
width: 930px;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const Signuprightpart1 = styled.div`
width: 80%;
height: 15vh;
display: flex;
align-items: center;
justify-content: end;
font-family: Poppins;

`
export const Signuprightpart2 = styled.div`
width: 457px;
height: 70vh;
display: flex;
/* align-items: center; */
justify-content: space-between;
flex-direction: column;
`
export const Signuppart2heading1 = styled.div`
width: 100%;
height: 6vh;
display: flex;
align-items: center;
justify-content: start;
font-size: 20px;
color: #202020;
font-family: Squada One;

`
export const Signuppart2google = styled.div`
width: 100%;
height: 9vh;
display: flex;
align-items: center;
justify-content: start;

`
export const Signupgoogle = styled.button`
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
export const Signupfb = styled.button`
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
export const Signuppart2or = styled.div`
width: 100%;
height: 5vh;
display: flex;
align-items: center;
justify-content: center;
color: #84818A;
font-family:Poppins;
`
export const Signuppart2email = styled.div`
width: 100px;
height: 25px;
display: flex;
align-items: center;
justify-content: center;
color: #84818A;
font-size: 12px;
font-family:Poppins;
`
export const Signuppart2emailinput = styled.div`
width: 393px;
height: 60px;
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
export const Signupnamesection = styled.div`
width: 393px;
height: 12vh;
display: flex;
align-items: center;
justify-content: space-between;
`
export const Signupfirstname = styled.div`
width: 40%;
height: 10vh;
display: flex;
align-items: center;
justify-content: start;
input{
    width: 180px;
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
export const Signuplasttname = styled.div`
width: 40%;
height: 10vh;
display: flex;
align-items: center;
justify-content: end;
input{
    width: 189px;
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
export const Signuppart2passwordinput = styled.div`
width: 393px;
height: 12vh;
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
padding-left:10px;
outline: none;
:focus {
border-color: #007bff;
border-width: 2px; 
}
}

`
export const Signuppart2forgotten = styled.div`
width: 393px;
height: 10vh;
display: flex;
align-items: end;
justify-content: space-between;
font-family:"Poppins";
`

export const Signupbutton = styled.button`
width: 100%;
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
export const Signuprightpart3 = styled.div`
width: 930px;
height: 20vh;
display: flex;
align-items: center;
justify-content: center;
font-size: 12px;
font-family:Poppins;
text-align: center;
`