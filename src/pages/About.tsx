import { ArquitecturaConocimiento } from '../main/components/About/conocimientos';
import AboutSection from '../main/components/About/aboutSection';
import { itemsNavbar } from '../data/itemsNavbar';
import { Helmet } from 'react-helmet-async';
import { absoluteUrl, DEFAULT_SEO } from '../seo';

// --- DATOS CONSTANTES (Para mantener el JSX limpio) ---
const PAGE_INFO = {
    title: "Sobre ARX STAR — Quiénes somos y nuestra motivación",
    description: "Conoce la filosofía de ARX STAR: enseñar para aprender, compartir conocimiento útil y acompañar a jóvenes en ingeniería de sistemas.",
    url: absoluteUrl('/about'),
};

const About = () => {
    // Definimos el Schema fuera para no ensuciar el render
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Sobre ARX STAR",
        "description": PAGE_INFO.description,
        "url": PAGE_INFO.url,
        "inLanguage": "es-ES"
    };

    return (
        <main className="relative min-h-screen bg-transparent selection:bg-blue-500 selection:text-white">
            <Helmet>
                {/* Metadatos Básicos */}
                <title>{PAGE_INFO.title}</title>
                <meta name="description" content={PAGE_INFO.description} />
                <link rel="canonical" href={PAGE_INFO.url} />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={DEFAULT_SEO.siteName} />
                <meta property="og:locale" content={DEFAULT_SEO.locale} />
                <meta property="og:title" content={PAGE_INFO.title} />
                <meta property="og:description" content={PAGE_INFO.description} />
                <meta property="og:url" content={PAGE_INFO.url} />

                {/* Twitter */}
                <meta name="twitter:card" content={DEFAULT_SEO.twitterCard} />
                <meta name="twitter:title" content={PAGE_INFO.title} />
                <meta name="twitter:description" content={PAGE_INFO.description} />

                {/* Schema */}
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>

            {/* CORRECCIÓN BACKGROUND: Sintaxis correcta de Tailwind para bg-size */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[length:6rem_6rem] pointer-events-none" />

            {/* Layout Principal */}
            <section className="relative max-w-7xl mx-auto flex flex-col gap-y-28 py-24 px-6 md:py-48">
                
                {/* SECCIÓN 1: QUIENES SOMOS */}
                <AboutSection 
                    titulo1="QUIENES" 
                    titulo2="SOMOS" 
                    contenido={
                        // Texto extraído para mejor lectura in-line, o podrías sacarlo a una constante
                        <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-xl">
                            ARX STAR nace para exponer, sin filtros, el camino de un ingeniero en constante evolución.<br />
                            Nuestra filosofía es simple: <strong className='font-semibold text-slate-800'>enseñar es la mejor forma de aprender.</strong> No buscamos la verdad absoluta, sino la utilidad real. Si compartir estos conocimientos te ayuda a crecer, hemos cumplido <strong className="font-semibold text-slate-900">nuestra misión.</strong>
                        </p>
                    } 
                />

                {/* SECCIÓN 2: MOTIVACIÓN */}
                <AboutSection 
                    titulo1="NUESTRA" 
                    titulo2="MOTIVACION" 
                    contenido={
                        <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-xl">
                            Nuestra motivación nace de creer en el potencial de los jóvenes.
                            <strong className="font-semibold text-slate-800"> Nos mueve la idea de facilitar el acceso al conocimiento</strong> en ingeniería de sistemas, porque estamos convencidos de que <strong className="font-semibold text-slate-900">al ayudarte a no perderte, nosotros también evolucionamos contigo.</strong>
                        </p>
                    } 
                />

                {/* SECCIÓN 3: ARQUITECTURA */}
                <ArquitecturaConocimiento ConocimientosData={itemsNavbar} />

            </section>
        </main>
    );
};

export default About;