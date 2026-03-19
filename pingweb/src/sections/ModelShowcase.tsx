import catPic from "../images/cat.png"
import foshuniapic from "../images/foshunia.png"
import yopte from "../images/yopte.png"
import bunny from "../images/bunny.png"
const ModelShowcase = () => {
    return (

        <div id="model" className="app-showcase">
            {/* <div>Me</div> */}
            <div className="w-full">
                <div className="showcaselayout">


                    {/* catPic */}
                    <div className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src={catPic} alt="aa" className="object-[42%_20%]" />
                        </div>
                    </div>
                    <div className="text-content">
                        <h2>asdasd</h2>
                        <p className="text-white-50 md:text-xl"> paragrath</p>
                    </div>


                    {/* foshunia */}
                    <div className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src={foshuniapic} alt="aa" className="object-[40%_20%]" />
                        </div>
                    </div>
                    <div className="text-content">
                        <h2>asdasd</h2>
                        <p className="text-white-50 md:text-xl"> paragrath</p>
                    </div>


                    {/* yopte */}

                    <div className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src={yopte} alt="aa" />
                        </div>
                    </div>
                    <div className="text-content">
                        <h2>asdasd</h2>
                        <p className="text-white-50 md:text-xl"> paragrath</p>
                    </div>


                    {/* bunny */}
                    <div className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src={bunny} alt="aa" className="object-[34%_0%]" />
                        </div>
                    </div>
                    <div className="text-content">
                        <h2>asdasd</h2>
                        <p className="text-white-50 md:text-xl"> paragrath</p>
                    </div>


                </div>
            </div>
        </div>
    )

}
export default ModelShowcase