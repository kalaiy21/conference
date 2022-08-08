import Heading from "../General/Heading";
import Title from "../General/Title";
import CommitteeContent from "./CommitteeContent";
import CommitteeContent1 from "./CommitteeContent1";
import Committemem from "./Co-or";
import Common from "./Commondetails";
import Technical from "./TechnicalMem";
const Committe = () => {



    // const AdvisoryMembers = ['Dr. J. Janet, Principal'];
    // const Convener = ['Dr. M. Lydia, Professor & Head, Mechatronics Engineering'];
    // const TechnicalCommittee = ['Dr. K.B. Gurumoorthy, National Institute of Technology, Calicut, India', 'Dr.Kathiravan Srinivasan, Vellore Institute of Technology, Vellore', 'Dr.T.Mohanraj, Amritha University, Coimbatore', 'Dr. Kamatchi Sundari, SRMIST-Ramapuram, Chennai', 'Dr. Akhilesh Kumar Singh, Adithya College of Engineering and Technology, Andhra Pradesh', 'Dr.R.Rajasekar, HOD/Mech, Kongu Engineering College, Erode', 'Dr.S.Vinod, PSG College of Technology,Coimbatore', 'Dr. Ram Singh Sran, Baba Hira Singh Bhattal Institute of Engineering & Technology, Lehragaga, Sangrur, Punjab', 'Dr.K.Lingadurai, University College of Engineering,  Dindigul', 'Dr.R.Rajasekar, Kongu Engineering College,Erode', 'Dr.M.Ramu, Amirta School of Engineering, Coimbatore', 'Dr.Saravana Mohan, Kumaraguru College of Technology, Coimbatore', 'Dr.Ramakrishnan.R, Vellore Institute of Technology, Vellore', 'Dr. M. Feroskhan, Vellore Institute of Technology, Chennai', 'Dr.M.Venkatesan, SASTRA Deemed to be University, Thanjavur', 'Dr.M.Ravichandran, K.Ramakrishnan College of Engineering, Trichy', 'Dr.S.Karthigai Lakshmi, SSM Institute of Engineering and Technology, Dindigul', 'Dr. B V D S Sekhar, S R K R Engineering College, Buimavaram, West Godavari District, Andhra Pradesh', 'Dr.VVSSS Chakravarthy, Raghu Institute of Technology, Dakamarri, Visakhapatnam, Andhra Pradesh', 'Dr. S. Suresh Kumar, KGiSL Institute of Technology, Coimbatore', 'Dr. K. Baskaran, Alagappa Chettiar Government College of Engineering and Technology , Karaikudi'];
    // const InternationalAdvisory = ['Dr. Rajkumar Palaniappan, University of Technology Bahrain, Bahrain', 'Dr. Rathinaraja Jeyaraj, Kyungpook National University, South Korea', 'Zahra Badiei, Shiraz University, Shiraz, Iran', 'Yoash Levron, The Viterbi Faculty of Electrical Engineering, Technion Israel Institute of Technology, Haifa , Israel']

    return (
        <div>
            <Heading />
            <Title title="Committee Members"/>
            <div className="my-[3rem] px-[5rem]">
               <CommitteeContent1 Title = "Chief Patron" Name="Smt. S. Malarvizhi" Designation="Managing Trustee" Organisation="Sri Krishna Institutions" Location="Coimbatore" />
               <CommitteeContent1 Title = "Patron" Name="Dr. J. Janet" Designation="Principal" Organisation="Sri Krishna College Engineering and Technology" Location="Coimbatore" />
               <CommitteeContent1 Title = "Convener" Name="Dr. M. Lydia" Designation="Professor & Head" Dept = "Department of Mechatronics Engineering," Organisation="Sri Krishna College Engineering and Technology" Location="Coimbatore" />
               <CommitteeContent1 Title = "Co-ordinators" Name="Ms. K. Ananthi" Name1="Mr. S. Madhan Kumar," Designation="Assistant Professors" Dept = "Department of Mechatronics Engineering," Organisation="Sri Krishna College Engineering and Technology" Location="Coimbatore" />
               <p className="p-5 mx-10 font-bold underline underline-offset-8 tracking-[1px]">Technical Committee Members</p>
               <p className="p-5 ml-[50px] mx-10 font-bold underline underline-offset-8 tracking-[1px]">International</p>
               <Technical Name="Dr. Tony Punnoose Valayil" Department="Bulgarian Academy of Sciences," Place="Bulgaria."></Technical>
               <Technical Name="Dr. Yoash Levron" Department="Technion Israel Institute of Technology," Place="Haifa, Israel."></Technical>
               <Technical Name="Dr. Rajkumar Palaniappan" Department="University of Technology Bahrain," Place="Bahrain."></Technical>
               <Technical Name="Dr. Xiao-Zhi Gao" Department="University of Eastern Finland," Place="Finland."></Technical>
               <Technical Name="Dr. DileepKumar" Department="Nile university," Place="Nigeria."></Technical>
               <Technical Name="Dr. Abdulnasir Hossen" Department="Sultan Qaboos University," Place="Sultanate of Oman."></Technical>
               <Technical Name="Dr. Haider Ismael Shahadi" Department="University of Kerbala," Place="Iraq."></Technical>
               <Technical Name="Dr. Selwyn Piramuthu" Department="University of Florida," Place="Gainesville."></Technical>
               <Technical Name="Prof. Zahra Badiei" Department="Shiraz University," Place="Shiraz, Iran."></Technical>
               <Technical Name="Dr. Satheeshkumar Veeramani" Department="School of Engineering Cardiff University," Place="Cardiff."></Technical>
               <Technical Name="Dr. Sharath Kumar Jagnannathan" Department="Saint Peter's University," Place="Jersey City."></Technical>
               <Technical Name="Dr. Francesco Zirilli(Rtd)" Department="Universita di Roma La Sapienza," Place="Italy."></Technical>
               <Technical Name="Dr. Shilpa Mehta" Department="Auckland University of Technology," Place="Auckland, New Zealand."></Technical>
               <Technical Name="Dr.Pankaj Kumar" Department="University of New Mexico," Place="Mexico."></Technical>

               <p className="p-5 ml-[50px] mx-10 font-bold underline underline-offset-8 tracking-[1px]">National</p>
               <Technical Name="Dr.S.Vinod" Department="PSG College of Technology," Place="Coimbatore."></Technical>
               <Technical Name="Dr. K. Linga Durai" Department="Anna University Regional Campus," Place="Madurai."></Technical>
               <Technical Name="Dr. Santhakumar Mohan" Department="IIT Palakad," Place="Kerala."></Technical>
               <Technical Name="Mr. Raghul Manogaran" Department="Mercedes Benz Research & Development, " Place="Bangalore."></Technical>
               <Technical Name="Dr. Kathiravan Srinivasan" Department="Vellore Institute of Technology," Place="Vellore."></Technical>
               <Technical Name="Dr. K. Baskaran" Department="Alagappa Chettiar Government College of Engineering and Technology," Place="Karaikudi."></Technical>
               <Technical Name="Dr. N.A. Natraj" Department="Symbiosis International (Deemed University)," Place="Pune."></Technical>
               <Technical Name="Dr. Akhilesh Kumar Singh" Department="Adithya College of Engineering and Technology," Place="Andhra Pradesh."></Technical>
               <Technical Name="Dr. Ram Singh Sran" Department="Baba Hira Singh Bhattal Institute of Engineering & Technology," Place="Punjab."></Technical>
               <Technical Name="Dr. R.Ramakrishnan" Department="Vellore Institute of Technology," Place="Vellore."></Technical>
               <Technical Name="Dr. M.Ramu" Department="Amirta School of Engineering," Place="Coimbatore."></Technical>
               <Technical Name="Dr. S. Suresh Kumar" Department="KGiSL Institute of Technology," Place="Coimbatore."></Technical>
               <Technical Name="Dr. M.Venkatesan" Department="SASTRA Deemed to be University," Place="Thanjavur."></Technical>
               <Technical Name="Dr. B V D S Sekhar" Department="S R K R Engineering College," Place="Buimavaram, Andhra Pradesh."></Technical>
               <Technical Name="Dr. C. R. Rathish" Department="New horizon College of Engineering," Place="Bengaluru."></Technical>
               <Technical Name="Dr. M. Ravichandran" Department="Chandigarh University," Place="Punjab."></Technical>
               <Technical Name="Dr. K. Ramanathan" Department="Alagappa Chettiar Government College of Engineering and Technology," Place="Karaikudi."></Technical>
               <Technical Name="Dr. VVSSS Chakravarthy" Department="Raghu Institute of Technology," Place="Visakhapatnam."></Technical>
               <Technical Name="Dr. Pankaj Pathak" Department="Symbiosis International (Deemed University)," Place="Pune."></Technical>
               <Technical Name="Dr. S. Karthigai Lakshmi" Department="SSM Institute of Engineering and Technology," Place="Dindigul."></Technical>
               <Technical Name="Dr. M. Ravichandran" Department="K.Ramakrishnan College of Engineering," Place="Trichy."></Technical>
               <Technical Name="Dr. M. Feroskhan" Department="Vellore Institute of Technology," Place="Chennai."></Technical>
               <Technical Name="Dr. Saravana Mohan" Department="Kumaraguru College of Technology," Place="Coimbatore."></Technical>
               <Technical Name="Dr. R. Rajasekar" Department="Kongu Engineering College," Place="Erode."></Technical>
               <Technical Name="Dr. Kamatchi Sundari" Department="SRMIST-Ramapuram," Place="Chennai."></Technical>
               <Technical Name="Dr. T.Mohanraj" Department="Amrita University," Place="Coimbatore."></Technical>
               <Technical Name="Dr. K. B. Gurumoorthy" Department="National Institute of Technology," Place="Calicut."></Technical>





               <p className="p-5 mx-10 font-bold underline underline-offset-8 tracking-[1px]">Organizing Committee Members</p>
               <Committemem Name="Dr. T. A. Selvan" Designation="Professor"></Committemem>
               <Committemem Name="Dr. D. Pritima" Designation="Professor"></Committemem>
               <Committemem Name="Dr. V. Narasimharaj" Designation="Associate Professor"></Committemem>
               <Committemem Name="Dr. R. Gopinathan" Designation="Associate Professor"></Committemem>
               <Committemem Name="Dr. S. Balasubramani" Designation="Assistant Professor"></Committemem>
               <Committemem Name="Dr. R. Manikandan" Designation="Assistant Professor"></Committemem>
               <Committemem Name="Dr. G. Veerappan" Designation="Assistant Professor"></Committemem>
               <Committemem Name="Dr. L. Feroz Ali" Designation="Assistant Professor"></Committemem>
               <Committemem Name="Dr. N. Mithran" Designation="Assistant Professor"></Committemem>
               <Committemem Name="Dr. J. Justin Maria Hillary" Designation="Assistant Professor"></Committemem>
               <Committemem Name="Ms. S. Kannaki" Designation="Assistant Professor"></Committemem>
               <Committemem Name="Ms. J. Indirapriyadharshini" Designation="Assistant Professor"></Committemem>
               <Committemem Name="Ms. M. Bhuvaneswari" Designation="Assistant Professor"></Committemem>
               <Committemem Name="Ms. S. Nithya Priya" Designation="Assistant Professor"></Committemem>
               <Committemem Name="Mr. S. Panneerselvam" Designation="Assistant Professor"></Committemem>
               <Committemem Name="Ms. R. Priyadharshini" Designation="Assistant Professor"></Committemem>
               <Committemem Name="Mr. P. M. Arunkumar" Designation="Assistant Professor"></Committemem>
               <Committemem Name="Mr. M. Vigneshwaran" Designation="Assistant Professor"></Committemem>
               <Committemem Name="Mr. T. Vignesh" Designation="Assistant Professor"></Committemem>
               <br></br>
               <Common></Common>

            </div>
            
        </div>
    );

}

export default Committe;


// Dr. T. A. Selvan, Professor
// Dr. D. Pritima, Professor
// Dr. V. Narasimharaj, Associate Professor
// Dr. R. Gopinathan, Associate Professor
// Dr. S. Balasubramani, Assistant Professor
// Dr. R. Manikandan, Assistant Professor
// Dr. G. Veerappan, Assistant Professor
// Dr. L. Feroz Ali, Assistant Professor
// Dr. N. Mithran, Assistant Professor
// Dr. J. Justin Maria Hillary,	Assistant Professor
// Ms. S. Kannaki, Assistant Professor
// Ms. J. Indirapriyadharshini, Assistant Professor
// Ms. M. Bhuvaneswari, Assistant Professor
// Ms. S. Nithya Priya, Assistant Professor
// Mr. S. Panneerselvam, Assistant Professor
// Ms. R. Priyadharshini, Assistant Professor
// Mr. P. M. Arunkumar, Assistant Professor
// Mr. M. Vigneshwaran, Assistant Professor
// Mr. T. Vignesh,	Assistant Professor