import styled from "styled-components"
import FormField from "./formField/FormField"
import bgForm from "../../assets/images/bgform.png"
import Consent from "./consent/Consent"

const Wrapp = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${bgForm});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: -200px 0px;

    @media (min-width: 600px) {
        background-position: -100px 0px;
    }
`
const Form = styled.form`   
    width: 50vw;
`
const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100vw;
`
const Rectangle = styled.div`
    height: 30px;
    width: 5px;
    background-color: red;
    margin-right: 25px;
`
const Title = styled.h1`
    font-weight: bold;
    margin: 20px 5px 0 0;
`

const ContactForm = () =>{
    return(
        <Wrapp>
            <Header>
                <Rectangle/>
                <Title>Formularz Kontaktowy </Title>
            </Header>
            <Form>
                <FormField name="name" label="Imię i nazwisko *" placeholder="Wpisz imię i nazwisko"/>
                <FormField name="company" label="Nazwa firmy *" placeholder="Wpisz nazwę firmy"/>
                <FormField name="email" label="E-mail *" placeholder="Wpisz e-mail"/>
                <FormField name="phone" label="Telefon" placeholder="Wpisz numer"/>
                <FormField name="message" label="Wiadomość *" placeholder="Wpisz treść wiadomości" isTextArea={true}/>
                <Consent name="consent" label="* oświadczam, że zapoznałem się i akceptuje Regulamin. Wyrażam zgodę na przetwarzanie mich danych osobowych przez N-Cases, w celu świadczenia usług w ramach serwisu oraz kontaktu za pomocą urządzeń końcowych telekomunikacyjnych związanego ze zgłoszeniem."/>
            </Form>
        </Wrapp>
    )
}

export default ContactForm