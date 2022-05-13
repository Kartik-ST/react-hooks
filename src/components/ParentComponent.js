import React, { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const ParentComponent = () => {

    const [age, setAge] = useState(0);
    const [salary, setSalary] = useState(50000);

    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);


    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000);
    }, [salary]);

    return (
        <>
            <Title />
            <br />
            <Count text="Age" count={age} />
            <br />
            <Button text="Age" countFn={incrementAge} />
            <br />
            <br />
            <Count text="Salary" count={salary} />
            <br />
            <Button text="Salary" countFn={incrementSalary} />
        </>
    )
}

export default ParentComponent;