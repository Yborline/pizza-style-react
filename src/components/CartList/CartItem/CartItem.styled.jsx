import styled from "styled-components";

export const Img = styled.img`
border-radius: 5px;
width:90px;
      @media screen and (min-width: 768px) {
width:100px;
  }
        @media screen and (min-width: 1280px) {
width:120px;
  }`


export const Li = styled.li`
border-radius: 5px;
padding: 10px;
height: 110px;
display:flex;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-bottom:15px;
      @media screen and (min-width: 768px) {
        height: 130px;
width: 730px;
  }
        @media screen and (min-width: 1280px) {
                    height: 150px;
width: 1000px;
  }
  
  `


export const DivImg = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-around;
  margin-right:10px;`

export const PTitle = styled.p`
  font-weight: 600;`

export const PPrice = styled.p`
position:absolute;
right:0px;
bottom: 0px;`

export const DivInfo = styled.div`
width: 100%;
position:relative;`