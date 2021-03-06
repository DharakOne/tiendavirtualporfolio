import React from "react"
import Styled from "styled-components"


const ContAppBar = Styled.div`
    display:grid;
    grid-template-rows:auto auto;
    background:#FF7F50;
    padding: 10px 0px;
    justify-content:center;
    box-shadow: 0px 0px 5px black;

    @media (min-width: 670px) {
        justify-content:space-around;
        grid-template-rows:auto;
        grid-template-columns:auto auto;
    }
`
const LinkBrand = Styled.a`
    display:flex;
    justify-content:center;
    font-size:2.5rem;
    font-weight: bold;
    color:white;
    text-decoration:none;
`
const LinkCont = Styled.div`
    display:grid;
    grid-template-columns:auto auto;
    column-gap: 10px;
    @media (min-width: 670px) {

    }
`
const Link = Styled.a`
    display:flex;
    alignt-items:center;
    text-decoration:none;
    padding:  8px;
    font-size:1rem: 
    width:min-content;
    color:black;
    font-size:1rem;
    background:white; 
    border-radius:5%;
    
    &:hover {
        background: rgb(255,255,255,80%);
    }
    &:active{
        background:rgb(255,255,255,40%);
    }
`

export default function AppBar() {
    const Links = [
        ["Buscar Productos", "/BuscarProductos"],
        ["Contactenos", "/Contactenos"]
    ]

    return (
        <ContAppBar>
            <LinkBrand href="./">
                MyStore
        </LinkBrand>
            <LinkCont>
                {
                    Links.map((TLink) =>
                        <Link key={TLink[1]} href={TLink[1]}>{TLink[0]}</Link>
                    )
                }
            </LinkCont>

        </ContAppBar>
    )
}