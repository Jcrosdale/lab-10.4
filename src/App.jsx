// Implement dynamic routes in React Router to generate pages from data.

//Imports
import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';

import BlogPost from "./pages/BlogPost";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import ProtectedRoute from "./components/ProtectedRoute"
import Admin from "./pages/Admin"
import Login from "./pages/Login"


export default function App() {

  const [posts, setPosts] = useState([]);

  return (
    <div>

      <Navbar />

      <Routes>
        {/* Blog Index Page (/blog):
        This page should display a list of all available blog posts.
        Each item in the list should be a link that navigates to the specific post’s page using its slug (e.g., /blog/my-first-post). */}
        <Route
          path="/"
          element={
            <Blog posts={posts}
              setPosts={setPosts} />}
        />
        <Route
          path="/blog"
          element={
            <Blog posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/blog/:slug"
          element={
            <BlogPost posts={posts} />}
        />
        <Route
        path="/login"
        element={<Login />}
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>}
        />

      </Routes>
    </div>
  );
}