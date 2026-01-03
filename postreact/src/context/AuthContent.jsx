import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";

const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [user, setUser] = useState([]);
    useEffect(() =>{
        const {data} = supabase.auth.onAuthStateChange
        (async (event, session)=>{
            console.log("event", event);
            console.log("session", session);
        });
        return ()=>{
            // estara escuchando en todo momento al back
            data.subscription;
        }

    }, []);

    return (
        <AuthContext.Provider value={{user}}>
            {
                children
            }
        </AuthContext.Provider>
    )
}
export const UserAuth = () =>{
    return useContext(AuthContext)
}
