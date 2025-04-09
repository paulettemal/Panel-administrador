import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Boton from "./Boton";

function Sidebar() {
    const [selectedButtonId, setSelectedButtonId] = useState<string | null>(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        if (path === "/settings") {
            setSelectedButtonId("settings");
        } else if (path === "/billing") {
            setSelectedButtonId("billing");
        } else if (path === "/") {
            setSelectedButtonId("general");
        }
    }, [location.pathname]);

    const handleButtonSelect = useCallback((id: string) => {
        if (id === "settings") {
            navigate("/settings");
        } else if (id === "general") {
            navigate("/");
        } else if (id === "billing") {
            navigate("/billing");
        }
    }, [navigate]);

    return (
        <div className="flex overflow-y-auto h-full flex-col bg-[#F1F1F1]">
            <div className="mt-10 mr-10 ml-10">
                <div className="flex flex-row">
                    <img src="persona.png" className="h-[39px] w-[39px]" alt="Usuario" />
                    <h2 className="mt-1 ml-3 text-[20px]">Nombre</h2>
                </div>
                
                <div className="mt-15 pr-0 gap-1 flex flex-col">
                    <Boton id="general" iconSrcDefault="casaSin.png"  iconSrcActive="casaCon.png" label="General" onSelect={handleButtonSelect} isSelected={selectedButtonId === "general"} />
                    <Boton id="settings" iconSrcDefault="ChartPieSlice.png" iconSrcActive="ChartPieSlice.png"   label="Settings"   onSelect={handleButtonSelect}   isSelected={selectedButtonId === "settings"}   />
                    <Boton id="personas" iconSrcDefault="personasSin.png" iconSrcActive="personasSin.png"  label="Personas"  onSelect={handleButtonSelect}  isSelected={selectedButtonId === "personas"}   />
                    <Boton id="billing" iconSrcDefault="billeteraSin.png" iconSrcActive="billeteraCon.png"  label="Billing"   onSelect={handleButtonSelect}  isSelected={selectedButtonId === "billing"}  />
                    <div className="flex flex-row pt-100">
                        <img className="pl-4 pr-2" src="salir.png">
                        </img>
                        <h3 className="">Logout</h3>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Sidebar;