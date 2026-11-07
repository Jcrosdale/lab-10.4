// A simple page with a “Log In” button that calls the login() function from the context.

// Import
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export default function Login() {

    const navigate = useNavigate()
    const { login } = useContext(AuthContext)

    const handleLogin = () => {
        login();
        navigate('/admin')
    }

    return (
        <>
            <h1>Login</h1>
            <button onClick={handleLogin}>Log In</button>

        </>

    )
}
