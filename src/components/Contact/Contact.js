import Heading from "../General/Heading";
import Title from "../General/Title";
import { MailIcon } from '@heroicons/react/solid';

const Member = (props) => {
    return <li className="p-3">{ props.person }</li>;
}

const Number = (props) => {
    return <li className="p-3" key={props.person}>{ props.person }</li>;
}

const Contact = () => {

    const contacts = ['Dr. N. A. Natraj, Asso. Prof./Mechatronics', 'Mrs. K. Ananthi, Asst. Prof./ Mechatronics', 'Mr. P. M. Arunkumar, Asst. Prof./ Mechatronics', 'Mr. S. Madhankumar, Asst. Prof./ Mechatronics']
    const numbers = ['+91 9566055736', '+91 9566587682', '+91 9750135213', '+91 8344483282']

    return(

        <div className="flex flex-col h-screen bg-[#FFFBFB] items-center">
            <Heading />
            <Title title="Contact"/>
            <div className="mt-[2rem]">
                <h1>Organizing Secretary</h1>
            </div>
            <div className="flex mt-[2rem]">
                <div>
                    <ul className="p-3 mx-12">
                        {contacts.map((contact) => <Member person={contact} key={contact}/>)}
                    </ul>
                </div>
                <div>
                    <ul className="p-3 mx-12">
                        {numbers.map((number) => <Number person={number} key={number}/>)}
                    </ul>
                </div>
            </div>
            <div className="mt-10 flex items items-center justify-center">
                <MailIcon className="w-5 h-5 mr-2"/>
                <h2 className="pb-1">madhankumars@skcet.ac.in</h2>
            </div>
            

        </div>

    );

}

export default Contact;