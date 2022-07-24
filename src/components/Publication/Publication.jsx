import Heading from "../General/Heading";
import Title from "../General/Title";

const Publication = () => {

      return (
        <div>
            <Heading />
            <Title title="Publication"/>
            <div className="my-[3rem] px-[5rem] text-center">
              <p className="mb-[1rem]">All registered and presented papers will be published in AIP Conference Proceedings</p>
              <a className="underline text-sky-500 " href="https://aip.scitation.org/journal/apc">AIP Conference Proceedings</a>
            </div>
            
        </div>
    );

}

export default Publication;