import Button from "../components/button"
import { HeroExperience } from "../components/HeroModels/HeroExperience"
import { names } from "../constants"

const Hero=()=> {
    return (
      <section id="hero"className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10 ">
          
            {/* <img src="" alt="" className=""/> */}
        </div>

        {/* hero layout is defined in index.css */}
        <div className="hero-layout">
        {/* Left is hero content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
        <div className="flex flex-col gap-7">
            <div className="hero-text">
            <h1> Hello! Im Ping7731</h1>
            <h1> 
                You can call me   
                <span className="slide">
                <span className="wrapper">
                {names.map((word) => (
                    <span key={word.name} className="flex items-center md:gap-3 gap-1 pb-2">
                        
                    {/* <img 
                    src="" 
                    alt=""
                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                     /> */}
                    <span>{word.name}</span>
                    </span>
                    
                ))}
            </span>
            </span>
            </h1>
           
         
        </div>
         <p>I do what ever i want :3 </p>
         {/* pass param */}
         <Button
         className="md:w-80 md:h-16 w-60 h-12"
         id="button-hero"
         text="AAAAA"
         />
        </div>
        </header>

        {/* right is 3d thingy */}
        <figure>
            <div className="hero-3d-layout">
                <HeroExperience />
            </div>
        </figure>
        </div>

      </section>
    )
}
export default Hero