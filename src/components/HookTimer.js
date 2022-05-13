import React, { useEffect, useRef, useState } from "react"

const HookTimer = () => {

    const [count, setCount] = useState(0);
    const [timerPause, setOnOffTimer] = useState(false);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount(prevcount => prevcount + 1);
        }, 1000);

        console.log(intervalRef.current);

        return () => {
            clearInterval(intervalRef.current);
        }
    }, []);

    const playPauseTimer = () => {
        console.log(timerPause);
        if (!timerPause)
            clearInterval(intervalRef.current);
        else if (timerPause)
            intervalRef.current = setInterval(() => {
                setCount(prevcount => prevcount + 1);
            }, 1000);

        setOnOffTimer(!timerPause);
    }

    return (
        <>
            <div>
                Timer: {count}
            </div>
            <button onClick={playPauseTimer}>{timerPause ? 'Play' : 'Pause'}</button>

        </>
    )
}

export default HookTimer;