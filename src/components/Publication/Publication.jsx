import Heading from "../General/Heading";
import Title from "../General/Title";
import AIP from '../../Resources/AIP proceedings.jpeg';
import Scopus from '../../Resources/scopus.jpeg';

const Publication = () => {

      return (
        <div>
            <Heading />
            <Title title="Publication"/>
            <div className="my-[3rem] px-[5rem] text-center">
              <p className="mb-[1rem]">All registered and presented papers will be published in AIP Conference Proceedings</p>
              <div className="flex flex-row mx-[300px]">
                <img className="h-[180px]"src={AIP}></img>
                <img className="w-[500px] h-[170px]"src={Scopus}></img>
              </div>
              <br></br>
              <p><a className="underline text-sky-500 " href="https://aip.scitation.org/journal/apc">AIP Conference Proceedings -</a> scopus indexed</p>
            </div>
            
        </div>
    );

}

export default Publication;