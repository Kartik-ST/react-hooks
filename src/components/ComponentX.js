import { useContext } from "react";
import ComponentY from "./ComponentY"
import LanguageContext from "../contexts/LanguageContext";
import { CountContext } from "../App";

const ComponentX = () => {

    const language = useContext(LanguageContext);
    const { count, dispatch } = useContext(CountContext);

    return (
        <>
            <ComponentY>
                {`Your Mother tongue is ${language}.`}
                <br /><br />
                {`Count from X: ${count} `}
                <button onClick={() => dispatch('increment')}>Increment</button>
                <button onClick={() => dispatch('decrement')}>Decrement</button>
                <button onClick={() => dispatch('reset')}>Reset</button>
            </ComponentY>
        </>
    )
}

export default ComponentX;
