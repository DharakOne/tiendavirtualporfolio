import Styled from "styled-components"

const IconStyle = Styled.div`
    display:flex;
    align-items:center;
    fill:${props => props.background ? props.background  : "red"};;
`
 
export default IconStyle