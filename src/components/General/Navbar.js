import skcetLogo from '../../Resources/skcetLogo.png';
function navbar(props) {

    const onTabSelected = (event) => {
        props.onTabClicked(event.target.innerText);
    }

    const tabs = ["Home", "About SKCET", "Call for Paper", "Committee", "Keynote", "Important Dates", "Submission", "Publication", "Registration", "Downloads", "Venue", "Contact"];

    return (
        <div className="font-poppins bg-[#206dac] rounded-r-2xl w-[15%] h-screen flex items-center justify-center fixed top-0 left-0">
            <div className="absolute top-10">
                <img className="h-10 w-15" src={skcetLogo}  alt="logo" />
            </div>
            <div className="mt-[4rem] flex flex-col xl:space-y-6 lg:space-y-3 md:space-y-2 md:text-[.8rem] xl:text-[1rem] font-semibold text-center text-white tracking-[1px]">

                {tabs.map((tab) => props.Underline===tab ? <a className="p-[2px] transition-all underline underline-offset-8" key={tab} href="#" onClick={onTabSelected}>{tab}</a> : <a className="p-[2px] transition-all" key={tab}href="#" onClick={onTabSelected}>{tab}</a>)}

            </div>
        </div>  
    );
}

export default navbar;