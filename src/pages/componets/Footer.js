import React from "react"
import Styled from "styled-components"

const FooterCont=Styled.div``
const Contenedor=Styled.div``
const Title=Styled.h2``
const SubTitle=Styled.h5``
const Typography=Styled.p``
const Link=Styled.a``


export default function Footer () {
    return (
        <FooterCont>
            <Contenedor>
                <Title>
                    Contactenos
                </Title>
                <SubTitle>Servicio al cliente</SubTitle>
                <Typography> (504)+ 9465-5634</Typography>
                <Link>sd</Link>
            </Contenedor>
        </FooterCont>
    )
}