import React from "react";

function Title(props) {
    return(
        <div className="bg-[#FFFBFB]">
            <h3 className="text-center text-2xl mb-2">{props.title}</h3>
            <hr className="mx-auto my-0 w-[45rem]"/>
        </div>
    );
}

export default Title;