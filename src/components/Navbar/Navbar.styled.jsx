import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Ul = styled.ul`

display:flex;
z-index: 2;
width: 100%;
justify-content: space-around;
align-items: center;
position:fixed;
  height: 60px;
  padding: 0 20px;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  background-color: #fff;

   @media screen and (min-width: 768px) {
    justify-content: space-evenly;
    padding: 0 32px;
  }
   @media screen and (min-width: 1280px) {
    padding: 0 16px;
  }`

export const Link = styled(NavLink)`
position: relative;
color: black;
:hover{
  color: #1E90FF;
}
&.active{
text-decoration: underline;
  color: #1E90FF;
};

  `


  export const SpanCartNumber = styled.p`
position: absolute;
color: white;
background-color: #4169E1;
border-radius: 50%;
width:15px;
height: 15px;
bottom: 10px;
left:25px;
text-align: center;
font-size:12px;
margin: 0px;

`




