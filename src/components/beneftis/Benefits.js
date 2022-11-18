import styled from "styled-components"
import BgBenefits from "../../assets/images/walizka.png"
import Rectangle from "../../assets/images/Prostokąt20.png"
import Circle from "./circles/Circle"
import online_shopping_delivery from '../../assets/images/online-shopping-delivery.png'
import order_delivery_online from '../../assets/images/order-delivery-online.png'
import closeup_delivery from '../../assets/images/closeup-delivery.png'
import elegant from '../../assets/images/elegant.png'


const Wrapp = styled.article` 
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    &::before{
        content: none;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.6;
        background-image: url(${BgBenefits});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        z-index: -1;
    }
`
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
const Benefits = () =>{
    return(
        <Wrapp>
            <Header>
                <Title>KORZYŚCI</Title>
                <RectangleImg src={Rectangle}/>
            </Header>
            <Circle 
                pic={online_shopping_delivery} 
                title="Dożywotnia gwarancja"
                description="Wybierając nasze skrzynie transportowe otrzymujesz dożywotnią gwarancję." />
            <Circle 
                pic={order_delivery_online} 
                title="Sprawna dostawa"
                description="Zapewniamy sprawną dostawę na terenie całej Polski." />
            <Circle 
                pic={closeup_delivery} 
                title="Możliwość zwrotu"
                description="Możliwość wymiany lub zwrot kosztów." />
            <Circle 
                pic={elegant} 
                title="Różnorodna oferta"
                description="Proponujemy wybór spośród wielu wymiarów, modeli i kolorów."/>
                
        </Wrapp>
    )
}

export default Benefits