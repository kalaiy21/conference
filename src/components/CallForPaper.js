import React from "react";
import Heading from "./Heading";
import Title from "./Title";
import StripTitle from "./StripTitle";
import List from "./List";

function CallForPaper() {
    const Contents1 = ["Robot Design","Mobile Industrial Robots","Multi Robot Systems","Mechatronics and Robotics","Rescue Robots","Robot Intelligence","Medical Robotics","Cloud Robotics","Cognitive Robotics","Tele Robotics","Underwater Robotics","Soft Robotics","Micro Robots","Field and Service Robots","Drone Technology"]
    const Contents2 = ["PLC and Microcontrollers","Automation Applications","Fluid Power Technology","Advanced Process Control","Intelligent Automation","Additive Manufacturing","Stochastic Control","Stochastic Control","Advanced Control Algorithms","Sensor Technology","Artificial Intelligence","Internet of Things","Intelligent Systems & Algorithm","Machine Learning","Big Data and Data Analytics"]
    return(
        <div className="w-5/6 float-right bg-[#d1d5db] pt-10">
            <Heading />
            <div>
                <Title title="Call for Paper"/>
                <p className="text-center text-[1.1rem] mt-3">The contributing papers are invited to the following broad categories</p>
            </div>
            <div>
                <StripTitle title="Innovation in Robotics" />
                <div className="flex justify-center">
                    <ul className="grid grid-cols-2 gap-x-[25rem] gap-3 list-disc">
                        {Contents1.map((content1) => <List content={content1} />)}
                    </ul>
                </div>
            </div>
            <div>
                <StripTitle title="Intelligent Automation and Control" />
                <div className="flex justify-center">
                    <ul className="grid grid-cols-2 gap-x-[25rem] gap-3 list-disc">
                        {Contents2.map((content1) => <List content={content1} />)}
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default CallForPaper;