import React, { useState } from "react";

function DisplayName() {
    const [name, setName] = useState({ firstName: '', lastName: '' });

    return (
        <form>
            <h2>Name: {`${name.firstName} ${name.lastName}`}</h2>
            <label>First Name </label>
            <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})} />
            <br /><br />
            <label>Last Name </label>
            <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})} />
        </form>
    )
}

export default DisplayName;