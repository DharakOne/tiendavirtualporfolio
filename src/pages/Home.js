import React from "react"
import Styled from "styled-components"
import CardProducts from "./componets/CardProducts"


const ContHome = Styled.div`
    display:grid;
    margin:30px 1px;
    justify-content:center;
    grid-template-columns: auto;
    flex-wrap: wrap ;
    row-gap: 15px;
    column-gap: 10px;
    @media (min-width: 670px) {
        grid-template-columns:auto auto;
    }
    @media (min-width: 910px) {
        grid-template-columns:auto auto auto;
    }    
`

export default function Home() {
    return (
        <ContHome>
            {[0, 1, 2, 3,4,5].map(i => <CardProducts key={i}
                imageDirection="qqq"
                name="Lavadora Frese  60kg"
                price={"300$"}
                stock={1} />
            )}
        </ContHome>
    )
}

