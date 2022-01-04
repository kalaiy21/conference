import AboutConference from "./About/AboutConference"
import AboutSkcet from "./About/AboutSkcet";
import CallForPaper from "./Call for Paper/CallForPaper";
import Committe from "./Committee/Committee";
import Contact from "./Contact/Contact";

function Content(){
    return(
        <div className="w-[85%] float-right">
            <CallForPaper />
        </div>
    );
}

export default Content;