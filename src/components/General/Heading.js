import React from "react";

// function Heading() {
//     return(
//         <div className="flex flex-col bg-skcet w-full text-center justify-center items-center bg-no-repeat bg-cover py-[3rem] mb-[3rem] font-Roboto font-medium">
//             <div className="bg-[#4b92cc]/[.55] text-white py-[1rem] rounded-xl">
//                 <p className="text-xl font-semibold tracking-[2px] leading-[1.2rem]">Sri Krishna College of Engineering and Technology</p>
//                 <p className="text-xl font-semibold mb-[0.7rem] tracking-[2px] leading-[2.3rem]">Department of Mechatronics Engineering</p>
//                 <p className="text-l font-semibold mb-[0.7rem] tracking-[1px] leading-[1rem]">in association with</p>
//                 <p className="font-semibold tracking-[2px] leading-[2rem]">KYUNGPOOK NATIONAL UNIVERSITY, South Korea</p>
//                 <h1 className="text-[1.4rem] mb-[1rem] w-[50rem] uppercase leading-[2.3rem] tracking-[1px]">International Conference on innovations in Robotics, Intelligent Automation and Control (ICIRIAC 2022)</h1>
//                 <p className=" font-semibold tracking-[2px] leading-[2.3rem]">14/10/2022 - Coimbatore, Tamilnadu, India</p>
//             </div>
//         </div>
//     );
// }

function Heading() {
    return(
        <div className="flex flex-col bg-skcet w-full text-center justify-center items-center bg-no-repeat bg-cover py-[3rem] mb-[3rem] font-Roboto font-medium">
            <div>
                <div className="bg-[#d19620]/[.55] text-white pt-[1rem] pb-[.25rem] rounded-t-xl">
                    <h1 className="text-xl font-semibold tracking-[2px]">Sri Krishna College of Engineering and Technology</h1>
                    <p className="text-[.65rem] font-medium tracking-[.5px]">An Autonomous Institution, Accredited by NAAC with 'A' Grade</p>
                    <p className="text-[.65rem] font-medium tracking-[.5px]"> Coimbatore, Tamilnadu, India</p>
                </div>
                <div className="bg-[#4b92cc]/[.55] text-white pb-[1rem] pt-[.25rem] rounded-b-xl">
                    <p className="text-l font-medium tracking-[2px]">Department of Mechatronics Engineering</p>
                    <p className="text-[.7rem] font-medium tracking-[.5px]">in association with</p>
                    <p className="text-l font-medium tracking-[2px] mb-[.5rem]">Kyungpook National University, South Korea</p>
                    <h1 className="text-[1.4rem] font-semibold w-[50rem] tracking-[1px] mb-[.5rem]">International Conference on Innovations in Robotics, Intelligent Automation and Control (ICIRIAC 2022)</h1>
                    <p className="font-medium tracking-[2px] ">14<sup>th</sup> October 2022</p>
                </div>
            </div>
        </div>
    );
}

export default Heading;