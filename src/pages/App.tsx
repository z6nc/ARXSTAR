import Navbar from "../main/components/navbar"
import HeroSection from "../main/components/herosection"
import AboutSection from "../main/components/aboutSection"
import { PortfolioContainer } from "../main/components/Container/portafolioContainer"
import SocialHub from "../main/components/socialHub"
import Footer from "../main/components/Footer/footer"
function App() {

  return (
    <>
    
      <Navbar />
      <main className="w-full min-h-screen relative bg-white overflow-hidden">
        <HeroSection />
        <AboutSection />
        <PortfolioContainer />
        <SocialHub />
      </main>
      <Footer />
    </>
  )

}

export default App
