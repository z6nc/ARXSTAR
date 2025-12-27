import { ArquitecturaConocimiento } from '../main/components/About/conocimientos';
import AboutSection from '../main/components/About/aboutSection';
import { Motivacion } from '../main/components/About/Motivacion';
import { itemsNavbar } from '../data/itemsNavbar';

// --- COMPONENTE PRINCIPAL: PAGE ABOUT ---

const About = () => {
    return (
        <main className="min-h-screen bg-transparent selection:bg-blue-500 selection:text-white relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[6rem_6rem] pointer-events-none" />

            <section className="relative max-w-7xl mx-auto flex flex-col gap-y-28  py-48">
                <AboutSection />
                <Motivacion />
                 <ArquitecturaConocimiento ConocimientosData={itemsNavbar} />
              
            </section>
        </main>
    );
};

export default About;