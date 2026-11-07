// Implement dynamic routes in React Router to generate pages from data.

//Imports
import React from "react"
import { Routes, Route, Link } from 'react-router-dom';


export default function App() {

  return (
    <div>

      <BlogPost />
      <Blog />
      <NavBar />

      <Routes>
        <Route path="/" element= {<NavBar />} />
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </div>
  )
}