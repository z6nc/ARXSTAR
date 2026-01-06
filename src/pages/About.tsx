import { ArquitecturaConocimiento } from '../main/components/About/conocimientos';
import AboutSection from '../main/components/About/aboutSection';
import { itemsNavbar } from '../data/itemsNavbar';
import { Helmet } from 'react-helmet-async';
import { absoluteUrl, DEFAULT_SEO } from '../seo';

// --- COMPONENTE PRINCIPAL: PAGE ABOUT ---

const About = () => {
    return (
        <main className="min-h-screen bg-transparent selection:bg-blue-500 selection:text-white relative">
            <Helmet>
                <title>Sobre ARX STAR — Quiénes somos y nuestra motivación</title>
                <meta name="description" content="Conoce la filosofía de ARX STAR: enseñar para aprender, compartir conocimiento útil y acompañar a jóvenes en ingeniería de sistemas." />
                {absoluteUrl('/about') && <link rel="canonical" href={absoluteUrl('/about')} />}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={DEFAULT_SEO.siteName} />
                <meta property="og:locale" content={DEFAULT_SEO.locale} />
                <meta property="og:title" content="Sobre ARX STAR — Quiénes somos y nuestra motivación" />
                <meta property="og:description" content="Conoce la filosofía de ARX STAR: enseñar para aprender, compartir conocimiento útil y acompañar a jóvenes en ingeniería de sistemas." />
                {absoluteUrl('/about') && <meta property="og:url" content={absoluteUrl('/about')} />}
                <meta name="twitter:card" content={DEFAULT_SEO.twitterCard} />
                <meta name="twitter:title" content="Sobre ARX STAR — Quiénes somos y nuestra motivación" />
                <meta name="twitter:description" content="Conoce la filosofía de ARX STAR: enseñar para aprender, compartir conocimiento útil y acompañar a jóvenes en ingeniería de sistemas." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "name": "Sobre ARX STAR",
                    "url": absoluteUrl('/about') || undefined,
                    "inLanguage": "es-ES"
                })}</script>
            </Helmet>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[6rem_6rem] pointer-events-none" />

            <section className="relative max-w-7xl mx-auto flex flex-col gap-y-28  py-48">
                <AboutSection titulo1="QUIENES" titulo2="SOMOS" contenido={
                    <>
                        <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-xl">
                            ARX STAR nace para exponer, sin filtros, el camino de un ingeniero en constante evolución.<br></br>
                            Nuestra filosofía es simple: <strong className='font-semibold text-slate-800'>enseñar es la mejor forma de aprender.</strong> No buscamos la verdad absoluta, sino la utilidad real. Si compartir estos conocimientos te ayuda a crecer, hemos cumplido <strong className="font-semibold text-slate-900">nuestra misión.</strong></p>
                    </>
                } />
                <AboutSection titulo1="NUESTRA" titulo2="MOTIVACION" contenido={
                    <>
                        <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-xl">
                            Nuestra motivación nace de creer en el potencial de los jóvenes.
                            <strong className="font-semibold text-slate-800">Nos mueve la idea de facilitar el acceso al conocimiento</strong> en ingeniería de sistemas, porque estamos convencidos de que <strong className="font-semibold text-slate-900">al ayudarte a no perderte, nosotros también evolucionamos contigo.</strong>
                        </p>
                    </>
                } />
                <ArquitecturaConocimiento ConocimientosData={itemsNavbar} />

            </section>
        </main>
    );
};

export default About;