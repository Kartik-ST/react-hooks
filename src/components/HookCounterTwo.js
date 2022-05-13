import React, { useReducer } from "react";

const initState = {
    count: 0,
};

const reducer = (currentState, action) => {
    switch (action.type) {
        case 'increment':
            return {count: currentState.count + action.value}
        case 'decrement':
            return {count: currentState.count - action.value}
        case 'reset':
            return initState
        default:
            return currentState
    }
};

const HookCounterTwo = () => {

    const [countObj, dispatch] = useReducer(reducer, initState);

    return (
        <>
            <div>Count: {countObj.count}</div>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment by 1</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement by 1</button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment by 5</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement by 5</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </>
    )
}

export default HookCounterTwo;