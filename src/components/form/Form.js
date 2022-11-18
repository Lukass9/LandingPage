import { useState } from "react"
import { useForm } from "react-hook-form";
import FormField from "./formField/FormField"
import Consent from "./consent/Consent"
import Button from "./button/button"
import { Form, Header, Rectangle, Title, Wrapp } from "./Form.style"

const ContactForm = () =>{
    const initialState = {
        name: ' ',
        company: ' ',
        email: ' ',
        phone: ' ',
        message:' ',
        consent: true
    }
    const [formState, setFormState] = useState(initialState) 
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({mode: "onChange"});
      const onSubmit = ({name, company, email, phone,  message, consent}) =>  window.alert(name + " " + company + " " + email + " " + phone + " " + message + " " + consent );
    // const handleSubmit = (e) =>{
    //     alert(formState.name + " " + " " + formState.company + " " + " " +
    //     formState.email + " " + " " + formState.phone + " " + " " + formState.message
    //     + " " + " " + formState.consent)
    //     e.preventDefault();
    // }
    const handleChange = (e) =>{
        console.log(e)
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        });
      }
    const handleChangeConsent = (e) =>{
        setFormState({
            ...formState,
            [e.target.name] : e.target.checked
        });
        console.log(formState)
    }
    return(
        <Wrapp id="contact">
            <Header>
                <Rectangle/>
                <Title>Formularz Kontaktowy </Title>
            </Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormField errors={errors} handleChange={handleChange} value={formState.name} name="name" label="Imię i nazwisko *" placeholder="Wpisz imię i nazwisko" {...register('name', { required: true, minLength: 4})}/>
                <FormField errors={errors} handleChange={handleChange} value={formState.company} name="company" label="Nazwa firmy *" placeholder="Wpisz nazwę firmy" {...register('company', { required: true, minLength: 4})}/>
                <FormField errors={errors} handleChange={handleChange} value={formState.email} name="email" label="E-mail *" placeholder="Wpisz e-mail" {...register('email', { required: true, pattern:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}/>
                <FormField errors={errors} handleChange={handleChange} value={formState.phone} name="phone" label="Telefon" placeholder="Wpisz numer" {...register('phone', { required: false})} />
                <FormField errors={errors} handleChange={handleChange} value={formState.message} name="message" label="Wiadomość *" placeholder="Wpisz treść wiadomości" isTextArea={true} {...register('message', { required: true})}/>
                <Consent isChecked={formState.consent} handleChange={handleChangeConsent} value={formState.consent} name="consent" label="* oświadczam, że zapoznałem się i akceptuje Regulamin. Wyrażam zgodę na przetwarzanie mich danych osobowych przez N-Cases, w celu świadczenia usług w ramach serwisu oraz kontaktu za pomocą urządzeń końcowych telekomunikacyjnych związanego ze zgłoszeniem." {...register('consent', { required: true})}/>
                <Button/>
            </Form>
        </Wrapp>
    )
}

export default ContactForm