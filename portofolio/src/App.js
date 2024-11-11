import styled, { ThemeProvider } from "styled-components";
import {darkTheme, darktheme} from "./utils/Themes";
import Navbar from "./component/Navbar";
import { BrowserRouter, Router } from "react-router-dom";

const Body = styled.div`
  background-color: ${({theme}) => theme.bg};
  width: 100%;
  height: 90vh;
  overflow-x: hidden;
  position: relative;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}> 
      <BrowserRouter>
        <Navbar />
        <Body />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
