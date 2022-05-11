import React, { useEffect, useState } from "react";

const MousePointer = () => {

    const [pointerObj, setCoordinates] = useState({ x: 0, y: 0 });

    const mouseEventListener = (e) => {
        console.log("inside listener");
        setCoordinates({ ...pointerObj, x: e.clientX, y: e.clientY });
    }

    useEffect(() => {
        console.log("Affected!")
        window.addEventListener('mousemove', mouseEventListener)

        return () => {
            console.log("component unmounted");
            window.removeEventListener("mousemove", mouseEventListener);
        }
    }, [])

    return (
        <div>
            <h1>X-{pointerObj.x} | Y - {pointerObj.y}</h1>
        </div>
    )
}

export default MousePointer;