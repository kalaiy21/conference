import Heading from "../General/Heading";
import Title from "../General/Title";
import brochure from '../../Resources/bro1.pdf';
const Downloads = () => {

      return (
        <div>
            <Heading />
            <Title title="Downloads"/>
            <div className="my-[3rem] px-[5rem] text-center">
                <p><a className="underline text-sky-500" href={brochure} download="Brochure">Click here</a> to download the brochure</p>
                <p><a className="underline text-sky-500" href="https://aip.scitation.org/pb-assets/files/publications/apc/8x11WordTemplates-1607702598523.zip" target="blank"download="AIP Template">Click here</a> to download the template and standards</p>
            </div>
            
        </div>
    );

}

export default Downloads;