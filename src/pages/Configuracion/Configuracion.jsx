import { useTheme } from '../../components/Theme/ThemeContext';
import './Configuracion.css';

function Configuracion() {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <div className="configuracion-container">
            <div className="configuracion-card">
                <h2 className="configuracion-title">Configuración</h2>
                
                <div className="configuracion-section">
                    <h3>Apariencia</h3>
                    <div className="theme-toggle-container">
                        <span className="theme-label">
                            <i className="bi bi-sun-fill"></i> Tema Claro
                        </span>
                        
                        <label className="switch">
                            <input 
                                type="checkbox" 
                                checked={darkMode} 
                                onChange={toggleTheme} 
                            />
                            <span className="slider round"></span>
                        </label>
                        
                        <span className="theme-label">
                            <i className="bi bi-moon-fill"></i> Tema Oscuro
                        </span>
                    </div>
                </div>
                
                <div className="configuracion-section">
                    <h3>Información</h3>
                    <p>Versión de la aplicación: 1.0.0</p>
                    <p>Desarrollado por: Salumeria Cumana</p>
                </div>
            </div>
        </div>
    );
}

export default Configuracion;