import Typewriter from "typewriter-effect"

const TypeWriter = () => {
    //TODO window detect , only start when visible
    return (
        <div id="Models" className="flex justify-center items-center text-3xl md:text-5xl pt-24 font-bold">
            <h1>
                <Typewriter
                    options={{
                        strings: ['These are all me !!', 'Looks familiar?'],
                        autoStart: true,
                        delay: 67,
                        loop: true,
                    }}
                />
            </h1>

        </div>

    )

}
export default TypeWriter