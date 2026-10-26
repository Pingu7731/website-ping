
import { useEffect, useState } from "react";
import { gridPhotos, gridPhotos2, gridPhotos3 } from "../constants";
import { useInView } from "react-intersection-observer";

const PhotoGrid = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: false, // stop when leave the screen
    });
    // lazy loading doesnt work well inside the sliding row (photo only start loading when it already slide in = blank card),
    // so load all photos when the browser is free after page load (or when the user get close to here, whichever first)
    const { ref: nearRef, inView: nearView } = useInView({
        rootMargin: "1000px 0px",
        triggerOnce: true,
    });
    const [idle, setIdle] = useState(false);

    useEffect(() => {
        const onLoad = () => {
            if ("requestIdleCallback" in window) requestIdleCallback(() => setIdle(true));
            else setTimeout(() => setIdle(true), 1000); // safari
        };

        if (document.readyState === "complete") {
            onLoad();
            return;
        }
        window.addEventListener("load", onLoad, { once: true });
        return () => window.removeEventListener("load", onLoad);
    }, []);

    const loading = nearView || idle ? "eager" : "lazy";

    return (
        <div ref={(el) => { ref(el); nearRef(el); }} className="carousel pt-16" id="Photos">
            <div className="innerPart" style={{ animationPlayState: inView ? 'running' : 'paused' }}>
                {gridPhotos.map((photo) => (
                    <div key={photo.name} className="vrcCard md:hover:scale-110 ease-in-out duration-500 transition-all">
                        <img src={photo.path} alt={photo.name} className="w-full h-full object-cover rounded-xl " loading={loading} decoding="async" />
                    </div>
                ))}
                {gridPhotos.map((photo) => (
                    <div key={`${photo.name}-dup`} className="vrcCard md:hover:scale-110 ease-in-out duration-500 transition-all">
                        <img src={photo.path} alt={photo.name} className="w-full h-full object-cover rounded-xl" loading={loading} decoding="async" />
                    </div>
                ))}
            </div>
            <div className="innerPart2" style={{ animationPlayState: inView ? 'running' : 'paused' }}>
                {gridPhotos2.map((photo) => (
                    <div key={photo.name} className="vrcCard md:hover:scale-110 ease-in-out duration-500 transition-all">
                        <img src={photo.path} alt={photo.name} className="w-full h-full object-cover rounded-xl" loading={loading} decoding="async" />
                    </div>
                ))}
                {gridPhotos2.map((photo) => (
                    <div key={`${photo.name}-dup`} className="vrcCard md:hover:scale-110 ease-in-out duration-500 transition-all">
                        <img src={photo.path} alt={photo.name} className="w-full h-full object-cover rounded-xl" loading={loading} decoding="async" />
                    </div>
                ))}
            </div>
            <div className="innerPart" style={{ animationPlayState: inView ? 'running' : 'paused' }}>
                {gridPhotos3.map((photo) => (
                    <div key={photo.name} className="vrcCard md:hover:scale-110 ease-in-out duration-500 transition-all">
                        <img src={photo.path} alt={photo.name} className="w-full h-full object-cover rounded-xl " loading={loading} decoding="async" />
                    </div>
                ))}
                {gridPhotos3.map((photo) => (
                    <div key={`${photo.name}-dup`} className="vrcCard md:hover:scale-110 ease-in-out duration-500 transition-all">
                        <img src={photo.path} alt={photo.name} className="w-full h-full object-cover rounded-xl" loading={loading} decoding="async" />
                    </div>
                ))}
            </div>

        </div>
    );
};
export default PhotoGrid;