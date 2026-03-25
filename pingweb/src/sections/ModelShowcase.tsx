import { useRef } from "react";
import { modelName } from "../constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger)

const ModelShowcase = () => {
    const sectionRef = useRef(null);
    const modelRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {

        modelRefs.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.1,
                    delay: 0.2 * (index + 1),
                    // trigger here
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            );
        });
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.5 }
        );
    }, []);
    return (

        <div ref={sectionRef} className="app-showcase">

            {/* <div>Me</div> */}
            <div className="w-full ">
                <div className="showcaselayout ">
                    {/*xl:[&:has(.image-wrapper:hover)]:flex-2  --> make sure im hovering image*/}
                    {modelName.map((item, i) =>

                        <div key={i}
                            ref={(el) => {
                                modelRefs.current[i] = el;
                            }}
                            className="
                        first-project-wrapper
                        flex-1
                        transition-all duration-500
                        xl:[&:has(.image-wrapper:hover)]:flex-2 
                        ">
                            <div id={"img_" + i.toString()} className="
                            image-wrapper opacity-100 transition-all duration-300  
                            xl:opacity-50 
                            xl:hover:w-full 
                            xl:group-hover:opacity-50
                            xl:hover:opacity-100">
                                <a href={item.links} target="_blank">
                                    <img src={item.img}
                                        alt=""
                                        className={item.pos}
                                    />
                                </a>
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