// import HeroSection from "../main/components/herosection" borrar si ya no es necesario
import { HeaderHome } from "../main/components/Home/Header/headerHome"
import { Manifiesto } from "../main/components/Home/AboutHome/Manifiesto"
import { PortfolioContainer } from "../main/components/Container/portafolioContainer"
import { BannerManifiesto } from "../main/common/BannerManifiesto"
import SocialSection from "../main/components/socialHub"
function HOME() {

  return (
    <>
        <HeaderHome />
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden selection:bg-sky-500 selection:text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[6rem_6rem] pointer-events-none" />

      <main className="w-full lg:w-7xl mx-auto my-9 min-h-screen relative bg-transparent overflow-hidden flex flex-col gap-y-9">
        <Manifiesto />
        <PortfolioContainer />
        <BannerManifiesto />
      </main>
        <SocialSection />
    </section>
    </>
  )

}

export default HOME
