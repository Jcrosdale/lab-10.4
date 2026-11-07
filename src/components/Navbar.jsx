// Navbar

// import
import { Link, NavLink } from "react-router-dom"

// Create a main “index” page that links to multiple dynamic detail pages.

export default function Navbar() {

    return (
        <nav>
            <ul>
                {/* clicking on the link changes the path */}
                <li>
                    {/* turning the link a different color if it is the current page */}
                    <NavLink to="/"style={({ isActive }) => ({ color: isActive ? 'black' : 'blue' })}>Home</NavLink>
                </li>

                <li><Link to="/admin">Admin</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}


