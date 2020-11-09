import React from "react";

function Container(props) {
    return (
        <div className="container mx-auto center">
            {props.children}
        </div>
    )
}

export default Container;