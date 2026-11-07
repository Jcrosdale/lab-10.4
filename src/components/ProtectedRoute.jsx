// Import
import { Navigate } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Protected( {children} ) {

    const { isAuthenticated } = useContext(AuthContext)
    
    return isAuthenticated ? children : <Navigate to="/login" replace />;

}


