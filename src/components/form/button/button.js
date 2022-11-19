import arrow from "../../../assets/images/Arrow.png"
import { ButtonText, ButtonWithArrow, WrappButton } from "./button.style"

const Button = () =>{
    return (
        <WrappButton>
            <ButtonWithArrow type="submit">
                <ButtonText>WYŚLIJ</ButtonText>
                <img src={arrow} alt="arrow"/>
            </ButtonWithArrow>
        </WrappButton>
    )
}
export default Button