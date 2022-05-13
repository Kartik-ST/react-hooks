import { useContext } from "react";
import { CountContext } from "../App";
import UserContext from "../contexts/UserContext"

const ComponentY = (props) => {

    const user = useContext(UserContext);
    const { count, dispatch } = useContext(CountContext);

    return (
        <>
            {`Hi ${user}! `}
            {props.children}
            <br /><br />
            {`Count from Y: ${count} `}
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </>
    )
}

export default ComponentY;