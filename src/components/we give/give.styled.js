import styled from "styled-components";

export const Givemain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
export const Givecenter = styled.div`
  width: 85%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Giveheading = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Giveheading1 = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 55px;
  font-weight: unset;
  font-family: Squada One;
  color: #ffffff;
  font-weight: 500;
`;

export const Giveheading2 = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffff;
  font-family: Poppins;
`;
export const Giveboxes = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Givebox1 = styled.div`
  width: 33%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-right: 1px solid #fff;
  &:hover{
    transition: 0.3s all ease-in-out;
    transform: scale(1.03, 1.03);
    cursor: pointer;

  }
`;
export const Givebox2 = styled.div`
  width: 33%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:hover{
    transition: 0.3s all ease-in-out;
    transform: scale(1.03, 1.03);
    cursor: pointer;

  }
  /* border-right: 1px solid #fff; */
`;
export const Givebox1icon = styled.div`
  width: 55px;
  height: 9vh;
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 30px;
  &:hover{
    transition: 0.3s all ease-in-out;
    transform: scale(1.03, 1.03);
    cursor: pointer;
    color: #ed6009;
  border: 2px solid #ed6009;

  }
`;
export const Givebox1heading = styled.div`
  width: 100%;
  height: 6vh;
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #fff;
  font-family: Poppins;
  &:hover{
    transition: 0.3s all ease-in-out;
    transform: scale(1.03, 1.03);
    cursor: pointer;
    color: #ed6009;

  }
`;
export const Givebox1detail = styled.div`
  width: 57%;
  height: 9vh;
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: #fff;
  font-family: Poppins;
text-align: center;
&:hover{
    transition: 0.3s all ease-in-out;
    transform: scale(1.03, 1.03);
    cursor: pointer;
    color: #ed6009;

  }
`;