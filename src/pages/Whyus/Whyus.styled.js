import styled from "styled-components";
import backgroundImage from '../../images/whyus2.jpg';

export const Whyusmain = styled.div`
width: 100%;
height: auto;
display:flex;
flex-direction: column;

`
export const Whyuscenter = styled.div`
width: 100%;
height: 50vh;
display:flex;
align-items: center;
justify-content: center;
 background-image: url(${backgroundImage});
background-size: cover;
background-repeat: no-repeat;
    background-position: center;
filter: brightness(0.7);
`
export const Whyuscontantpara1 = styled.div`
width: 100%;
height: 10vh;
display:flex;
align-items: end;
justify-content: center;
`
export const Whyustextsection = styled.div`
width: 100%;
height: 100vh;
display:flex;
align-items: center;
justify-content: center;
background-color: #fff;
`

export const Whyustextsectioncenter = styled.div`
width:85%;
height: 100vh;
display:flex;
align-items: center;
justify-content: space-between;

`
export const Whyusbox1 = styled.div`
width:48%;
height: 60vh;
display:flex;
align-items: center;
justify-content: center;
font-size: 16px;
line-height: 2;
font-family: Poppins;
text-align: center;
background-color: #eee;
box-shadow: 3px 5px 7px 1px #ed6009;
p{

    padding: 2px;
}
`