import Heading from "../General/Heading";
import Title from "../General/Title";

const Dates = () => {

      return (
        <div>
            <Heading />
            <Title title="Important Dates"/>
            <div className="my-[3rem] px-[5rem] text-center">
                {/* <h3> <b>Important Dates</b> </h3> */}
                <ul>
                    <li>Paper Submission: 31.08.2022</li>
                    <li>Paper Acceptance: 10.09.2022</li>
                    <li>Registration: 30.09.2022</li>
                    <li>Conference Date: 14.10.2022</li>
                </ul>
            </div>
            
        </div>
    );

}

export default Dates;