import styled from "styled-components";


export const Headermain = styled.div`
  width: 100%;
  height: 13vh;
  display: flex;
  align-items: center;
  background-position: bottom;
  justify-content: center;
  position: fixed;
    background-color: ${({ isScrolled }) => (isScrolled ? '#85b6c6ed' : 'transparent')};
  transition: background-color 0.3s ease;
  z-index: 1000;
  box-shadow: ${({ isScrolled }) => (isScrolled ? '0px 13px 7px rgb(0 0 0 / 25%)' : 'none')};

`;
export const Headercenter = styled.div`
  width: 85%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Poppins;
  color: #21282a;
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
    li {
      font-size: 16px;
      text-decoration: none;
      cursor: pointer;
      &:hover {
        transition: all ease-in-out 0.3s;
    transform: scale(1.1);
      }
    }
    a {
      text-decoration: none;
      color: #21282a;


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
  a {
      text-decoration: none;
      color: #21282a;
    }
    &:hover{

      transition: all ease-in-out 0.3s;
    transform: scale(1.1);
    }
`;
export const Headerbtn2 = styled.div`
  background-color: #0492bb;
  /* background-image: linear-gradient(to bottom right, #0492bb 0%, #ed6009 100%); */
  border: 4px solid #0492bb;
  background-color:#fff;
  width: 100px;
  height: 6vh;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: #0492bb;

  }
  &:hover {
    transition: all ease-in-out 0.3s;
    transform: scale(1.1);
    background-color: #fff;
    border: 4px solid #0492bb;
  }
`;
