// Import
import { useState } from "react"

export default function BlogPost() {

    // Create a simple in-memory array of blog post objects.
    const [posts, setPosts] = useState([]);

    // Stores information for post being created
    // Each post object should have at least an id, slug, title, and content.
    const [post, setPost] = useState({
        id: "",
        slug: "",
        title: "",
        content: ""
    })

    // Handles changes when user types input
    function handleChange(e) {

        // Pulls the input name and value entered
        const { name, value } = e.target;

        // Creates a new post object
        setPost({ ...post, [name]: value })
    }

    // Handles form submission
    function handleSubmit(e) {

        // Prevents the browser from refreshing the page when the form submits
        e.preventDefault()

        // Creates a new blog post using information entered
        const newPost = {
            ...post, // Copies the current title and content
            id: Date.now(), // Unique id
            slug: post.title.toLowerCase().replaceAll(" ", "-") // a URL-friendly string
        }

        // Creates a new array containing all existing posts
        setPosts([...posts, newPost])

        // Reset after each submission
        setPost({
            id: "",
            slug: "",
            title: "",
            content: ""
        })

    }

    return (
        <>

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
        </>
    )
}