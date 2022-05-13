import React, { useState } from "react";
import useDocTitle from "../hooks/useDocTitle";


const DocTitleOne = () => {

    const [count, setCount] = useState(0);

    useDocTitle(count);

    const increment = () => {
        setCount(count+1);
    }

    return (
        <button onClick={increment}>Count: {count}</button>
    )
}

export default DocTitleOne;