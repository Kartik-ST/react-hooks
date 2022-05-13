import React from "react";
import useFormInput from "../hooks/useFormInput";

const UserForm = () => {

    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');

    const [firstName, setFirstName, resetFirstName] = useFormInput('');
    const [lastName, setLastName, resetLastName] = useFormInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hi ${firstName} ${lastName}!`);
        resetFirstName();
        resetLastName();
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name: </label>
            <input id="firstName" type="text" value={firstName} onChange={setFirstName} />
            <br /><br />
            <label htmlFor="lastName">Last Name: </label>
            <input id="lastName" type="text" value={lastName} onChange={setLastName} />
            <br /><br />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default UserForm;