import React from "react"
import Styled from "styled-components"
import CardProducts from "./componets/CardProducts"


const ContHome = Styled.div`
    display:flex;
    margin:1px;
    justify-content:center;
`

export default function Home() {
    return (
        <ContHome>
            <CardProducts 
            imageDirection="qqq" 
            name="Lavadora Frese  60kg" 
            price={"300$"} 
            stock={1} />
        </ContHome>
    )
}

