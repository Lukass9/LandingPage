import styled from "styled-components"

export const Wrapp = styled.footer`
    display: flex;
    position: relative;
    justify-content: flex-end;
    align-items: center;
    /* width: 100vw; */
    height: 45px;
    background-color: darkgray;
    padding: 10px 0;
    @media (min-width: 500px){
        justify-content: center;
    }
`
export const FooterText = styled.footer` 
    color: whitesmoke;
`
export const Img = styled.img` 
    filter: invert(100%);
    margin: 0 10px;
`
export const WrappImg = styled.div` 
    display: flex;
    justify-content: center;
    align-self: flex-end;
    margin-right: 10%;

    @media (min-width: 500px){
        position: absolute;
        margin-right: 0;
        right: 5%;
    }
    @media (min-width: 1024px){
        position: absolute;
        margin-right: 0;
        right: 10%;
    }
`