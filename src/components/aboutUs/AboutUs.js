import styled from "styled-components"
import Rectangle from "../../assets/images/Prostokąt20.png"
import pic1 from "../../assets/images/1.png"
import pic2 from "../../assets/images/feature-wheels_720x.png"
import pic3 from "../../assets/images/fotka.png"
import Square from "./square/Square"

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100vw;
`
const RectangleImg = styled.img` 
    width: 8%;
`
const Title = styled.h1`
    font-weight: bold;
    margin: 20px 5px 0 0;
`
const WrappGridLayout = styled.article` 
    width: 100vw;
    overflow: hidden;
`

const AboutUs = () =>{
    return (
        <>
            <Header>
                <RectangleImg src={Rectangle}/>
                <Title> O NAS</Title>
            </Header>
            <WrappGridLayout>
                <Square photo={pic1} alt="pic1"/>
                <Square photo={null} alt={null}
                        text="Prezentujemy szeroką ofertę skrzyń kanadyjskiej - sprawdzonego producenta obecnego na rynku skrzyń transportowych od prawie 40 lat."/>
                <Square photo={pic2} alt="pic2"/>
                <Square photo={null} alt={null}
                        text="Jesteśmy specjalistami w branży skrzyń transportowych. Zajmujemy się sprzedażą skrzyń tylko od rzetelnych producentów"/>
                <Square photo={pic3} alt="pic3"/>
                <Square photo={null} alt={null}
                        text="Znajdź skrzynię dopasowaną do Twoich potrzeb. Oferta obejmuje rozwiązania dla sprzetów: militarnych, medycznych, sportowych, fotograficznych i profesjonalnych urządzeń elektronicznych. Skrzynie odstępne w szerokiej palecie kolorystycznej - do 10 kolorów."/>
            </WrappGridLayout>
        </>
    )
}

export default AboutUs