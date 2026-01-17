import { supabase } from "../index";
import Swal from "sweetalert2";

export async function InsertarCategorias(p, file){
    const {error, data} = await supabase.rpc
    ("insertarcategorias",p)
    if(error){
        Swal.fire({
            icon: "error",
            title:"Oops...",
            text: error.message,
        });
    }
    const nuevo_id = data;
}