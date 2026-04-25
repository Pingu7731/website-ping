import { useState, useEffect } from "react";
import { heroVideo } from "../../constants";

export const HeroExperience = () => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        let intervalId: ReturnType<typeof setInterval>;

        const handleResize = () => {
            clearInterval(intervalId);
            // Only auto-play on mobile devices (width < 640px)
            if (window.innerWidth < 640) {
                intervalId = setInterval(() => {
                    setActive((prevActive) => (prevActive + 1) % heroVideo.length);
                }, 8000);
            }
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);

        return () => {
            clearInterval(intervalId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);


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
                    className={`absolute top-[20vh] xl:top-0 aspect-video object-cover transition-opacity duration-700
                        ${active === index ? "opacity-100 z-10" : "opacity-0 z-0"}
                    `}
                />


            ))}
            {/*Right Navbar */}

            <div className="absolute xl:right-10 right-5 top-1/3 -translate-y-1/3 pointer-events-auto hidden md:flex flex-col gap-4 z-20">
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