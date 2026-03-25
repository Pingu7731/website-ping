
import LogoSection from "./sections/LogoSection.tsx";
import NavBar from "./components/Navbar.tsx";
import TypeWriter from "./components/TypeWriter.tsx";
import Hero from "./sections/Hero.tsx";
import ModelShowcase from "./sections/ModelShowcase.tsx";
import MilestoneSection from "./sections/MilestoneSection.tsx";
const App = () => {
  return (
    <>

      <NavBar />
      <Hero />
      <TypeWriter />
      <ModelShowcase />
      <LogoSection />
      <MilestoneSection />

    </>
  )
}
export default App