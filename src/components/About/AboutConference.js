import React from "react";
import Title from "../General/Title";
import Heading from "../General/Heading";

function AboutConference(){
    const content = "The International Conference on Innovations in Robotics, Intelligent Automation and Control (ICIRIAC 2022) is a flagship conference in the field of Robotics and Automation. It aims to bring together researchers, academicians, industrialists and end-users of the Robotics and Automation community to share their knowledge, expertise and recent innovations to foster collective advancement of the field. It serves as a wonderful platform for amalgamation and dissemination of research findings and disruptive technologies involving a wide range of fields like Automation, Robotics, 3D Printing, Smart Manufacturing, Mechatronics, Connected Vehicles, and many more. The participants will be illuminated by expert lectures from Scientists and Industrialists on cutting edge technologies in the National and International realm."
    
    return (
        <div className="flex flex-col font-poppins ">
            <Heading />
            <Title title="About the Conference" />
            <div className="px-[5.5rem]">
                <p className="text-justify text-base font-medium leading-8 my-[3rem] leading-[2.4rem] ">{content}</p>
            </div>

            
        </div>
    );
}

export default AboutConference;