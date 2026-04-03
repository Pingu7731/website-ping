
import SocialIcon from "../components/HeroModels/Models/SocialIcons/SocialIcons"
import TitleHeader from "../components/TitleHeader"
import { socialIcons } from "../constants"

const SocialsSection = () => {
    return (

        <div id="Socials" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    titleString="Socials"
                    sub="You can find me through here"
                />

                <div className="tech-grid">
                    {socialIcons.map((icon) => {
                        let mouseMoved = false;

                        return (
                            <div
                                key={icon.name}
                                className="relative transition-all duration-500 hover:scale-105 hover:bg-gray-700 card-border tech-card overflow-hidden group xl:rounded-full rounded-lg cursor-pointer"
                                // 監測滑鼠click
                                onMouseDown={() => (mouseMoved = false)}
                                // 滑鼠有移動標記為拖拽
                                onMouseMove={() => (mouseMoved = true)}
                                // 滑鼠放開沒移動才跳
                                onMouseUp={() => {
                                    if (!mouseMoved) {
                                        window.open(icon.url, icon.target || "_blank", "noreferrer");
                                    }
                                }}
                            >
                                <div className="tech-card-content">
                                    <div className="tech-icon-wrapper">

                                        <SocialIcon models={icon as any} />
                                    </div>
                                    <div className="padding-x w-full">
                                        <p className="group-hover:text-white transition-colors">{icon.name}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

    )

}
export default SocialsSection