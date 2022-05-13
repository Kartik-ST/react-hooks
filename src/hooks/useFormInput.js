import { useState } from "react";

const useFormInput = (initialValue) => {

    const [value, setValue] = useState(initialValue);

    const reset = () => {
        setValue(initialValue);
    }

    const onChangeHandler = (e) => {
        setValue(e.target.value)
    }

    return [
        value,
        onChangeHandler,
        reset
    ]
}

export default useFormInput;