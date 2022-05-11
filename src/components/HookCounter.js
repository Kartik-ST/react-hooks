import React, { useEffect, useState } from "react";

const HookCounter = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    const updateCount = () => {
        setCount(prevState => prevState + 1)
    }
    
    const updateName = (e) => {
        setName(e.target.value)
    }

    useEffect(() => {
        console.log("Affected!")
        document.title = `React Count: ${count}`;
    }, [count])

    return (
        <>
        <h1>{name}</h1>
        <input type="text" onChange={updateName} />
        <br/><br/>
        <button onClick={updateCount}>Clicked {count} times</button>
        </>
    )
}

export default HookCounter;