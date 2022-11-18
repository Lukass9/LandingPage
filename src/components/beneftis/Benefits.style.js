import styled from "styled-components"
import BgBenefits from "../../assets/images/walizka.png"

export const Wrapp = styled.article` 
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    &::before{
        content: none;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 1;
        background-image: url(${BgBenefits});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        z-index: -1;
    }
    @media (min-width: 1024px) {
        &::before{
            content: ' ';
            background-size: 30%;
        }  
    }
`
export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100vw;
`
export const RectangleImg = styled.img` 
    width: 8%;
    @media (min-width: 800px){
        width: 5%;
    }
    @media (min-width: 1600px){
        width: 3%;
    }
`
export const Title = styled.h1`
    font-weight: bold;
    margin: 20px 5px 0 0;
`
export const WrappCircle = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 1024px) {
        margin: 50px 0;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    @media (min-width: 1600px) {
        justify-content: space-between;
    }
`