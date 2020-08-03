import React from "react"
import Styled from "styled-components"
import CardProducts from "./componets/CardProducts"


const ContHome = Styled.div`
    display:flex;
    margin:30px 1px;
    justify-content:center;
    grid-template-columns: auto;
    flex-wrap: wrap ;
    row-gap: 15px;
    column-gap: 10px;
`

export default function Home() {
    return (
        <ContHome>
            {[0, 1, 2, 3].map(i => <CardProducts key={i}
                imageDirection="qqq"
                name="Lavadora Frese  60kg"
                price={"300$"}
                stock={1} />
            )}
        </ContHome>
    )
}

