import { CircleBorder, Description, Pic, Title, Wrapp } from "./Circle.style"

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