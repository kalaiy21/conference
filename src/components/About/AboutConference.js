import React from "react";
import Title from "../Title";
import Heading from "../Heading";

function AboutConference(){
    const content = "The International Conference on Innovations in Robotics, Intelligent Automation and Control (ICIRIAC 2022) is a flagship conference in the field of robotics and automation.  It aims to bring together researchers, industrialists and end-users of the robotics community to share their knowledge, expertise and recent innovations to foster collective advancement of the field. It serves as a wonderful platform for amalgamation and dissemination of  research findings and disruptive technologies involving a wide range of fields like Computer Science, Electronics, Electrical, Automation, Robotics, 3D Printing, Smart Manufacturing, Mechatronics, and many more. The participants will be illuminated by expert lectures from Scientists and Industrialists on cutting edge technologies in the National and International realm."

    return (
        <div className="flex flex-col px-[3rem] font-poppins">
            <Heading />
            <Title title="About Conference" />
            <div>
                <p className="text-justify text-base leading-8 my-[3rem]">{content}</p>
                <h2>Event Date: 21-22 April 2022</h2>
            </div>
        </div>
    );
}

export default AboutConference;