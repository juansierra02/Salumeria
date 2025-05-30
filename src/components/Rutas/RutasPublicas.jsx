import { Outlet } from 'react-router-dom'
import { useAuthContext } from '../Auth/Auth'

function RutasPublicas() {
    const { isAuthenticated } = useAuthContext()

    if (!isAuthenticated) {
        return <Outlet />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default RutasPublicas
