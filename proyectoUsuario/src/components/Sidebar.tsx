import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Boton from "./Boton";

function Sidebar() {
    const [selectedButtonId, setSelectedButtonId] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleButtonSelect = useCallback((id: string) => {
        setSelectedButtonId(id);
        if (id === "settings") {
            navigate("/settings");
        }
        if(id == "general"){
            navigate("/")
        }
    }, [navigate]);

    return (
        <div className="flex flex-col">
            <div className="mt-10 mr-10 ml-10">
                <div className="flex flex-row">
                    <img src="persona.png" className="h-[39px] w-[39px]" alt="Usuario" />
                    <h2 className="mt-1 ml-3 text-[20px]">Nombre</h2>
                </div>
                
                <div className="mt-15 pr-0 gap-1 flex flex-col">
                    <Boton id="general" iconSrcDefault="casaSin.png" iconSrcActive="casaCon.png" label="General" onSelect={handleButtonSelect} isSelected={selectedButtonId === "general"} />
                    <Boton id="settings" iconSrcDefault="ChartPieSlice.png" iconSrcActive="ChartPieSlice.png"  label="Settings"  onSelect={handleButtonSelect}  isSelected={selectedButtonId === "settings"}  />
                    <Boton id="personas" iconSrcDefault="personasSin.png" iconSrcActive="personasSin.png"  label="Personas"  onSelect={handleButtonSelect}  isSelected={selectedButtonId === "personas"}   />
                    <Boton id="billing" iconSrcDefault="billeteraSin.png" iconSrcActive="billeteraCon.png"  label="Billing"   onSelect={handleButtonSelect}  isSelected={selectedButtonId === "billing"}  />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;