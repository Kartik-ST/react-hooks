import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialPost = {
    data: '',
    error: '',
    isLoading: true
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                data: action.value,
                error: '',
                isLoading: false
            };
        case 'FETCH_ERROR':
            return {
                data: "",
                error: "Someting went wrong",
                isLoading: false
            };
        default:
            return state;
    }
}

const DataFetchTwo = () => {

    const [post, dispatch] = useReducer(reducer, initialPost);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', value: res.data });
            })
            .catch(err => {
                dispatch({ type: 'FETCH_ERROR' });
            })
    }, []);

    return (
        <>
            {post.isLoading ? 'Loading...' : ''}
            {post.error ? post.error : post.data.title}
        </>
    )
}

export default DataFetchTwo;