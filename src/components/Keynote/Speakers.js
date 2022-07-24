import react from "react";

function Speakers(props) {
    return (

        <div className="bg-[#FFFBFB]">      

            {/* <h1 className="underline underline-offset-8 font-semibold p-5 mx-10 text-[1.2rem]">{props.Title}</h1>
             */}
            <p className="flex flex-col px-[5rem] mb-[3rem] leading-[1.9rem] font-normal">
                <span className="font-semibold">{props.Name},</span>
                <span>{props.Designation},</span>
                <span>{props.Dept},</span>
                <span>{props.Organisation},</span>
                <span>{props.Location}.</span>
            </p>

        </div>
    );
    
}

export default Speakers;