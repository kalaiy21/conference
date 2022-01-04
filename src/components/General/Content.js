import AboutConference from "../About/AboutConference"
import AboutSkcet from "../About/AboutSkcet";
import CallForPaper from "../Call for Paper/CallForPaper";
import Committe from "../Committee/Committee";
import Contact from "../Contact/Contact";


function Content(props){

    const tab = props.currentTab;

    if(tab === "Home")
    {
        return(
            <div className="w-[85%] float-right bg-[#FFFBFB] h-screen">
                <AboutConference />
            </div>
        );
    }
    else if(tab === "About SKCET")
    {
        return(
            <div className="w-[85%] float-right bg-[#FFFBFB]">
                <AboutSkcet />
            </div>
        );
    }
    else if(tab === "Call for Paper")
    {
        return(
            <div className="w-[85%] float-right bg-[#FFFBFB]">
                <CallForPaper />
            </div>
        );
    }
    else if(tab === "Committee")
    {
        return(
            <div className="w-[85%] float-right bg-[#FFFBFB]">
                <Committe />
            </div>
        );
    }
    else if(tab === "Contact")
    {
        return(
            <div className="w-[85%] float-right bg-[#FFFBFB]">
                <Contact />
            </div>
        );
    }

}

export default Content;