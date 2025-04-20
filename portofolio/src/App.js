import styled, { ThemeProvider } from "styled-components";
import {darkTheme, darktheme} from "./utils/Themes";
import Navbar from "./component/Navbar";
import { BrowserRouter, Router } from "react-router-dom";
import Hero from "./component/sections/Hero";
import Skills from "./component/sections/Skills";
import Experience from "./component/sections/Experience";
import Education from "./component/sections/Education";
import Projects from "./component/sections/Projects";
import Contact from "./component/sections/Contact";
import Footer from "./component/sections/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}> 
      <BrowserRouter>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            {/* <Experience /> */}
          </Wrapper>
          <Projects />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
