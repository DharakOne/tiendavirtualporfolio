import React from "react"
import Styled from "styled-components"
import FooterBrand from "./FooterBrand"

import IconStyle from "./microcomponentes/IconStyle"
import { ReactComponent as IconEmail } from "../../utils/icons/email.svg"
import { ReactComponent as IconWhatsapp } from "../../utils/icons/whatsapp.svg"
import { ReactComponent as IconFacebook } from "../../utils/icons/Facebook.svg"
import { ReactComponent as IconInstagram } from "../../utils/icons/Instagram.svg"
import { ReactComponent as IconTwitter } from "../../utils/icons/Twitter.svg"
import { ReactComponent as IconPhone } from "../../utils/icons/Phone.svg"




const FooterCont = Styled.div`
    display:grid;
    background: #FAC87E;
    justify-content: space-around;
    padding:10px 30px;
    grid-template-columns:1fr;
    @media (min-width: 670px) {
        grid-template-columns:1fr 1fr;
    }
    @media (min-width: 1200px) {
        grid-template-columns:1fr 1fr 1fr 1fr;
        padding:10px 30px  70px;
    }
`
const Contenedor = Styled.div`
    width:100%;
`
const Title = Styled.h1`
    white-space: normal; 
    text-align:center;
    color:rgb(36, 36, 36);
`
const SubTitle = Styled.h2`
    color:rgb(36, 36, 36);

`
const Typography = Styled.div`
    display:flex;
    align-items: center;
`
const Link = Styled.a`
    text-decoration:none;
    color:rgb(64, 115, 255);
`

const IconCont = Styled.div`
    display:grid;
    grid-template-columns: auto auto auto;
    justify-content:center;
    column-gap:15px;
`

export default function Footer() {
    return (
        <FooterCont>
            <FooterBrand />
            <Contenedor>
                <Title>
                    Contactenos
                </Title>
                <SubTitle>Servicio al cliente</SubTitle>
                <Typography>
                    <IconStyle> <IconWhatsapp width="24px" height="24px" /></IconStyle> 
                    <IconStyle> <IconPhone width="24px" height="24px" /></IconStyle>
                    504+ 9465-5634
                    </Typography>
                <Typography>
                    <IconStyle><IconEmail /></IconStyle>
                    storejunior@gmail.com
                    </Typography>
                <SubTitle>Horario de atencion</SubTitle>
                <Typography>
                    Lunes a Sabado  de 8:00 am  a 6:00 pm
                </Typography>
            </Contenedor>
            <Contenedor>
                <Title>Siguenos en las redes sociales</Title>
                <IconCont>
                    <IconStyle><IconFacebook height="36px" width="32px"/></IconStyle>
                    <IconStyle><IconInstagram height="36px" width="36px" /></IconStyle>
                    <IconStyle><IconTwitter height="36px" width="36px" /></IconStyle>
                </IconCont>
            </Contenedor>
            <Contenedor>
                <Title>
                    Enlaces de interes
                    </Title>
                <SubTitle>
                    <Link href="/PreguntasFrecuentes" >Preguntas Frecuentes</Link>
                </SubTitle>
                <SubTitle>
                    <Link href="/PoliticasDeDevolucion" >Politicas de devolucion</Link>
                </SubTitle>
                <SubTitle>
                    <Link href="/QuieneSomos">Quienes  somos?</Link>
                </SubTitle>

            </Contenedor>
        </FooterCont>
    )
}