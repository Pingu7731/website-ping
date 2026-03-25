import { iconsList } from "../constants"

// declare
type IconType = {
    imgPath: string;
    alt: string;
};
const Icons = ({ icon }: { icon: IconType }) => {
    return (
        <div className="flex-none flex-center marquee-item">
            <img src={icon.imgPath} alt={icon.alt} />
        </div>
    )
}

const LogoSection = () => {
    return (

        <div className="md:my-20 my-10 relative" >
            <div className="gradient-edge" />
            <div className="gradient-edge" />
            <div className="marquee h-52">
                <div className="marquee-box md:gap-12 gap-5">
                    {[...iconsList, ...iconsList].map((icon, i) => (
                        <Icons
                            key={i}
                            icon={{
                                imgPath: icon.imgPath,
                                alt: ""
                            }} />
                    ))}
                </div>

            </div>

        </div>
    )

}
export default LogoSection