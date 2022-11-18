import arrow from "../../../assets/images/Arrow.png"
import { ButtonText, ButtonWithArrow, WrappButton } from "./button.style"

const Button = () =>{
    return (
        <WrappButton>
            <ButtonWithArrow>
                <ButtonText>WYŚLIJ</ButtonText>
                <img src={arrow} alt="arrow"/>
            </ButtonWithArrow>
        </WrappButton>
    )
}
export default Button