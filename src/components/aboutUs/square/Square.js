import styled from "styled-components"

const WrappSquare = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    border: 2px solid #d6dce1;
    width: 100%;
    height: 280px;

    &:first-child{
        margin-top: 25px;
    }
`
const Photo = styled.img` 
    width: 100%;
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