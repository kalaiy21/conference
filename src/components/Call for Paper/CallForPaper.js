import React from "react";
import Heading from "../General/Heading";
import Title from "../General/Title";
import StripTitle from "./StripTitle";
import List from "./List";

function CallForPaper() {
    const Contents1 = ["Robot Design","Mobile Industrial Robots","Collaborative Robots","Multi Robot Systems","Robot Intelligence","Humanoid Robots","Medical Robotics","Cloud and Cognitive Robotics","Underwater Robotics","Soft Robotics","Field and Service Robots","Drone Technology"]
    const Contents2 = ["AI based Automation","Internet of Things based Automation","Intelligent Systems & Algorithm","Intelligent Process Control","E Vehicles and Connected Vehicles","Smart Manufacturing","Advanced Control Algorithms","Smart Sensing Technologies","Artificial Intelligence","Big Data and Data Analytics","Cyber security"]
    //const dates = ["Conference date: 21.4.2022 & 22.4.2022","Paper submission: 11.02.2022","Acceptance date: 25.02.2022","Camera ready paper: 11.03.2022","Registration last date: 31.03.2022"]
    return(
        <div>
            <Heading />
            <div>
                <Title title="Call for Papers"/>
                <p className="text-center text-[1.1rem] mt-[3rem]">The major topics of the Conference are as follows but not limited to</p>
            </div>
            <div>
                <StripTitle title="Innovation in Robotics" />
                <div className="flex justify-center">
                    <ul className="grid grid-cols-2 gap-x-[18rem] gap-3 list-disc">
                        {Contents1.map((content1) => <List content={content1} style = "w-[19rem] text-[1.1rem]" key={content1}/>)}
                    </ul>
                </div>
            </div>
            <div>
                <StripTitle title="Intelligent Automation and Control" />
                <div className="flex justify-center mb-[3rem]">
                    <ul className="grid grid-cols-2 gap-x-[18rem] gap-3 list-disc">
                        {Contents2.map((content1) => <List content={content1} style = "w-[20rem] text-[1.1rem]" key={content1}/>)}
                    </ul>
                </div>
            </div>
            {/* <div className="ml-[7rem] my-[4rem]">
                <h3 className="text-[1.2rem] mb-[.8rem] font-semibold">Important Dates</h3>
                <div className="pl-[4rem]">
                    <ul className="list-disc">
                        {dates.map((date) => <List content={date} style = "text-[1.1rem] mb-[.8rem]" key={date}/>)}
                    </ul>
                </div>
            </div>
            <div className="ml-[7rem] mb-[3rem]">
                <h3 className="text-[1.2rem] mb-[.8rem] font-semibold">Publication</h3>
                <p className="pl-[4rem] text-[1.1rem]">All the accepted and presented papers will be published in Scopus Indexed Journal.</p>
            </div> */}
        </div>
    );
}

export default CallForPaper;