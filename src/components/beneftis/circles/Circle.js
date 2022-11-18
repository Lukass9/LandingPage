import styled from 'styled-components'

const CircleBorder = styled.div`    
    width: 250px;
    height: 250px;
    border-radius: 100%;
    border: 5px solid #efefef;
    padding: 10px;
    margin: 10px;
`
const Pic = styled.img` 
    width: 100%;
`
const Wrapp = styled.div `  
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1024px) {
        width: 40%;
    }
`
const Title = styled.h2 ` 
    margin-top: 0px;
    margin-bottom: 0px;
`
const Description = styled.p` 
    text-align: center;
    @media (min-width: 1024px) {
        width: 70%;
    }
    @media (min-width: 1600px) {
        width: 45%;
    }
`
const Circle = ({pic,title,description}) => {
    return (
        <Wrapp>
            <CircleBorder>
                <Pic src={pic} alt="zdj1"/>
            </CircleBorder>
            <Title> {title} </Title>
            <Description> {description} </Description>
        </Wrapp>
    )
}

export default Circle