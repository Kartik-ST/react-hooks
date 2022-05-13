import React, { useMemo, useState } from "react";

const MemoCounter = () => {

    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000)
            i++;
        return countOne % 2 === 0;
    }, [countOne]);

    return (
        <>
            <button onClick={() => setCountOne(countOne + 1)}>Count One: {countOne}</button>
            {isEven ? 'Even' : 'Odd'}
            <br />
            <button onClick={() => setCountTwo(countTwo + 1)}>Count Two: {countTwo}</button>
        </>
    )
}

export default MemoCounter;