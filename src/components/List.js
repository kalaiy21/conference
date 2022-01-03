import React from "react";

function List(props) {
    return(
        <li className="w-[15rem] text-[1.1rem]">{props.content}</li>
    );
}

export default List;