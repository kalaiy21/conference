import react from "react";
import anand from '../../Resources/Anand_paul.jpeg';

function Speakers(props) {
    return (

        <div className="bg-[#FFFBFB]">      

            {/* <h1 className="underline underline-offset-8 font-semibold p-5 mx-10 text-[1.2rem]">{props.Title}</h1>
             */}
            <p className="flex flex-col px-[5rem] mb-[3rem] leading-[1.9rem] font-normal">
                {/* <span className="font-semibold">{props.Name},</span>
                <span>{props.Designation},</span>
                <span>{props.Dept},</span>
                <span>{props.Organisation},</span>
                <span>{props.Location}.</span>
                <img className="w-[400px] h-[400px]"src={props.image}></img> */}
                <div>
                    <img className="float-right w-[350px] h-[300px] border-black"src={props.image}></img>
                    <div className="font-semibold">{props.Name},</div>
                    <div>{props.Designation},</div>
                    <div>{props.Dept},</div>
                    <div>{props.Organisation},</div>
                    <div>{props.Location}.</div>

                </div>
                
            </p>

        </div>
    );
    
}

export default Speakers;