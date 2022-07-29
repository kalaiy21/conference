import React from "react";
import Title from "../General/Title";
import Heading from "../General/Heading";

function AboutConference(){
    const content = "The International Conference on Innovations in Robotics, Intelligent Automation and Control (ICIRIAC 2022) is a flagship conference in the field of robotics and automation. It aims to bring together researchers, industrialists and end-users of the robotics community to share their knowledge, expertise and recent innovations to foster collective advancement of the field. It serves as a wonderful platform for amalgamation and dissemination of research findings and disruptive technologies involving a wide range of fields like Computer Science, Electronics, Electrical, Automation, Robotics, 3D Printing, Smart Manufacturing, Mechatronics, connected vehicles, and many more. The participants will be illuminated by expert lectures from Scientists and Industrialists on cutting edge technologies in the National and International realm."
    const dept="Mechatronics Engineering is a multidisciplinary field that blends the disciplines of Electrical, Mechanical and Computer Engineering. It caters to the variety of skill sets needed in contemporary, advanced and automated industries. The Department was established in the year 2000. The Department offers the U.G. Degree Programme - B.E. Mechatronics Engineering. The sanctioned intake of the department is 120 and is ably supported by 28 well-qualified and experienced faculty members. This Department is accredited by NBA. The Department is equipped with 7 state of the art Laboratories which includes ABB Six Axis Industrial Robot, 3D Printers, ABB PLC and HMI panel, Electro Pneumatic Kits, Advanced sensors and actuators, Data Acquisition cards, Licensed Softwares and etc., Apart from offering industry ready and cutting-edge curriculum, the department focuses on the wholesome development of the students. The students are encouraged to be a part of the professional bodies like IEEE Robotics and Automation Society, The Robotic Society of India. The Department has strong collaboration with industries, Research Labs and International Universities. The Department is committed to offer world class education in the fields of Robotics and Automation.";
    const skcet="Sri Krishna College of Engineering and Technology is an Autonomous Institution, accredited by NAAC with ‘A’ Grade. The Institution is ranked 73 rd among Engineering colleges in India by the MHRD - National Institution Ranking Framework 2022. The Institution offers 11 UG Programmes, 8 PG Programmes, 1 Integrated Programme and 6 Research Programmes. 7 of the UG Programmes are accredited by the NBA. SKCET provides an exciting academic environment with well qualified and dedicated faculty members to inspire and nurture the student fraternity. With industry drafted Choice Based Credit System (CBCS) curriculum and syllabi, the Institution takes every effort to bring its students to the forefront of the society as skillful and responsible Engineers. The Institution is bestowed with World class facilities including State of Art laboratories, Smart classrooms, Library, Gymnasium, Health center, Indoor stadium and Open air theatre, making it a suitable place for young engineers to realize their dreams. SKCET excels in its efforts towards achievement of academic goals. SKCET students have participated and won laurels in several hackathons organized by various reputed National and International organizations.";
    return (
        <div className="flex flex-col font-poppins ">
            <Heading />
            <Title title="About Conference" />
            <div className="px-[5.5rem]">
                <p className="text-justify text-base font-medium leading-8 my-[3rem] leading-[2.4rem] ">{content}</p>
            </div>

            <Title title="About Department" />
            <div className="px-[5.5rem]">
                <p className="text-justify text-base font-medium leading-8 my-[3rem] leading-[2.4rem] ">{dept}</p>
            </div>

            <Title title="About SKCET" />
            <div className="px-[5.5rem]">
                <p className="text-justify text-base font-medium leading-8 my-[3rem] leading-[2.4rem] ">{skcet}</p>
            </div>
        </div>
    );
}

export default AboutConference;