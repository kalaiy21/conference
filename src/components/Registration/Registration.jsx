import Heading from "../General/Heading";
import Title from "../General/Title";

const Registration = () => {

      return (
        <div>
            <Heading />
            <Title title="Registration"/>
            <div className="my-[3rem] px-[5rem]">
                <h3> <b>Registration Fee Details</b> </h3>
                <ul>
                    <li>Indian Authors : ₹ 9000 per manuscript</li>
                    <li>Indian Listeners : ₹ 3000</li>
                    <li>Foreign Authors : $ 150 per manuscript</li>
                    <li>Foreign Listener : $ 50</li>
                </ul>
            </div>
            
        </div>
    );

}

export default Registration;