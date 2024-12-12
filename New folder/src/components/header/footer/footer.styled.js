import styled from "styled-components";
import border3 from "../../../images/footer.png";

export const Footermain = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${border3});
  display: flex;
  align-items: end;
  justify-content: center;
`;
export const Footercenter = styled.div`
  width: 85%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
`;
export const Footersubscribe = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 35vh;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;
export const Subscribetitle = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  /* text-align: center; */
  justify-content: center;
  height: 25vh;
  font-family: Squada One;
  font-size: 65px;
  color: #fff;
  /* font-weight: 700; */
`;
export const Subscribeinputs = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Subscribeinput1 = styled.div`
  width: 100%;
  display: flex;
  height: 10vh;
  align-items: center;
  justify-content: center;
  input {
    height: 9vh;
    width: 300px;
    font-size: 16px;
    padding-left: 20px;
    outline: none;
    border-top-left-radius: 11px;
    border-bottom-left-radius: 11px;
    border: none;
  }
  button {
    height: 9vh;
    width: 155px;
    font-size: 16px;
    outline: none;
    border-top-right-radius: 11px;
    border-bottom-right-radius: 11px;
    color: #fff;
    background-color: #ed6009;
    border: none;
  }
`;
export const Footermid = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: end;
  align-items: center;
`;
// export const  Footermid1 = styled.div`
// width: 100%;
// height: 30vh;
// display: flex;
// align-items:end;
// align-items: start;
// `
export const Footermid2 = styled.div`
  width: 20%;
  height: 25vh;
  display: flex;
  align-items: end;
  align-items: start;
  flex-direction: column;
  font-family: Poppins;
`;

export const Footermid2heading = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
`;
export const Footermid2ul = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  line-height: 25px;
  color: #cde9f1;
  ul {
    list-style: none;
    font-size: 14px;
  }
`;
export const Footermid3logo = styled.div`
  width: 30%;
  height: 20vh;
  display: flex;
  align-items: end;
  align-items: start;
  flex-direction: column;
  font-family: Poppins;
`;
export const Footermid3 = styled.div`
  width: 25%;
  height: 20vh;
  display: flex;
  align-items: end;
  align-items: start;
  flex-direction: column;
  font-family: Poppins;
`;
export const Footermid3heading = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  #set-footer-img {
    width: 150px;
    height: 30px;
  }
`;
export const Footermid3ul = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  line-height: 25px;
  color: #cde9f1;
  ul {
    list-style: none;
    font-size: 14px;
  }
`;
export const Footermid3icons1 = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
`;
export const Footermid3icons1text = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: end;
  font-size: 14px;
  color: #cde9f1;
`;
export const Footermid3icons1icons = styled.div`
  width: 24%;
  height: 8vh;
  display: flex;
  align-items: end;
  justify-content: space-between;
  font-size: 28px;
  color: #fff;
  #set-icon {
    /* &:hover {
          transition: 0.3s all ease-in-out;
            background-color: transparent;
            cursor: pointer;
            border: 4px solid #ed6009;
            color: #ed6009;
        } */
    width: 18px;
    padding: 2px 7px;
    border: 1.5px solid #fff;
    border-radius: 25px;
  }
`;

export const Footermid3contact = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
`;
export const Contactline1 = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  color: #cde9f1;
`;
export const Contactline1icon = styled.div`
  width: 12%;
  height: 5vh;
  display: flex;
  align-items: center;
  #contact-icon1 {
    &:hover {
      transition: 0.3s all ease-in-out;
      transform: scale(1.03, 1.03);
      background-color: transparent;
      cursor: pointer;
      color: #ed6009;
    }
    font-size: 20px;
    color: #cde9f1;
  }
`;
export const Contactline1text = styled.div`
  width: 80%;
  height: 5vh;
  display: flex;
  align-items: center;
  font-size: 12px;
`;
export const Footermid4 = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: end;
  align-items: start;
  background-color: orange;
`;
export const Footerend = styled.div`
  width: 100%;
  height: 10vh;
  border-top: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: #fff;
  font-family: Poppins;
`;
