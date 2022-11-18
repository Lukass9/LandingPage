import styled from "styled-components";
const Wrapper = styled.div `
    display: flex;
    flex-direction: column;

    :nth-child(5) {
      width: 100%;
      textarea{
        width: 100%;
        max-width: 80vw;
      }
    }
    @media (min-width: 1600px) {
      margin: 1.5% 0;
  }
` 
const Label = styled.label `
  margin: 10px 0; 
`
const Input = styled.input `
  border: 1px solid #000;
  border-radius: 5px;
  padding: 5px;
  min-width: 25vw;
  max-width: 50vw; // desktop max 25vw
  height: ${({isTextArea})=> isTextArea? '100px' : "auto"};

  &::placeholder{
    color: #c9c9c9;
  }
  @media (min-width: 767px) {
    min-width: 35vw;
    padding: 10px;
  }
  @media (min-width: 1600px) {
    min-width: 24vw;
    padding: 15px;
  }
`
const FormField = ({name, label, placeholder, isTextArea}) => {
    return (
      <Wrapper>
        <Label htmlFor={name}>{label}</Label>
          {isTextArea?
            <Input as="textarea" id={name} name={name} type="textarea" placeholder={placeholder} isTextArea={isTextArea}/> :
            <Input name={name} type="text" placeholder={placeholder} />
          } 
      </Wrapper>
    );
  };

export default FormField
