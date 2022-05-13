import React from "react";
import useCounter from "../hooks/useCounter";

const CounterTwo = () => {

    const [count, incr, decr, reset] = useCounter(10, 10);

    return (
        <>
            <h1>Counter Two: {count}</h1>
            <button onClick={incr}>Increment</button>
            <button onClick={decr}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default CounterTwo;