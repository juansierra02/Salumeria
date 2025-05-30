import { useEffect, useState } from 'react'
import { useAuthContext } from '../Auth/Auth'
import { useNavigate } from 'react-router-dom'
import './Logout.css'

function Logout() {
    const { logout } = useAuthContext()
    const navigate = useNavigate()
    const [isLoggingOut] = useState(true)

    useEffect(() => {
        if (isLoggingOut) {
            // Pequeño retraso para mostrar el mensaje
            const timer = setTimeout(() => {
                logout()
                navigate('/')
            }, 1500)

            return () => clearTimeout(timer)
        }
    }, [isLoggingOut, logout, navigate])

    return (
        <div className="logout-container">
            <div className="logout-card">
                <div className="logout-icon">
                    <i className="bi bi-box-arrow-right"></i>
                </div>
                <h2>Cerrando sesión...</h2>
                <p>Gracias por usar Salumeria Cumana</p>
                <div className="logout-spinner"></div>
            </div>
        </div>
    )
}

export default Logout
