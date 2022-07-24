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
            </div>
            
        </div>
    );

}

export default Downloads;