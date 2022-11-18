import styled from 'styled-components'

export const CircleBorder = styled.div`    
    width: 250px;
    height: 250px;
    border-radius: 100%;
    border: 5px solid #efefef;
    padding: 10px;
    margin: 10px;
`
export const Pic = styled.img` 
    width: 100%;
`
export const Wrapp = styled.div `  
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1024px) {
        width: 40%;
    }
`
export const Title = styled.h2 ` 
    margin-top: 0px;
    margin-bottom: 0px;
`
export const Description = styled.p` 
    text-align: center;
    @media (min-width: 1024px) {
        width: 70%;
    }
    @media (min-width: 1600px) {
        width: 45%;
    }
`