import styled from "styled-components";
import headerimg1 from '../../images/topborder.png'
export const Headermain = styled.div`
  width: 100%;
  height: 13vh;
background-image: url(${headerimg1});
  display: flex;
  align-items: center;
  background-position: bottom;
  justify-content: center;
  /* border-bottom: 1px solid black; */
  /* box-shadow: inset -1px 4px 10px #0492bb; */
  /* position: fixed; */
`;
export const Headercenter = styled.div`
  width: 85%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family:Poppins;
  color:#21282A;

  

`;
export const Headerlogo = styled.div`
  width: 30%;
  height: 10vh;
  display: flex;
  align-items: center;

`;
export const Headeritems = styled.div`
  width: 40%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    list-style: none;
    align-items: center;
    display: flex;
    height: 10vh;
    justify-content: flex-start;
    column-gap: 26px;
    color: #21282A;
    li {
        font-size: 16px;
        text-decoration: none;
        cursor: pointer;
        &:hover{
    transition: 0.3s all ease-in-out;
    transform: scale(1.05, 1.05);
    
    }
    }
    a {
        text-decoration: none;
        color: #21282A;
    }
   }
`;
export const Headerbuttons = styled.div`
  width: 30%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: end;
`;
export const Headerbtn1 = styled.div`
  width: 60px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const Headerbtn2 = styled.div`
 background-color: #0492bb;
 /* background-image: linear-gradient(to bottom right, #0492bb 0%, #ed6009 100%); */
    color: #fff;
    border: 4px solid #0492bb;
    width: 100px;
    height: 6vh;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        text-decoration: none;
        color: #21282A;
    }
    &:hover {
      transition: 0.3s all ease-in-out;
        background-color: #fff;
        border: 4px solid #0492bb;
        color: #ed6009;
    }
`;