import styled from "styled-components";
const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
` 
const Label = styled.label `
  margin: 10px 0; 
`
const Input = styled.input `
  border: 1px solid #000;
  border-radius: 5px;
  padding: 5px;
  max-width: 50vw; // desktop max 25vw
  height: ${({isTextArea})=> isTextArea? '100px' : "auto"};

  &::placeholder{
    color: #c9c9c9;
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
