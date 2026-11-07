// This page should be protected. It should only be accessible to authenticated users.

// Import
import React from "react";
import { useNavigate } from "react-router-dom"

export default function Admin() {
    const navigate = useNavigate();

    // If an unauthenticated user tries to access /admin directly, they should be redirected to the /login page.
    const handleClick = () => {
        navigate("/login")
    }

    return (
        <>
            {/* The content can be simple, for example: “Welcome to the Admin Dashboard.” */}
            <h1>Welcome to the Admin Dashboard.</h1>
            navigate(
                from, {/* og location */}
                { replace: true } {/* redirect */}
            )
            <button onClick={handleClick} type="button" />
        </>

    )
}

