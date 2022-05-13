import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetch = () => {
    
    const [post, setPost] = useState({});
    const [postId, setPostId] = useState(1);
    const [postIdCopy, setPostIdCopy] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => {
            console.log(res.data)
            setPost(res.data)
            console.log('--------------------------------');
        })
        .catch(err => {
            console.log(err.message)
        })
    },[postIdCopy])

    return (
        <>
        <input type="text" value={postId} onChange={(e) => setPostId(e.target.value)} />
        <button onClick={() => setPostIdCopy(postId)}>GET</button>
        <h2>{post.title}</h2>
        {/* <ul>
            {posts.map(p => <li key={p.id}>{p.title}</li>)}
        </ul> */}
        </>
    )
}

export default DataFetch;