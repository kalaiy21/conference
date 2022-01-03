const Member = (props) => {
    return <li className="p-3">{ props.person }</li>;
}

const CommitteeContent = (props) => {

    const members = [...props.Members];

    return (

        <div className="bg-[#FFFBFB]">      

            <h1 className="underline underline-offset-8 font-bold p-5 mx-10">{props.Title}</h1>

            <ul className="p-3 mx-[8rem] list-disc">
                {members.map((member) => <Member person={member} />)}
            </ul>

        </div>
    );

}

export default CommitteeContent;