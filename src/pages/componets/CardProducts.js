import React from "react"
import Styled from "styled-components"

const CardProductsCont = Styled.div`
    display: flex;
    flex-direction: column;
    width: 305px;
    height: 448px;
    background: #E8E8E8;
    border-radius: 14px;
    margin: 5px 2px;
`

const Price = Styled.h2`
    display: flex;
    flex-direction: column;
    background: #FAC87E;
    border-radius: 12px;
    flex: none;
    order: 0;
    align-self: flex-end;
    margin: 10px;
    padding: 10px;
`
const Info = Styled.div`
    display: flex;
    width: 295px;
    height: 95px;
    padding:0 5px;
    background: #F8F8F8;
    border-radius: 0 0 14px 14px;
    align-content:center;
    justify-content:center;

    
    flex: none;
    align-self: center;
    justify-self:flex-end;
`

const Name = Styled.a`
    font-family: Arsenal;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 38px;
    text-align: center;
    
    color: #3687FF;
    
    
    /* Inside Auto Layout */
    
    flex: none;
    order: 0;
    align-self: center;
    margin: 0px 10px;
    text-decoration:none;
`

const Image = Styled.img`
    border-radius:10px;
    margin:10px 30px;
    height: 268px;
    flex: none;
    align-self: center;
`



export default function CardProducts(
    { name, imageDirection, price, stock }
) {

    return (
        <CardProductsCont>
            <Price>30$</Price>
            <Image src="./images/Lavadora.jpg" name={imageDirection} />
            <Info>
                <Name href="/sd">
                    {name}
                </Name>
            </Info>
        </CardProductsCont>
    )
}