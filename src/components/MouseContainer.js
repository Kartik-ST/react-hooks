import { useState } from 'react';
import MousePointer from './MousePointer';

function MouseContainer() {

    const [displayComp, setDisplay] = useState(true);

    return (
        <>
            <button onClick={() => setDisplay(!displayComp)}>Toggle Display</button>
            {displayComp && <MousePointer />}
        </>
    )
}

export default MouseContainer;
