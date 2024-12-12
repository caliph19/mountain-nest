import styled from "styled-components";


export const Hotelcardmain = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

`
export const Hotelcardcenter = styled.div`
width: 100%;
height: 80vh;
display: flex;
/* align-items: center; */
justify-content: space-between;

`
export const Hotelcard = styled.div`
    width: 30%;
    overflow: hidden;
    position: relative;
    height: 80vh;
    display: flex;
    flex-direction: column;

`
export const Hotelcardimage = styled.div`
    width: 315px;
    height: 379px;
#set-hotelimg{
    width: 315px;
    height: 380px;
    background-position: center;
}

`
export const Hotelcardhover = styled.div`
color: #000;
    position: absolute;
    top: 1px;
    width: 98%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 25%;
    opacity: 1;
    transition: all ease-in-out 0.3s;
    background-color: transparent;
    /* flex-direction: column-reverse; */
    /* &:hover {
    opacity: 100%;
    transition: all ease-in-out 0.3s;
    background-color: transparent;
    padding-bottom: 20px;
} */

`
export const Hotelcardhovertext = styled.div`
        width: auto;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 8px;
    border: 1px solid #fff;
    border-radius: 9px;
    backdrop-filter: blur(7px) ;
    box-shadow:  rgba(25, 50, 47, 0.08);
    font-family: Squada One;
    font-size: 30px;
  font-weight: 700;


`
export const Hotelcardhoverbutton = styled.button`
        width: auto;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    border: 1px solid #fff;
    border-radius: 25px;
    backdrop-filter: blur(7px);
    background-color: transparent;
    font-size: 28px;
    color: red;

`
export const Hotelcarddetail = styled.div`
width: 100%;
height: 17vh;
display: flex;
flex-direction: column;

`
export const Hotelcardname = styled.div`
width: 100%;
height: 10vh;
display: flex;
align-items: center;
font-family: Squada One;
font-size: 35px;


`
export const Hotelcardstay = styled.div`
width: 100%;
height: 6vh;
display: flex;
/* align-items: center; */
font-family: Poppins;


`