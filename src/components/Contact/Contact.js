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

    const contacts = ['Mrs. K. Ananthi, Asst. Prof./ Mechatronics Engineering', 'Mr. S. Madhankumar, Asst. Prof./ Mechatronics Engineering']
    const numbers = ['+91 9486091362', '+91 8344483282']

    return(

        <div className="flex flex-col h-screen bg-[#FFFBFB] items-center">
            <Heading />
            <Title title="Contact"/>
            <div className="flex mt-[2rem] text-[1.1rem]">
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
            <div className="flex items-center justify-center mt-10 items text-[1.1rem]">
                <MailIcon className="w-8 h-8 mr-2"/>
                <a className="pb-1 text-sky-500" href="mailto:iciriac22@gmail.com">iciriac22@gmail.com</a>
            </div>
            

        </div>

    );

}

export default Contact;