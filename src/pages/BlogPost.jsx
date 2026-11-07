// Import
import { useParams } from "react-router-dom";

export default function BlogPost({ posts }) {

    const { slug } = useParams();
    const post = posts.find((post) => post.slug === slug);


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