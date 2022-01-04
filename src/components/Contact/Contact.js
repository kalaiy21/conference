import Heading from "../Heading";
import Title from "../Title";

const Member = (props) => {
    return <li className="p-3">{ props.person }</li>;
}

const Number = (props) => {
    return <li className="p-3">{ props.person }</li>;
}

const Contact = () => {

    const contacts = ['Dr. N. A. Natraj, Asso. Prof./Mechatronics', 'Mrs. K. Ananthi, Asst. Prof./ Mechatronics', 'Mr. P. M. Arunkumar, Asst. Prof./ Mechatronics', 'Mr. S. Madhankumar, Asst. Prof./ Mechatronics']
    const numbers = ['+91 1234567890', '+91 1234567890', '+91 1234567890', '+91 1234567890']

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