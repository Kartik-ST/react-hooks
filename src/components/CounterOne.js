import React from "react";
import useCounter from "../hooks/useCounter";

const CounterOne = () => {

    const [count, incr, decr, reset] = useCounter();

    return (
        <>
            <h1>Counter One: {count}</h1>
            <button onClick={incr}>Increment</button>
            <button onClick={decr}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default CounterOne;