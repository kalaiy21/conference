import Heading from "../General/Heading";
import Title from "../General/Title";

const Submission = () => {

    return (
      <div>
          <Heading />
          <Title title="Submission"/>
          <div className="mt-[3rem] px-[5rem] leading-[2rem]">
             <p>
                <b><span>Instructions to Authors</span></b>
                <p>Authors are requested to send their manuscript (in doc) to the Conference Email id: <a className="text-sky-500" href="mailto:iciriac@skcet.ac.in">iciriac@skcet.ac.in</a> or submit by clicking button below.</p>
             </p>

            <hr className="border-[1px] opacity-40 border-[#9e9e9e] my-[1.5rem]"></hr>

            <p>
                Ensure the below points before sending the manuscript.
                <ul className="list-disc pl-[2rem]">
                    <li>Subject should be Paper submission to ICIRAC 2022 Conference.</li>
                    <li>Kindly include all authors details with communication email id in the manuscript.</li>
                    <li>Paper length must be a minimum of 6 pages and a maximum of 8 pages.</li>
                    <li>Manuscripts with plagiarism less than 20% only will be considered for the review process.</li>
                    <li>The Manuscript should strictly follow the AIP paper template which is available below:</li>
                </ul>
            </p>

            <hr className="border-[1px] opacity-40 border-[#9e9e9e] my-[1.5rem]"></hr>

            <p>
                <b><span>Manuscript Template</span></b>
                <p className=" mb-[1rem]">AIP conference templates contain guidance text for composing and formatting conference papers. Please ensure that all guidance text is removed from your conference paper prior to submission to the conference.</p>
                <a href="https://aip.scitation.org/apc/authors/preppapers" className="underline text-sky-500" target="_blank">AIP Template</a>
            </p>

            <div className="py-[2rem] flex justify-center">
                <a className="px-[2rem] py-[1rem] bg-[#206dac] rounded-xl text-white" href="http://">Submit Manuscript</a>
            </div>

          </div>
          
      </div>
  );

}

export default Submission;