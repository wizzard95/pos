import styled from "styled-components";
import { Title, InputText2, Btnsave, Linea, Footer, useAuthStore } from "../../index";
import {v} from "../../styles/variables";
import { Device } from "../../styles/breakpoints";


export function LoginTemplate(){

  const {loginGoogle} = useAuthStore()
  return ( 
      <Container>
         <div className="card">
         <ContentLogo>
            <img src={v.logo} />
            <span>Mi Negocio</span>
         </ContentLogo>
            <Title $paddingbottom="50px">Ingresar</Title>
            <form>
              <InputText2>
              <input className="form__field"
              placeholder="email" type="text"/>
              </InputText2>
               <InputText2>
              <input className="form__field"
              placeholder="contraseña" type="password"/>
              </InputText2>
              
              <Btnsave
                titulo="INGRESAR"
                bgcolor="#1CB0F6"
                color="255,255,255"
                width="100%"
              />
            </form>
          <Linea>
              <span>0</span>
          </Linea>
              <Btnsave
                titulo="Google"
                bgcolor="#fff"
                icono={<v.iconogoogle/>}
                funcion={loginGoogle}
              />

         </div>
         <Footer/>

</Container>);

}
const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    flex-direction: column;
    color:${({theme}) => theme.text};
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 400px;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        @media ${Device.tablet} {
          width: 400px;
        }
    }
`;
const ContentLogo = styled.section`
  display:flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  span{
    font-weight: 700;
  }
  img{
    width: 10%;
  }
`;

