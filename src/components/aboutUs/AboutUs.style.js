import styled from "styled-components"

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100vw;
    margin-bottom: 10px;
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
export const WrappGridLayout = styled.article` 
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin-top: 25px;
   
    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
    @media (min-width: 1600px) {
        width: 80vw;
    }
`
export const Wrapp = styled.section` 
    display: flex;
    flex-direction: column;
    align-items: center;
`