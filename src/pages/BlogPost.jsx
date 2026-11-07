
import { useState } from "react"

export default function BlogPost() {

    // Create a simple in-memory array of blog post objects.
    const [posts, setPosts] = useState([]);

    // Each post object should have at least an id, slug, title, and content.
    const [post, setPost] = useState({
        id: "",
        slug: "", 
        title: "",
        content: ""
    })

    function handleChange(e) {
        const { name, value } = e.target;

        setPost({ ...post, [name]: value })
    }

    function handleSubmit(e) {
        // prevent default form submission
        e.preventDefault()

        const newPost = {
            ...post,
            id: Date.now(),
            slug: post.title.toLowerCase().replaceAll(" ", "-") // a URL-friendly string
        }

        setPosts([...posts, newPost])
    }

    return (
        <>
            <input
                name="title"
                value={post.title}
                onChange={handleChange}
                placeholder="post title"
            />

            <textarea
                name="content"
                value={post.content}
                onChange={handleChange}
                placeholder="Write your post..."
            />
        </>
    )
}