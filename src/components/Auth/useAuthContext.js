
import { useContext } from 'react'
import { AuthContext } from './AuthContext'

export function useAuthContext() {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuthContext debe ser usado dentro de un AuthContextProvider')
    }

    return context
}