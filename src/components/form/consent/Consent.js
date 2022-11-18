import React, { useRef } from "react";
import { Checkbox, Input, Label, Wrapper } from "./Consent.style";

const Consent = React.forwardRef(({name, label, value, handleChange, isChecked, ...props},ref) => {
    const consentRef = useRef(null);
    return (
      <Wrapper>
        {/* <Input {...props} ref={ref} ref={consentRef} value={value} onChange={handleChange} id={name} name={name} type="checkbox" />  */}
        <Input {...props} ref={ref} value={value} onChange={handleChange} id={name} name={name} type="checkbox" /> 
        <Checkbox isChecked={isChecked} htmlFor={name}/>
        <Label htmlFor={name}>{label}</Label>
      </Wrapper>
    );
  });

export default Consent
