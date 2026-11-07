// Collection of blog posts 

// Import
import { Link } from "react-router-dom";
import { useState } from "react"

// Receives shared posts array from App
export default function Blog({ posts, setPosts }) {

    // Stores current post being created
    const [post, setPost] = useState({
        title: "",
        content: ""
    });

    // Handles changes when user types input
    function handleChange(e) {

        // Pulls the input name and value entered
        const { name, value } = e.target;

        // Creates a new post object
        setPost({ ...post, [name]: value })
    }

    // Handles form submission
    function handleSubmit(e) {

        // Prevents the browser from refreshing
        e.preventDefault();

        // Creates a new blog post
        const newPost = {
            ...post, // Copies the title and contet
            id: Date.now(), // Unique id
            slug: post.title.toLowerCase().replaceAll(" ", "-")

        }

        // Creates a new array
        setPosts([...posts, newPost])

        // Reset after each submission
        setPost({
            title: "",
            content: ""
        });

    }

    return (
        <div>
            <h1>My Blog</h1>

            <form onSubmit={handleSubmit}>
                <input
                    name="title"
                    value={post.title}
                    onChange={handleChange}
                    placeholder="Post title"
                />

                <textarea
                    name="content"
                    value={post.content}
                    onChange={handleChange}
                    placeholder="Write your post..."
                />

                <button type="submit">Create Post</button>
            </form>

            <h2>List of Posts</h2>

            {/* Display posts */}
            {posts.map((post) => (
                <div key={post.id}>
                    <Link to={`/blog/${post.slug}`}>
                        {post.title}
                    </Link>
                </div>
            ))}
        </div>
    )

}
