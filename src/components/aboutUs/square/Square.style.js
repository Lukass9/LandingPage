import styled from "styled-components"
export const WrappSquare = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    border: 2px solid #d6dce1;
    height: 280px;

    @media (min-width: 768px) {
        width: 50%;
    }
    @media (min-width: 1600px) {
        width: 33.33%;
        height: 40vh;
    }
`
export const Photo = styled.img` 
    width: 100%;
    max-height: 100%;
    object-fit: cover;
`
export const Text = styled.p` 
    width: 91%;
`