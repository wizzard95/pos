import styled, {ThemeProvider} from "styled-components";
import {GlobalStyles, MyRoutes, Sidebar, useThemeStore} from './index.js';
import { Device } from "./styles/breakpoints.jsx";
import { useState } from "react";




function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const {themeStyle} = useThemeStore();
 

  return (
  <ThemeProvider theme={themeStyle}>
   <Container>
    <GlobalStyles />
    <section className="contentSidebar">
      <Sidebar state={sidebarOpen} setState={
        () => setSidebarOpen(!sidebarOpen)}/>
    </section>
    <section className="contentMenuambur">menu hambur</section>
    <section className="contentRouters">
      <MyRoutes />
    </section>

   </Container>
   </ThemeProvider>
  );
}
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;

  .contentSidebar{
    display: none;
    background-color: rgba(78, 45, 78, 0.5);
  }
  .contentMenuambur{
    position: absolute;
    background-color: rgba(53, 219, 11, 0.5);
  }
  .contentRouters{
    display: flex;
    background-color: rgba(231, 13, 136, 0.5);
    grid-column: 1;
    width: 100%;

  }
  @media ${Device.tablet}{
    grid-template-columns: 88px 1fr;
    .contentSidebar{
      display: initial;
    }
    .contentMenuambur{
      display: none;
      /* background-color: rgba(53, 45, 78, 0.5); */
    }
    .contentRouters{
      grid-column: 2;
    }
  }
  `;
export default App
