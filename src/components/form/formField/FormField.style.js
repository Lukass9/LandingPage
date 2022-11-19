import styled from "styled-components";
export const Wrapper = styled.div `
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 2.5% 0;
    
    :nth-child(5) {
      width: 100%;
      textarea{
        width: 100%;
        max-width: 80vw;
      }
    }
    @media (min-width: 1600px) {
      margin: 2.5% 0;
    }
    ` 
export const Label = styled.label `
  margin: 10px 0; 
  `
export const Error = styled.label` 
  color: red;
  position: absolute;
  bottom: -20px;
  font-size: 11px;
  `
export const Input = styled.input `
  border: 1px solid #000;
  border-radius: 5px;
  padding: 5px;
  min-width: 25vw;
  max-width: 50vw; // desktop max 25vw
  height: ${({isTextArea})=> isTextArea? '100px' : "auto"};
  border: 1px solid ${({isError})=> isError? "red" : "black"} ;

  &::placeholder{
    color: #c9c9c9;
  }
  @media (min-width: 668px) {
    min-width: 35vw;
    padding: 10px;
  }
  @media (min-width: 1600px) {
    min-width: 24vw;
    padding: 15px;
  }
  @media (min-width: 1920px) {
    min-width: 19vw;
    padding: 15px;
  }
`
