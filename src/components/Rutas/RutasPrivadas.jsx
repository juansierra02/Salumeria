import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../Auth/Auth'


function RutasPrivadas() {
    const { isAuthenticated } = useAuthContext()

    if (!isAuthenticated) {
        return <Navigate to='/login' />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default RutasPrivadas
