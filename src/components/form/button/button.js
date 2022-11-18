import styled from "styled-components"
import arrow from "../../../assets/images/Arrow.png"

const ButtonWithArrow = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 50px;
    border-radius: 5px;
    background-color: red;
    border: none;
    margin-top: 25px;
`
const ButtonText = styled.p` 
    color: white;
    margin-right: 15px;
    font-weight: bolder;
`
const WrappButton = styled.div` 
    display: flex;
    justify-content: center;
    width: 100vw;

`
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