import react from "react";

function CommitteeContent1(props) {
    return (

        <div className="bg-[#FFFBFB]">      

            <h1 className="underline underline-offset-8 font-semibold p-5 mx-10 text-[1.2rem]">{props.Title}</h1>
            
            <p className="flex flex-col px-[5rem]">
                <span> <b>{props.Name},</b></span>
                <span><b>{props.Name1}</b></span>
                <span>{props.Designation},</span>
                <span>{props.Dept}</span>
                <span>{props.Organisation},</span>
                <span>{props.Location}.</span>
            </p>

        </div>
    );
    
}

export default CommitteeContent1;