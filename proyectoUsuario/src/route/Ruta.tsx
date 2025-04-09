import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Settings from '../pages/Settings';
import App from '../App';
import Billing from '../pages/Billing';
function Ruta() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/billing" element={<Billing></Billing>} />
                    <Route path="*" element={<div>Página no encontrada</div>} />
                </Routes>
            </Router>
        </>
    );
}

export default Ruta;