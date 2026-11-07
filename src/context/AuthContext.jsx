// Imports
import { createContext, useState } from "react";

// Context
export const AuthContext = createContext()

// A boolean indicating the user’s login status.
// A function to simulate logging in (sets isAuthenticated to true).
const login = () => {
    return setIsAuthenticated(true)
}

// A function to simulate logging out (sets isAuthenticated to false).
const logout = () => {
    return setIsAuthenticated(false)
}

// Provider
export default function AuthProvider({ children }) {
    // Authentication state
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
