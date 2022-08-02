import Heading from "../General/Heading";
import Title from "../General/Title";
import CommitteeContent from "./CommitteeContent";
import CommitteeContent1 from "./CommitteeContent1";
import Committemem from "./Co-or";
import Common from "./Commondetails";
const Committe = () => {

    // const AdvisoryMembers = ['Dr. J. Janet, Principal'];
    // const Convener = ['Dr. M. Lydia, Professor & Head, Mechatronics Engineering'];
    // const TechnicalCommittee = ['Dr. K.B. Gurumoorthy, National Institute of Technology, Calicut, India', 'Dr.Kathiravan Srinivasan, Vellore Institute of Technology, Vellore', 'Dr.T.Mohanraj, Amritha University, Coimbatore', 'Dr. Kamatchi Sundari, SRMIST-Ramapuram, Chennai', 'Dr. Akhilesh Kumar Singh, Adithya College of Engineering and Technology, Andhra Pradesh', 'Dr.R.Rajasekar, HOD/Mech, Kongu Engineering College, Erode', 'Dr.S.Vinod, PSG College of Technology,Coimbatore', 'Dr. Ram Singh Sran, Baba Hira Singh Bhattal Institute of Engineering & Technology, Lehragaga, Sangrur, Punjab', 'Dr.K.Lingadurai, University College of Engineering,  Dindigul', 'Dr.R.Rajasekar, Kongu Engineering College,Erode', 'Dr.M.Ramu, Amirta School of Engineering, Coimbatore', 'Dr.Saravana Mohan, Kumaraguru College of Technology, Coimbatore', 'Dr.Ramakrishnan.R, Vellore Institute of Technology, Vellore', 'Dr. M. Feroskhan, Vellore Institute of Technology, Chennai', 'Dr.M.Venkatesan, SASTRA Deemed to be University, Thanjavur', 'Dr.M.Ravichandran, K.Ramakrishnan College of Engineering, Trichy', 'Dr.S.Karthigai Lakshmi, SSM Institute of Engineering and Technology, Dindigul', 'Dr. B V D S Sekhar, S R K R Engineering College, Buimavaram, West Godavari District, Andhra Pradesh', 'Dr.VVSSS Chakravarthy, Raghu Institute of Technology, Dakamarri, Visakhapatnam, Andhra Pradesh', 'Dr. S. Suresh Kumar, KGiSL Institute of Technology, Coimbatore', 'Dr. K. Baskaran, Alagappa Chettiar Government College of Engineering and Technology , Karaikudi'];
    // const InternationalAdvisory = ['Dr. Rajkumar Palaniappan, University of Technology Bahrain, Bahrain', 'Dr. Rathinaraja Jeyaraj, Kyungpook National University, South Korea', 'Zahra Badiei, Shiraz University, Shiraz, Iran', 'Yoash Levron, The Viterbi Faculty of Electrical Engineering, Technion Israel Institute of Technology, Haifa , Israel']

    return (
        <div>
            <Heading />
            <Title title="Organizing Committee"/>
            <div className="my-[3rem] px-[5rem]">
               <CommitteeContent1 Title = "Chief Patron" Name="Smt. S. Malarvizhi" Designation="Managing Trustee" Organisation="Sri Krishna Institutions" Location="Coimbatore" />
               <CommitteeContent1 Title = "Patron" Name="Dr. J. Janet" Designation="Principal" Organisation="Sri Krishna College Engineering and Technology" Location="Coimbatore" />
               <CommitteeContent1 Title = "Convener" Name="Dr. M. Lydia" Designation="Professor & Head" Dept = "Department of Mechatronics Engineering," Organisation="Sri Krishna College Engineering and Technology" Location="Coimbatore" />
               <CommitteeContent1 Title = "Co-ordinators" Name="Ms. K. Ananthi" Name1="Mr. S. Madhan Kumar," Designation="Assistant Professors" Dept = "Department of Mechatronics Engineering," Organisation="Sri Krishna College Engineering and Technology" Location="Coimbatore" />
               <p className="p-5 mx-10 font-bold underline underline-offset-8 tracking-[1px]">Committee Members</p>
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