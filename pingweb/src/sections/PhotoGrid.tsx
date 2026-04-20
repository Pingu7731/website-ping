
import { gridPhotos, gridPhotos2, gridPhotos3 } from "../constants";
import { useInView } from "react-intersection-observer";

const PhotoGrid = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: false, // stop when leave the screen
    });

    return (
        <div ref={ref} className="carousel pt-16" id="Photos">
            <div className="innerPart" style={{ animationPlayState: inView ? 'running' : 'paused' }}>
                {gridPhotos.map((photo) => (
                    <div key={photo.name} className="vrcCard hover:scale-110 ease-in-out duration-500 transition-all">
                        <img src={photo.path} alt={photo.name} className="w-full h-full object-cover rounded-xl " loading="lazy" decoding="async" />
                    </div>
                ))}
                {gridPhotos.map((photo) => (
                    <div key={`${photo.name}-dup`} className="vrcCard hover:scale-110 ease-in-out duration-500 transition-all">
                        <img src={photo.path} alt={photo.name} className="w-full h-full object-cover rounded-xl" loading="lazy" decoding="async" />
                    </div>
                ))}
            </div>
            <div className="innerPart2" style={{ animationPlayState: inView ? 'running' : 'paused' }}>
                {gridPhotos2.map((photo) => (
                    <div key={photo.name} className="vrcCard hover:scale-110 ease-in-out duration-500 transition-all">
                        <img src={photo.path} alt={photo.name} className="w-full h-full object-cover rounded-xl" loading="lazy" decoding="async" />
                    </div>
                ))}
                {gridPhotos2.map((photo) => (
                    <div key={`${photo.name}-dup`} className="vrcCard hover:scale-110 ease-in-out duration-500 transition-all">
                        <img src={photo.path} alt={photo.name} className="w-full h-full object-cover rounded-xl" loading="lazy" decoding="async" />
                    </div>
                ))}
            </div>
            <div className="innerPart" style={{ animationPlayState: inView ? 'running' : 'paused' }}>
                {gridPhotos3.map((photo) => (
                    <div key={photo.name} className="vrcCard hover:scale-110 ease-in-out duration-500 transition-all">
                        <img src={photo.path} alt={photo.name} className="w-full h-full object-cover rounded-xl " loading="lazy" decoding="async" />
                    </div>
                ))}
                {gridPhotos3.map((photo) => (
                    <div key={`${photo.name}-dup`} className="vrcCard hover:scale-110 ease-in-out duration-500 transition-all">
                        <img src={photo.path} alt={photo.name} className="w-full h-full object-cover rounded-xl" loading="lazy" decoding="async" />
                    </div>
                ))}
            </div>

        </div>
    );
};
export default PhotoGrid;