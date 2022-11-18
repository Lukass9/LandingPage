import { Photo, Text, WrappSquare } from "./Square.style"

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