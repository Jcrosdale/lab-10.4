// Import
import { useParams } from "react-router-dom";

export default function BlogPost({ posts }) {

    const { slug } = useParams();
    const post = posts.find((post) => post.slug === slug);

    // If a post with the given slug cannot be found, it should display a “Post not found” message.
    if (!post) {
        return <p>Post Not Found</p>;
    }
    
    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </article>
    )
}