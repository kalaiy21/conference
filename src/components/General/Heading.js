import React from "react";

function Heading() {
    return(
        <div className="flex flex-col bg-skcet w-full text-center justify-center items-center bg-no-repeat bg-cover py-[3rem] mb-[3rem] font-Roboto font-medium">
            <div className="bg-[#4b92cc]/[.55] text-white py-[1rem] rounded-xl">
                <p className="text-xl font-semibold tracking-[2px] leading-[1.2rem]">Sri Krishna College of Engineering and Technology</p>
                <p className="text-xl font-semibold mb-[1rem] tracking-[2px] leading-[2.3rem]">Department of Mechatronics Engineering</p>
                <h1 className="text-[1.4rem] mb-[1rem] w-[50rem] uppercase leading-[2.3rem] tracking-[1px]">International Conference on innovations in Robotics, Intelligent Automation and Control (ICIRIAC 2022)</h1>
                <p className=" font-semibold tracking-[2px] leading-[2.3rem]">14/10/2022 - Coimbatore, Tamilnadu, India</p>
            </div>
        </div>
    );
}

export default Heading;