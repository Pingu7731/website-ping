import Typewriter from "typewriter-effect"

const TypeWriter = () => {
    //TODO window detect , only start when visible
    return (
        <div className="flex justify-center items-center text-5xl pt-10 font-bold">
            <h1>
                <Typewriter
                    options={{
                        strings: ['These are all me !!'],
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