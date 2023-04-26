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

  @media (min-width: 768px) {
    justify-content: space-evenly;
    padding: 0 32px;
  }
  @media (min-width: 1280px) {
    padding: 0 16px;
  }`

export const Link = styled(NavLink)`

&.active{
    color: red;
};

  `


