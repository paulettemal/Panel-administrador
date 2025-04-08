import { useState, useEffect } from "react";
import { Usuario } from "../interfaces/Usuario";
import { extraerUsuarios } from "../services/Servicio";
import Tarjeta from "./Tarjeta";

function ListaTarjetas() {
    const [usuario, setUsuario] = useState<Usuario[] | null>(null);
    const [cargando, setCargando] = useState<boolean>(true);

    useEffect(() => {
        const traerData = async () => {
        setCargando(true);
        try {
            const respuesta = await extraerUsuarios();
            if (respuesta) {
            setUsuario(respuesta);
            console.log(respuesta);
            } else {
            console.log("no hay datos");
            }
        } catch (error: any) {
            console.log(error);
        } finally {
            setCargando(false);
        }
        };
        traerData();
    }, []);

    if(cargando){
        return <div>Cargando</div>;
    }

    return (
        <div className="flex flex-row gap-4">
        {usuario?.slice(0, 2).map((user) => (
            <div key={user.id}>
            <Tarjeta nombre={user.user.name} cargo={user.position} imagen={user.user.profileImage} />
            </div>
        ))}
        </div>
    );
}

export default ListaTarjetas;