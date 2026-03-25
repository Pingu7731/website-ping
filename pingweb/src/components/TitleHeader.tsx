
type props = {
    titleString: string;
};

const TitleHeader = ({ titleString }: props) => {
    return (
        <div className="flex flex-col items-venter gap-5">
            <div className="hero-badge">
                <p>{titleString}</p>
            </div>
        </div>

    )

}
export default TitleHeader