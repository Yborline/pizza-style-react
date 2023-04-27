import styled from "styled-components"

export const Div = styled.div`
display: flex;


height: 20px;
border-radius: 20px;
min-width: 80px;
max-width: 80px;
align-items: center;
justify-content:center;


`

export const Button = styled.button`
padding: 0px;
height: 15px;
width: 20px;
border: 0px;
color: ${({theme}) => theme.text};
background-color: white;
cursor: pointer;
`

export const Span = styled.span`

background-color: ${({ theme }) => theme.basketList};
width: 20px;
text-align: center;

   

`