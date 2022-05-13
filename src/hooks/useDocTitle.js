import { useEffect } from "react";

const useDocTitle = (count) => {

    useEffect(() => {
        document.title = `React Count: ${count}`;
    }, [count]);
}

export default useDocTitle;