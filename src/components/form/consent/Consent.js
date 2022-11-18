import styled from "styled-components";
import { useRef, useState } from "react";

const Wrapper = styled.div `
    display: flex;
` 
const Label = styled.label `
  margin: 10px 0;
  border: 1px solid #000;
  padding: 10px;
  background-color: #f1f1f7;
  border-radius: 5px;
  width: 84%;
`
const Input = styled.input `
  display: none;
`
const Checkbox = styled.label `
    position: relative;
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    border-radius: 3px;
    margin: 10px 5px;
    
    ::after{
        content: " ";
        display: ${({isChecked}) => isChecked? "block" : "none"};
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: #dd2f2f;
        border-radius: 2px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`
const Consent = ({name, label}) => {
    const consentRef = useRef(null);
    const [isChecked, setIsChecked] = useState('')  
    const handleSetIsChecked = (e) =>{
        setIsChecked(prev => prev = e.target.checked)
    }
    return (
      <Wrapper>
        <Input ref={consentRef} onChange={handleSetIsChecked} id={name} name="name" type="checkbox" /> 
        <Checkbox isChecked={isChecked} htmlFor={name}/>
        <Label htmlFor={name}>{label}</Label>
      </Wrapper>
    );
  };

export default Consent
