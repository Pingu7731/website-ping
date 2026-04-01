
import SocialIcon from "../components/HeroModels/Models/SocialIcons/SocialIcons"
import TitleHeader from "../components/TitleHeader"
import { socialIcons } from "../constants"

const SocialsSection = () => {
    return (
        //TODO： FLex -col for arraging all social in one row
        <div id="Socials" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    titleString="Socials"
                    sub="You can find me through here"
                />

                <div className="tech-grid">
                    {socialIcons.map((icon) => (
                        <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                            {/* this thing broken */}
                            {/* TODO: Fix animated bg for the card */}
                            {/* <div className="tech-card tech-card-animated-bg" /> */}
                            {/* this thing broken */}

                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <SocialIcon models={icon as any} />
                                </div>
                                <div className="padding-x w-full">
                                    <p>{icon.name}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>

    )

}
export default SocialsSection