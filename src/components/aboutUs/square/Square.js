import styled from "styled-components"

const WrappSquare = styled.div`
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
const Photo = styled.img` 
    width: 100%;
    max-height: 100%;
    object-fit: cover;
`
const Text = styled.p` 
    width: 91%;
`
const Square = ({text, photo, alt}) =>{
    return (
        <WrappSquare>
            {photo? 
            <Photo src={photo} alt={alt}/> :
            <Text>{text}</Text>
            }
            
        </WrappSquare>
    )
}

export default Square