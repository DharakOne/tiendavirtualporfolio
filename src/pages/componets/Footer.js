import React from "react"
import Styled from "styled-components"
import FooterBrand from "./FooterBrand"

import IconStyle from  "../../utils/icons/IconStyle"
import { ReactComponent as IconEmail } from "../../utils/icons/email.svg"
import { ReactComponent as IconWhatsapp } from "../../utils/icons/whatsapp.svg"



const FooterCont = Styled.div`
    display:grid;
    background: #FAC87E;
    justify-content: space-around;
    padding:10px 30px;
    grid-template-columns:1fr;
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
                       (504)+ 9465-5634
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
                <SubTitle>
                    Facebook
                </SubTitle>
                <SubTitle>
                    Instagran
                </SubTitle>
                <SubTitle>
                    Titter
                </SubTitle>
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