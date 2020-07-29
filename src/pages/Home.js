import React from "react"
import Styled from "styled-components"
import CardProducts from "./componets/CardProducts"


const ContHome = Styled.div`
    background:aqua;
`

export default function Home() {
    return (
        <ContHome>
            <CardProducts 
            imageDirection="qqq" 
            name="Lavadora" 
            price={"300$"} 
            stock={1} />
        </ContHome>
    )
}

