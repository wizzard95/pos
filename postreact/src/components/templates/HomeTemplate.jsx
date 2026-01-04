import styled from "styled-components";
import { useAuthStore } from "../../store/AuthStore";
import { UserAuth } from "../../context/AuthContent";


export function HomeTemplate(){
    const {cerrarSesion} = useAuthStore();

    const {user} = UserAuth()

// se rescatan datos desde tu sesion de google
    return(
    <Container>
        <span>Home Template</span>
        <button onClick={cerrarSesion}>Cerrar</button>
{/*         <span>{user.id}</span>
        <span>{user.user_metadata.avatar_url}</span>
       <img src={user.user_metadata.avatar_url} /> */}
    </Container>)
}
const Container = styled.div`
    height: 100vh;
`;