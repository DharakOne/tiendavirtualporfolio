import React from "react"
import Styled from "styled-components"

const FooterCont = Styled.div`
    displa:grid;
    background: #FAC87E;
    justyify-content:center;
    padding:10px 30px;

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
const Typography = Styled.p``
const Link = Styled.a`
    text-decoration:none;
    color:rgb(64, 115, 255);
`


export default function Footer() {
    return (
        <FooterCont>
            <Contenedor>
                <Title>
                    Contactenos
                </Title>
                <SubTitle>Servicio al cliente</SubTitle>
                <Typography> (504)+ 9465-5634</Typography>
                <Typography>storejunior@gmail.com</Typography>
                <SubTitle>Escribenos</SubTitle>
                <Typography>
                    8:00 am  a 6:00 pm de lunes a Sabado
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
                    <Link href="/QuieneSomos">Quienes  somos</Link>
                </SubTitle>
 
            </Contenedor>
        </FooterCont>
    )
}

