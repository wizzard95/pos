import styled from "styled-components"
import { Title, InputText2 } from "../../index"

export function LoginTemplate(){
  return ( <Container>
   <section className="contentCard">
         <div className="card">
            <Title>Ingresar</Title>
            <form>
              <InputText2>
              <input className="form__field"/>
              </InputText2>
            </form>
         
         </div>

  </section>
</Container>);

}
const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;
