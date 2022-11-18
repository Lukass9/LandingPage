import styled from "styled-components";
import { GlobalStyle } from "./assets/styles/GlobalStyles";
import AboutUs from "./components/aboutUs/AboutUs";
import Benefits from "./components/beneftis/Benefits";
import ContactForm from "./components/form/Form";
import Nav from "./components/nav/Nav";

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Nav/>
      <Benefits/>
      <AboutUs/>
      <ContactForm/>
    </>
  );
}

export default App;
