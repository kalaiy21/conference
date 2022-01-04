import React from "react";
import Title from "../General/Title";
import Heading from "../General/Heading";

function AboutSkcet(){
    const content1 = "Sri Krishna College of Engineering and Technology is an autonomous Institution , accredited by NAAC with A Grade (3.42 out of 4 Scale). The Institution offers 9 UG Programmes, 9 PG Programmes and 1 Integrated Programme. Seven of its UG Programmes are accredited by the NBA. SKCET provides an exciting academic environment with well qualified and dedicated faculty members to inspire and nurture the student fraternity. The Institution is ranked 83 rd among engineering colleges in India by the MHRD- National Institution Ranking Framework 2020 and 2 nd among private self-financing Institutions in ARIIA 2020 rankings. SKCET has also secured second rank among technical colleges in all India Swachh campus awards 2019. SKCET has also secured the 2 nd runner-up place in AICTE- Lilavati award under the theme Sanitation and Hygiene." 
    
    const content2 = "The college has an active Innovation and Entrepreneurship Development Centre (IEDC) funded by the Department of Science and Technology (DST), Government of India. The Institution also has a vibrant Research Incubation Cell (RIC) to provide incubation support to the budding entrepreneurs. The institution provides mentoring support, office space and testing facilities to the start-ups to commercialize their creative ideas. Some of the prominent start-ups taking incubation support at SKCET are, Intain Technologies, Insprit Junction, Medipro and F-Bot. SKCET has an active MHRD supported Institution Innovation Council (IIC) to promote the culture of innovation and entrepreneurship among the students and faculty." 
    
    const content3 = "Aiming at the fruitful outcomes such as technical support, training, industrial exposure, internships, placements, SKCET has signed 32 MoUs and established 12 Centres of Excellence with leading Industries and premier Institutions like NITTTR - Chandigarh, Tata Consultancy Services, Virtusa Corp, Valparaiso University, Siene Aerospace-Dubai, Barry Wehmiller, Shanthi Gears, Sector Skill Council, to name a few. SKCET excels in its efforts towards achievement of academic goals and it is noteworthy to mention that SKCET is chosen by MHRD to host Smart India Hackathon Software Version during 2017, 2018, 2019 and 2020, consecutively. SKCET has also hosted Toycathon 2021 during students participating in SKCET were given the opportunity to interact with the humble Prime Minister of India, Shri.Narendra Modi ji. SKCET students have also participated in several hackathons and secured prizes and internships from various reputed national and international organizations like Harvard University, USA, National University of Singapore, Smart-India Hackathon, ASEAN Hackathon and Google to name a few."

    return (
        <div className="font-poppins px-[3rem]">
            <Heading />
            <Title title="About SKCET" />
            <div>
                <p className="text-justify text-base leading-8 mb-[2rem] mt-[3rem]">{content1}</p>
                <p className="text-justify text-base leading-8 mb-[2rem]">{content2}</p>
                <p className="text-justify text-base leading-8 mb-[2rem]">{content3}</p>
            </div>
        </div>
    );
}

export default AboutSkcet;