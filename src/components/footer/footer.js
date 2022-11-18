import FB from "../../assets/images/FB.png"
import YT from "../../assets/images/YT.png"
import IN from "../../assets/images/IN.png"
import { FooterText, Img, Wrapp, WrappImg } from "./footer.style"

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