import axios from 'axios';
import { Usuario } from '../interfaces/Usuario';

export const url = "http://localhost:3000/usuarios";

export const extraerUsuarios = async () => {
    try {
        const respuesta = await axios.get<Usuario[]>(url);
        console.log(respuesta.data);
        return respuesta.data;
    } catch (error: any) {
        console.error("Error:", error.message);
        return null;
    }
};
