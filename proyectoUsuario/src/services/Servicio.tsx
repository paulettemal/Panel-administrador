import axios from 'axios';
import { Usuario } from '../interfaces/Usuario';

export const url = "http://localhost:3000/usuarios";

export const extraerUsuarios = async () => {
    try {
        const respuesta = await axios.get<Usuario[]>(url);
        console.log(respuesta.data);
        return respuesta.data;
    } catch (error: any) {
        console.error("Error al extraer usuarios:", error.message);
        return null;
    }
};

export const actualizarAdministrador = async (usuarioId: string, esAdministrador: boolean): Promise<Usuario | null> => {
    try {
        const administradorValor = esAdministrador ? "1" : "0";
        const respuesta = await axios.patch<Usuario>(`${url}/${usuarioId}`, { administrador: administradorValor });
        console.log(`Estado de administrador actualizado para el usuario ${usuarioId}:`, respuesta.data);
        return respuesta.data;
    } catch (error: any) {
        console.error(`Error al actualizar el estado de administrador del usuario ${usuarioId}:`, error.message);
        return null;
    }
};