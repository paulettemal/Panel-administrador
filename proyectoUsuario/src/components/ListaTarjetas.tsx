import { useState, useEffect } from "react";
import { Usuario } from "../interfaces/Usuario";
import { extraerUsuarios, actualizarAdministrador } from "../services/Servicio";
import Tarjeta from "./Tarjeta";

function ListaTarjetas() {
    const [usuario, setUsuario] = useState<Usuario[] | null>(null);
    const [cargando, setCargando] = useState<boolean>(true);
    const [administradores, setAdministradores] = useState<Usuario[] | null>(null);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedUserToAddAdmin, setSelectedUserToAddAdmin] = useState<string | null>(null);

    useEffect(() => {
        const traerData = async () => {
        setCargando(true);
        try {
            const respuesta = await extraerUsuarios();
            if (respuesta) {
            setUsuario(respuesta);
            const admins = respuesta.filter((user) => user.administrador === "1");
            setAdministradores(admins);
            } else {
            console.log("no hay datos");
            setUsuario([]);
            setAdministradores([]);
            }
        } catch (error: any) {
            console.log(error);
            setUsuario([]);
            setAdministradores([]);
        } finally {
            setCargando(false);
        }
        };
        traerData();
    }, []);

    const handleAddAdminClick = () => {
        setModalVisible(true);
    };

    const handleSelectUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedUserToAddAdmin(event.target.value);
    };

    const handleConfirmAddAdmin = async () => {
        if (selectedUserToAddAdmin) {
        const resultadoActualizacion = await actualizarAdministrador(selectedUserToAddAdmin, true);
        if (resultadoActualizacion) {
            console.log("Backend actualizado con éxito:", resultadoActualizacion);
            const updatedUsuarios = usuario?.map((user) => user.id === selectedUserToAddAdmin ? { ...user, administrador: "1" } : user);
            setAdministradores(updatedUsuarios?.filter((user) => user.administrador === "1") || []);
            setModalVisible(false);
            setSelectedUserToAddAdmin(null);
        }
        }
    };
    const handleCloseModal = () => {
        setModalVisible(false);
        setSelectedUserToAddAdmin(null);
    };
    if (cargando) {
        return <div>Cargando</div>;
    }
    return (
        <div className="flex flex-row gap-4">
        {administradores?.map((user) => (
            <div key={user.id}>
            <Tarjeta nombre={user.user.name} cargo={user.position} imagen={user.user.profileImage} />
            </div>
        ))}
        {!administradores?.length && !cargando && (
            <div>No hay administradores para mostrar.</div>
        )}
        <button className="border-2 border-blue-500 rounded-md p-4 flex flex-col items-center justify-center w-[174px] h-[220px] cursor-pointer" onClick={handleAddAdminClick} >
            <span className="text-[30px] text-blue-500">+</span>
            <span className="text-sm text-blue-500">Add admin</span>
        </button>

        {modalVisible && (
            <div className="fixed top-0 left-0 w-full h-full bg-translucent-gray flex items-center justify-center">
            <div className="bg-white rounded-md p-6">
                <h2 className="text-lg font-bold mb-4">Seleccionar usuario para agregar como administrador</h2>
                <div className="mb-4">
                <label htmlFor="userSelect" className="block text-gray-700 text-sm font-bold mb-2">Seleccionar usuario:</label>
                <select id="userSelect" onChange={handleSelectUser} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={selectedUserToAddAdmin || ""}>
                    <option value="">-- Seleccionar usuario --</option>
                    {usuario?.filter((user) => user.administrador === "0").map((user) => (
                        <option key={user.id} value={user.id}>{user.user.name}</option>))}
                </select>
                </div>
                <div className="flex justify-end gap-2">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"onClick={handleCloseModal}> Cancelar</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleConfirmAddAdmin} disabled={!selectedUserToAddAdmin} > Confirmar</button>
                </div>
            </div>
            </div>
        )}
        </div>
    );
}

export default ListaTarjetas;