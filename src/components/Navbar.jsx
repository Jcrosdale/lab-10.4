// Navbar

// import
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"

// Create a main “index” page that links to multiple dynamic detail pages.

export default function Navbar() {

    const { isAuthenticated, logout } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogout = () => {
        logout();
        navigate('/login')
    };

    return (
        <nav>
            <ul>
                {/* clicking on the link changes the path */}
                <li>
                    {/* turning the link a different color if it is the current page */}
                    <NavLink to="/"style={({ isActive }) => ({ color: isActive ? 'black' : 'blue' })}>Home</NavLink>
                </li>

                <li><Link to="/blog">Blog</Link></li>

                {isAuthenticated ? (
                    <>
                        <li><Link to="/admin">Admin</Link></li>
                        <li><button onClick={handleLogout}>Log Out</button></li>
                    
                    </>
                ) : (
                <li><Link to="/login">Login</Link></li>
                )}
            </ul>
        </nav>
    )
}


