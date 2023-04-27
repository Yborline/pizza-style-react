import styled from "styled-components";


export const Img = styled.img`

width: 100%;



:hover{
      transition: transform 0.25s;
    transform: scale(1.1);
}
`

export const Li = styled.li`

box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
display: flex;
    flex-direction: column;
    align-items: center;

width: 100%;
height:430px;
:hover{
 box-shadow: 7px 7px 13px 0px rgba(11,97,143,0.75);
} `

export const DivInfo= styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    height: 140px;
        justify-content: space-between;`

export const DivPhoto = styled.div`
  width: 100%;
  height: 280px;
position:relative;
  overflow: hidden;
`

export const DivText = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    text-align: center;
    `

export const PPrice = styled.p`
color: 	#E00000  ;
font-weight: 600;

    `

    
export const DivLoader = styled.p`
            position: absolute;
              top: 0;
              right: 0;
              background-color:#DCDCDC;
              width: 280px;
              height: 280px;

    `