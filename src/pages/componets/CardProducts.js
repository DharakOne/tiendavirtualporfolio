import React from "react"
import Styled from "styled-components"

const CardProductsCont = Styled.div`
    background:white;
    border: 1px solid orange;
    border-radius:10px;
    margin: 5px;
    display:grid;
    justify-items: center;
`
const Name = Styled.h3`
    font-size: 2rem;
    margin-block-start: 0.5rem;
    margin-block-end: 0.2rem;

`
const Image = Styled.img`
    width:80%;
`
const InfoBarC=Styled.div`
    background:#007fff;
    display:flex;
    width:101%;
    border-radius: 0 0 10px 10px; 
    justify-content:center;
`

const InfoC = Styled.div`
    display:grid;
    grid-template-columns: auto auto;
    column-gap:5px;
    align-items : center;
    justify-items: center;
    margin:5px;
    color:white;
`
const InfoT = Styled.h4`
    
    font-size:1.5rem;
    margin-block-start: 0;
    margin-block-end: 0;
    color:#1c1c1c;
`
const InfoA = Styled.h5`
    display:flex;
    aling-items:center;
    margin-block-start: 0;
    margin-block-end: 0;
    font-size:1.2rem;
`


export default function CardProducts(
    { name, imageDirection, price, stock }
) {

    return (
        <CardProductsCont>
            <Name>{name}</Name>
            <Image src="./images/Lavadora.jpg" name={imageDirection} />
            <InfoBarC>
            <InfoC>
                <InfoT>Precio:</InfoT>
                <InfoA>{price}</InfoA>
            </InfoC>

            <InfoC>
                <InfoT>Stock:</InfoT>
                <InfoA>{stock}</InfoA>
            </InfoC>
            </InfoBarC>
        </CardProductsCont>
    )
}