
// import { gridPhotos, gridPhotos2, gridPhotos3 } from "../constants";
import { gridPhotos } from "../constants";
const PhotoGrid = () => {
    return (
        <div className="carousel pt-16" id="Photos">
            <div className="innerPart">
                {gridPhotos.map((photo) => (
                    <div key={photo.name} className="vrcCard hover:scale-110 ease-in-out duration-500 transition-all">
                        <img src={photo.path} alt={photo.name} className="w-full h-full object-cover rounded-xl " />
                    </div>
                ))}
                {gridPhotos.map((photo) => (
                    <div key={`${photo.name}-dup`} className="vrcCard hover:scale-110 ease-in-out duration-500 transition-all">
                        <img src={photo.path} alt={photo.name} className="w-full h-full object-cover rounded-xl" />
                    </div>
                ))}
            </div>
            {/* <div className="innerPart2">
                {gridPhotos2.map((photo) => (
                    <div key={photo.name} className="vrcCard hover:scale-110 ease-in-out duration-500 transition-all">
                        <img src={photo.path} alt={photo.name} className="w-full h-full object-cover rounded-xl" />
                    </div>
                ))}
                {gridPhotos2.map((photo) => (
                    <div key={`${photo.name}-dup`} className="vrcCard hover:scale-110 ease-in-out duration-500 transition-all">
                        <img src={photo.path} alt={photo.name} className="w-full h-full object-cover rounded-xl" />
                    </div>
                ))}
            </div>
            <div className="innerPart">
                {gridPhotos3.map((photo) => (
                    <div key={photo.name} className="vrcCard hover:scale-110 ease-in-out duration-500 transition-all">
                        <img src={photo.path} alt={photo.name} className="w-full h-full object-cover rounded-xl " />
                    </div>
                ))}
                {gridPhotos3.map((photo) => (
                    <div key={`${photo.name}-dup`} className="vrcCard hover:scale-110 ease-in-out duration-500 transition-all">
                        <img src={photo.path} alt={photo.name} className="w-full h-full object-cover rounded-xl" />
                    </div>
                ))}
            </div> */}

        </div>
    );
};
export default PhotoGrid;