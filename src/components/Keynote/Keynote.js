import Heading from "../General/Heading";
import Title from "../General/Title";
import Speakers from "./Speakers";
import anand from '../../Resources/Anand_paul.jpeg';
import muthiah from '../../Resources/Muthiah.jpeg';


const Keynote = () => {

      return (
        <div>
            <Heading />
            <Title title="Keynote Speakers"/>
            <div className="my-[3rem] px-[5rem]">
               <Speakers Name="Dr. Anand Paul" Designation="Director" Dept="Connected Computing and Media Processing Laboratory" Organisation="Kyungpook National University" Location="South Korea" image={anand}/>
    
               <Speakers Name="Mr. Muthiah" Designation="Computation Engineer (Automotive)" Dept="(Automotive)" Organisation="Akka Technologies" Location="Germany" image={muthiah}/>

            </div>
            
        </div>
    );

}

export default Keynote;