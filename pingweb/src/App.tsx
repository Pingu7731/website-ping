// console.log(import.meta.env);
// import LogoSection from "./sections/LogoSection.tsx";
import NavBar from "./components/Navbar.tsx";
import TypeWriter from "./components/TypeWriter.tsx";
import Hero from "./sections/Hero.tsx";
import ModelShowcase from "./sections/ModelShowcase.tsx";
import MilestoneSection from "./sections/MilestoneSection.tsx";
import SocialsSection from "./sections/SocialsSection.tsx";
import Footer from "./sections/Footer.tsx";
import PhotoGrid from "./sections/PhotoGrid.tsx";
const App = () => {
  //TODO: make custom cursor
  return (
    <>
      <NavBar />
      <Hero />
      <TypeWriter />
      <ModelShowcase />
      {/* <LogoSection /> */}
      <PhotoGrid />
      <MilestoneSection />
      <SocialsSection />
      <Footer />
    </>
  )
}
export default App