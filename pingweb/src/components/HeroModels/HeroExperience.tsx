import { useState } from "react";
import { heroVideo } from "../../constants";
import { ChromaKeyVideo } from 'chromakey-video-react';
export const HeroExperience = () => {
    const [active, setActive] = useState(0);


    return (
        <div className="relative w-full h-screen overflow-hidden">

            {/*Videos */}
            {heroVideo.map((src, index) => (
                <video
                    key={index}
                    src={src.path}
                    autoPlay
                    muted
                    loop
                    // playsInline
                    className={`absolute top-0 aspect-video object-cover transition-opacity duration-700
                        ${active === index ? "opacity-100 z-10" : "opacity-0 z-0"}
                    `}
                />
                //TODO : Remake LOOPED video
                // <ChromaKeyVideo
                //     src={src.path}
                //     // similarity={0.4}  // more aggressive removal
                //     blend={0.3}       // softer edges
                //     despill={true}    // clean up color fringing
                //     loop={true}
                //     autoPlay={true}
                //     className={`absolute top-0 aspect-video object-cover transition-opacity duration-700
                //          ${active === index ? "opacity-100 z-10" : "opacity-0 z-0"}
                //      `}
                // />
            ))}
            {/*Right Navbar */}

            <div className="absolute xl:right-10 right-5 top-1/3 -translate-y-1/3 pointer-events-auto flex flex-col gap-4 z-20">
                {heroVideo.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActive(index)}
                        className={`w-5 h-5 rounded-full transition-all
                            ${active === index ? "bg-white scale-125" : "bg-gray-400"}
                        `}
                    />
                ))}
            </div>



        </div>
    );
};

export default HeroExperience;