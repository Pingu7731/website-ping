

type props = {
    titleString: string;
    sub: string;
};

const TitleHeader = ({ titleString, sub }: props) => {
    return (

        <div className="flex flex-col items-center gap-4">
            <div id="milestones" className="pb-20"></div>
            <div className="hero-badge">
                <p >{titleString}</p>
            </div>
            <div className="font-semibold md:text-5xl text-3xl text-center">
                <p>{sub}</p>
            </div>
        </div>

    )

}
export default TitleHeader