import React from "react";
import { Input, Label, Wrapper, Error } from "./FormField.style";

const FormField = React.forwardRef(({ errors, name, label, placeholder, isTextArea, value, handleChange, ...props}, ref) => {
    return (
      <Wrapper>
        <Label htmlFor={name}>{label}</Label>
          {isTextArea?
            <Input {...props} ref={ref} onChange={handleChange} value={value} as="textarea" id={name} name={name} type="textarea" placeholder={placeholder} isTextArea={isTextArea}/> :
            <Input {...props} ref={ref} onChange={handleChange} value={value} name={name} type="text" placeholder={placeholder} />
          } 
          {errors ? <Error> Nieprawidłowy {label} </Error> : null}
      </Wrapper>
    );
  });

export default FormField
