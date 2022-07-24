import Heading from "../General/Heading";
import Title from "../General/Title";
import Speakers from "./Speakers";

const Keynote = () => {

      return (
        <div>
            <Heading />
            <Title title="Keynote Speakers"/>
            <div className="my-[3rem] px-[5rem]">
               <Speakers Name="Dr. Anand Paul" Designation="Director" Dept="Connected Computing and Media Processing Laboratory" Organisation="Kyungpook National University" Location="South Korea" />
               <Speakers Name="Mr. Muthiah" Designation="Computation Engineer" Dept="(Automotive)" Organisation="Akka Technologies" Location="Germany" />

            </div>
            
        </div>
    );

}

export default Keynote;