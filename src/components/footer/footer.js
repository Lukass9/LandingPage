import styled from "styled-components"
import FB from "../../assets/images/FB.png"
import YT from "../../assets/images/YT.png"
import IN from "../../assets/images/IN.png"

const Wrapp = styled.footer`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100vw;
    height: auto;
    background-color: darkgray;
    padding: 10px 0;
`
const FooterText = styled.footer` 
    color: whitesmoke;
    
    @media (min-width: 650px) {
        width: 33%;
    }
`
const Img = styled.img` 
    filter: invert(100%);
    margin: 0 10px;
`
const WrappImg = styled.div` 
    display: flex;
    justify-content: center;
    align-self: flex-end;
    margin-right: 10%;
`
const Footer = () =>{
    return (
        <Wrapp>
            <FooterText>Polityka Prywatności</FooterText>
            <WrappImg>
                <Img src={FB} alt="facebook"/>
                <Img src={YT} alt="youtube"/>
                <Img src={IN} alt="instagram"/>
            </WrappImg>
        </Wrapp>
    )
}
export default Footer