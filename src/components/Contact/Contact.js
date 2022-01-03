const Member = (props) => {
    return <li className="p-3">{ props.person }</li>;
}

const Number = (props) => {
    return <li className="p-3">{ props.person }</li>;
}

const Contact = () => {

    const contacts = ['Dr. N. A. Natraj, Asso. Prof./Mechatronics', 'Mrs. K. Ananthi, Asst. Prof./ Mechatronics', 'Mr. P. M. Arunkumar, Asst. Prof./ Mechatronics', 'Mr. S. Madhankumar, Asst. Prof./ Mechatronics']
    const numbers = ['+91 1234567890', '+91 1234567890', '+91 1234567890', '+91 1234567890']

    const test = "Sri Krishna College of Engineering and Technology is an autonomous Institution, accredited by NAAC with A Grade (3.42 out of 4 Scale). The Institution offers 9 UG Programmes, 9 PG Programmes and 1 Integrated Programme. Seven of its UG Programmes are accredited by the NBA. SKCET provides an exciting academic environment with well qualified and dedicated faculty members to inspire and nurture the student fraternity. The Institution is ranked 83 rd among engineering colleges in India by the MHRD- National Institution Ranking Framework 2020 and 2 nd among private self-financing Institutions in ARIIA 2020 rankings. SKCET has also secured second rank among technical colleges in all India Swachh campus awards 2019. SKCET has also secured the 2 nd runner-up place in AICTE- Lilavati award under the theme Sanitation and Hygien. The Institution is bestowed with world class facilities including state of the art laboratories, smart classrooms, library, multiplex theatre, athletic cum football field, gymnasium, health center, indoor stadium and open air theatre, making it a suitable place for young engineers to realize their dreams"

    return(

        <div className="w-5/6 float-right flex flex-col h-screen bg-[#FFFBFB] items-center">

            <div className="flex">
                <div>
                    <ul className="p-3 mx-12">
                        {contacts.map((contact) => <Member person={contact} />)}
                    </ul>
                </div>
                <div>
                    <ul className="p-3 mx-12">
                        {numbers.map((number) => <Number person={number} />)}
                    </ul>
                </div>
            </div>

            <h2 className="p-3 mt-10 items-center">Gmail - madhankumar@gmail.com</h2>

        </div>

    );

}

export default Contact;