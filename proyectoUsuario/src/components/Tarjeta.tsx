interface TarjetaProps{
    nombre: string;
    cargo: string;
    imagen: string
}
function Tarjeta({ nombre, cargo, imagen }: TarjetaProps) {
    return (
        <div className="h-[220px] w-[174px] bg-[#F9F9F9] rounded-2xl flex flex-col items-center justify-centerrounded-md p-4">
            <img src={imagen} alt={nombre} className="w-24 h-24 object-cover rounded-full mb-2" />
            <h2 className="text-xl font-semibold text-gray-800 text-center">{nombre}</h2>
            <h3 className="text-gray-600 text-sm text-center">{cargo}</h3>
        </div>
    );
}

export default Tarjeta;