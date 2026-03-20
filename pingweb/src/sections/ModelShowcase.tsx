import { modelName } from "../constants";
// import gsap from 'gsap'
const ModelShowcase = () => {
    return (

        <div id="model" className="app-showcase">
            {/* <div>Me</div> */}
            <div className="w-full ">
                <div className="showcaselayout ">
                    {/*xl:[&:has(.image-wrapper:hover)]:flex-2  --> make sure im hovering image*/}
                    {modelName.map((item, i) =>
                        <div key={i} className="
                        first-project-wrapper
                        flex-1
                        transition-all duration-500
                        xl:[&:has(.image-wrapper:hover)]:flex-2 
                        ">
                            <div className="
                            image-wrapper opacity-100 transition-all duration-300  
                            xl:opacity-50 
                            xl:hover:w-full 
                            xl:group-hover:opacity-50
                            xl:hover:opacity-100">
                                <img src={item.img}
                                    alt=""
                                    className={item.pos}
                                />
                            </div>
                            <div className="text-content">
                                <h2>
                                    {item.name}
                                </h2>
                                <p className="text-white-50">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )

}
export default ModelShowcase