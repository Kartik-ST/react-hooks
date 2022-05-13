import React from "react";

const Button = ({text, countFn}) => {

    console.log(`Rendering Button for ${text}`);

    return (
        <>
        <button onClick={() => countFn()}>Increment {text}</button>
        </>
    )
}

export default React.memo(Button);