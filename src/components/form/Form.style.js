import styled from "styled-components"
import bgForm from "../../assets/images/bgform.png"

export const Wrapp = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${bgForm});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: -550px 0px;
    padding: 50px 0;

    @media (min-width: 600px) {
        background-position: -400px 0px;
    }
    @media (min-width: 960px) {
        background-position: -200px 0px;
    }
    @media (min-width: 1100px) {
        background-position: 0px 0px;
    }
`
export const Form = styled.form`  
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    padding: 50px 0;

    @media (min-width: 667px) {
        flex-direction: row;
        flex-wrap: wrap;
        width: 73vw;
        justify-content: space-between;
    }
    @media (min-width: 1600px) {
        width: 50vw;
        justify-content: space-between;
    }
    @media (min-width: 1920px) {
        width: 40vw;
        justify-content: space-between;
        padding: 80px 0;
    }
`
export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100vw;
`
export const Rectangle = styled.div`
    height: 30px;
    width: 5px;
    background-color: red;
    margin-right: 25px;
`
export const Title = styled.h1`
    font-weight: bold;
    margin: 20px 5px 0 0;
`