import React from "react";

function Heading() {
    return(
        <div className="flex flex-col text-center justify-center items-center mt-[1rem] mb-[3rem] font-Roboto font-medium">
            <p className="text-xs font-semibold opacity-[50%] tracking-[1px] leading-[1.2rem]">Sri Krishna College of Engineering and Technology</p>
            <p className="text-xs font-semibold mb-[1rem] opacity-[50%] tracking-[1px] leading-[1.2rem]">Department of Mechatronics Engineering</p>
            <h1 className="text-[1.4rem] w-[50rem] uppercase leading-[2.3rem] tracking-[1px]">International Conference on innovations in Robotics, Intelligent Automation and Control</h1>
        </div>
    );
}

export default Heading;