import React, { useState } from "react";

const DisplayItems = () => {

    const [items, changeItems] = useState([]);

    const addItem = () => {
        changeItems([...items, {
            id: items.length,
            value: Math.floor(Math.random()*10)+1
        }])
    }

    return (
        <div>
            <button onClick={addItem}>+</button>
            <ul>
                {items.map(i => <li key={i.id}>{i.value}</li>)}
            </ul>
        </div>
    )
}

export default DisplayItems;