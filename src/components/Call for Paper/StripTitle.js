import react from "react";

function StripTitle(props) {
    return(
        <div className="mt-[4rem] bg-[#272727] text-white p-[.4rem] px-10 mb-[2rem]">
            <h1 className="text-[1.2rem]">{props.title}</h1>
        </div>
    );
}

export default StripTitle;