import Heading from "../General/Heading";
import Title from "../General/Title";

const Dates = () => {

      return (
        <div>
            <Heading />
            <Title title="Important Dates"/>
            <div className="my-[3rem] px-[5rem] flex flex-col items-center leading-[2rem] text-[1.2rem]">
                {/* <h3> <b>Important Dates</b> </h3> */}
                {/* <ul>
                    <li>Paper Submission: 31.08.2022</li>
                    <li>Paper Acceptance: 10.09.2022</li>
                    <li>Registration: 30.09.2022</li>
                    <li>Conference Date: 14.10.2022</li>
                </ul> */}
                <div className="flex justify-between w-[24rem]">
                    <p>Paper Submission:</p>
                    <p>31.08.2022</p>
                </div>
                <div className="flex justify-between w-[24rem]">
                    <p>Paper Acceptance:</p>
                    <p>10.09.2022</p>
                </div>
                <div className="flex justify-between w-[24rem]">
                    <p>Registration:</p>
                    <p>30.09.2022</p>
                </div>
                <div className="flex justify-between w-[24rem]">
                    <p>Conference Date:</p>
                    <p>14.10.2022</p>
                </div>
            </div>
            
        </div>
    );

}

export default Dates;