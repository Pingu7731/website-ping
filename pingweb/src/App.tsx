
import LogoSection from "./components/LogoSection.tsx";
import NavBar from "./components/Navbar.tsx";
import TypeWriter from "./components/TypeWriter.tsx";
import Hero from "./sections/Hero.tsx";
import ModelShowcase from "./sections/ModelShowcase.tsx";
const App = () => {
  return (
    <>

      <NavBar />
      <Hero />
      <TypeWriter />
      <ModelShowcase />
      <LogoSection />
    </>
  )
}
export default App