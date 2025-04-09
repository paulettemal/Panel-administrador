import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { extraerUsuarios } from "../services/Servicio";
import { Usuario } from "../interfaces/Usuario";
import Diseño from "../components/Diseño";

function Settings() {
    const [usuarios, setUsuarios] = useState<Usuario[] | null>(null);
    const [cargando, setCargando] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const traerData = async () => {
        setCargando(true);
        setError(null);
        try {
            const respuesta = await extraerUsuarios();
            if (respuesta) {
            setUsuarios(respuesta);
            console.log(respuesta);
            } else {
            console.log("no hay datos");
            setError("No se encontraron usuarios.");
            }
        } catch (error: any) {
            console.log(error);
            setError(`Error al extraer usuarios: ${error.message}`);
        } finally {
            setCargando(false);
        }
        };
        traerData();
    }, []);

    if (cargando) {
        return <div>Cargando usuarios...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="h-screen flex flex-row">
        <div className="w-[235px] bg-[#F1F1F1]">
            <Sidebar />
        </div>
        <div className="flex-1 p-4">
        <div className="flex flex-row justify-around pb-12 relative">
            <div className="absolute h-3/4 top-1/8 left-1/3 w-px bg-gray-200 transform -translate-x-1/2"></div>
                <div className="absolute h-3/4 top-1/8 right-1/3 w-px bg-gray-200 transform translate-x-1/2"></div>
                <div className="flex flex-col items-center">
                    <h3 className="font-bold text-5xl pt-12">{usuarios?.length}</h3>
                    <h4 className="text-sm text-gray-500">Peoples</h4>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="font-bold text-5xl pt-12">5</h3>
                    <h4 className="text-sm text-gray-500">Departments</h4>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="font-bold text-5xl pt-12">0</h3>
                    <h4 className="text-sm text-gray-500">Guests</h4>
                </div>
            </div>
            <div className="w-[1000] gap-2  flex mb-10">
                <Diseño></Diseño>
            </div>
            <div className="pl-5 pr-5">
            <h2 className="text-xl font-semibold mb-4">Lista de Usuarios</h2>
            {usuarios && usuarios.length > 0 ? (
            <table className="w-full border-collapse border-b border-gray-300">
                <thead className="border-b border-gray-300">
                <tr className="">
                    <th className="py-4 px-2 text-left text-[14px] text-[#7d7d7d]">User</th>
                    <th className="py-4 px-2 text-left text-[14px] text-[#7d7d7d]">Status</th>
                    <th className="py-4 px-2 text-left text-[14px] text-[#7d7d7d]">Phone number</th>
                    <th className="py-4 px-2 text-left text-[14px] text-[#7d7d7d]">Position</th>
                    <th className="py-4 px-2 text-left text-[14px] text-[#7d7d7d]">Departament</th>
                    <th className="py-4 px-2 text-left text-[14px] text-[#7d7d7d]">Activity</th>
                </tr>
                </thead>
                <tbody>
                {usuarios.map((usuarioData) => (
                    <tr key={usuarioData.id} className="h-12 border-b border-gray-300">
                    <td className="px-2">
                        <div className="flex items-center">
                        {usuarioData.user?.profileImage && (
                            <img src={usuarioData.user.profileImage} alt={usuarioData.user.name} className="w-8 h-8 rounded-full mr-2"/> )}
                        <span>{usuarioData.user?.name}</span>
                        </div>
                    </td>
                    <td className="px-2">{usuarioData.status}</td>
                    <td className="px-2">{usuarioData.phoneNumber}</td>
                    <td className="px-2">{usuarioData.position}</td>
                    <td className="px-2">{usuarioData.department}</td>
                    <td className="px-2">{usuarioData.activity}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            ) : (
            <p>No hay usuarios para mostrar.</p>
            )}
        </div>
        </div></div>
    );
}

export default Settings;