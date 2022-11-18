import Rectangle from "../../assets/images/Prostokąt20.png"
import pic1 from "../../assets/images/1.png"
import pic2 from "../../assets/images/feature-wheels_720x.png"
import pic3 from "../../assets/images/fotka.png"
import Square from "./square/Square"
import { Header, Wrapp, RectangleImg, Title, WrappGridLayout } from "./AboutUs.style"

const AboutUs = () =>{
    return (
        <Wrapp id="about">
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
        </Wrapp>
    )
}

export default AboutUs