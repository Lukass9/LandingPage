import Rectangle from "../../assets/images/Prostokąt20.png"
import Circle from "./circles/Circle"
import online_shopping_delivery from '../../assets/images/online-shopping-delivery.png'
import order_delivery_online from '../../assets/images/order-delivery-online.png'
import closeup_delivery from '../../assets/images/closeup-delivery.png'
import elegant from '../../assets/images/elegant.png'
import { Header, RectangleImg, Title, Wrapp, WrappCircle } from "./Benefits.style"


const Benefits = () =>{
    return(
        <Wrapp id="benefits">
            <Header>
                <Title>KORZYŚCI</Title>
                <RectangleImg src={Rectangle}/>
            </Header>
            <WrappCircle>
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
            </WrappCircle>
        </Wrapp>
    )
}

export default Benefits