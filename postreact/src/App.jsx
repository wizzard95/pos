import styled from "styled-components";
import {GlobalStyles} from './index.js';
import { Device } from "./styles/breakpoints.jsx";


function App() {
  return (
   <Container>
    <GlobalStyles />
    <section className="contentSidebar">sidebar</section>
    <section className="contentMenuambur">menu ambur</section>
    <section className="contentRouters">routers</section>

   </Container>
  );
}
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;

  .contentSidebar{
    display: none;
    background-color: rgba(78,45,78,0.5);
  }
  .contentMenuambur{
    position: absolute;
    background-color: rgba(23, 214, 134, 0.778);
  }
  .contentRouters{
    background-color: rgba(14, 36, 164, 0.826);
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
    }
    .contentRouters{
      grid-column: 2;
    }
  }
  `;
export default App
