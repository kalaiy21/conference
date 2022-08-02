import react from "react";
import muthiah from '../../Resources/Muthiah.jpeg';

function Speaker2() {
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
                    <img className="float-left w-[350px] h-[300px] border-black"src={muthiah}></img>
                    <div className="float-right mt-[100px] mr-[60px]">
                        <div className="font-semibold">Mr. Muthiah,</div>
                        <div>Computation Engineer,</div>
                        <div>(Automotive),</div>
                        <div>Akka Technologies,</div>
                        <div>Germany.</div>
                    </div>

                </div>
                
            </p>

        </div>
    );
    
}



export default Speaker2;