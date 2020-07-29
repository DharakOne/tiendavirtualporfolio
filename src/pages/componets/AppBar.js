import React from "react"
import Styled from "styled-components"


const ContAppBar = Styled.div``
const LinkBrand = Styled.a``
const LinkCont = Styled.div``
const Link = Styled.a`

    &:hover {
    background: black; 
`

export default function AppBar() {
    const Links = [
        ["Sobre Nosotros", "/SobreNosotros"],
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
                        <Link href={TLink[1]}>{TLink[0]}</Link>
                    )
                }
            </LinkCont>

        </ContAppBar>
    )
}