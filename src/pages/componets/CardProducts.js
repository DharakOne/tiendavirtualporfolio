import React from "react"
import Styled from "styled-components"

const CardProductsCont = Styled.div`
    background:white;
`
const Name = Styled.h3``
const Image = Styled.image``
const InfoC = Styled.div``
const InfoT = Styled.h4``
const InfoA = Styled.h5``


export default function CardProducts(
    { name, imageDirection, price, stock }
) {

    return (
        <CardProductsCont>
            <Name>{name}</Name>
            <Image name={imageDirection} />
            <InfoC>
                <InfoT>Precio</InfoT>
                <InfoA>{price}</InfoA>
            </InfoC>
            <InfoC>
                <InfoT>Stock</InfoT>
                <InfoA>{stock}</InfoA>
            </InfoC>
        </CardProductsCont>
    )
}