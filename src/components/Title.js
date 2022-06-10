import React from "react";

const  Title = () => {
    
    console.log("Rendered Title");

    return <h1>This is the title</h1>
}

// export default Title;
export default React.memo(Title);