import React from "react";
import { Input, Label, Wrapper, Error } from "./FormField.style";

const FormField = React.forwardRef(({ errors, name, label, placeholder, isTextArea, value, handleChange, ...props}, ref) => {
    let isError = false;
    if(errors.name && name==="name" || errors.company && name==="company"|| errors.email && name==="email") isError = true;
    return (
      <Wrapper>
        <Label htmlFor={name}>{label}</Label>
          {isTextArea?
            <Input {...props} ref={ref} onChange={handleChange} value={value} as="textarea" id={name} name={name} type="textarea" placeholder={placeholder} isTextArea={isTextArea}/> :
            <Input {...props} isError={isError} ref={ref} onChange={handleChange} value={value} name={name} type="text" placeholder={placeholder} />
          } 
          {errors.name && name==="name"? <Error> Pole imię i nazwisko jest wymagane</Error> : null}
          {errors.company && name==="company"? <Error> Pole firma jest wymagane </Error> : null}
          {errors.email && name==="email"? <Error> Nieprawidłowy adres email</Error> : null}          
      </Wrapper>
    );
  });

export default FormField
