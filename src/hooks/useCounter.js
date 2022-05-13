import { useState } from "react";

const useCounter = (initialCount = 0, value = 1) => {

    const [count, setCount] = useState(initialCount);

    const incr = () => {
        setCount(count + value);
    }

    const decr = () => {
        setCount(count - value);
    }

    const reset = () => {
        setCount(initialCount);
    }

    return [count, incr, decr, reset];
}

export default useCounter;