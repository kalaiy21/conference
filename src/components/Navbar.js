import skcetLogo from '../Resources/skcetLogo.png';

function navbar() {
    return (
        <div className="font-poppins bg-[#272727] w-[15%] h-screen flex items-center justify-center fixed top-0 left-0">
            <div className="absolute top-10">
                <img className="w-15 h-10" src={skcetLogo}  alt="logo" />
            </div>
            <div className="text-white flex flex-col text-center space-y-6">
                <a className="p-[2px] transition-all" href="#">Home</a>
                <a className="p-[2px] transition-all" href="#">About SKCET</a>
                <a className="p-[2px] transition-all" href="#">Call for Paper</a>
                <a className="p-[2px] transition-all" href="#">Committee</a>
                <a className="p-[2px] transition-all" href="#">Contact</a>
            </div>
        </div>  
    );
}

export default navbar;