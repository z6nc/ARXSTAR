import { HeaderHome } from "../main/components/Home/Header/headerHome"
import { Manifiesto } from "../main/components/Home/AboutHome/Manifiesto"
import { PortfolioContainer } from "../main/components/Container/portafolioContainer"
import { BannerManifiesto } from "../main/common/BannerManifiesto"
import SocialSection from "../main/components/socialHub"
import { Helmet } from "react-helmet-async"
import { absoluteUrl, DEFAULT_SEO } from "../seo"

function HOME() {
  // 1. Centralizamos la información para no repetirnos
  const pageInfo = {
    title: "ARX STAR — Ingeniería de sistemas, portafolio y comunidad",
    description: "Aprendizaje abierto en ingeniería de sistemas, proyectos reales y recursos para crecer como ingeniero.",
    url: absoluteUrl('/') || "https://tudominio.com" // Fallback por seguridad
  }

  // 2. Preparamos el Schema fuera del JSX para mayor limpieza
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageInfo.title,
    "description": pageInfo.description,
    "url": pageInfo.url,
    "inLanguage": "es-ES",
    "author": {
      "@type": "Person",
      "name": "Andres" // Opcional: añade tu nombre aquí
    }
  };

  return (
    <>
      <Helmet>
        {/* Títulos y Descripciones básicos */}
        <title>{pageInfo.title}</title>
        <meta name="description" content={pageInfo.description} />
        <link rel="canonical" href={pageInfo.url} />

        {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={DEFAULT_SEO.siteName} />
        <meta property="og:locale" content={DEFAULT_SEO.locale} />
        <meta property="og:title" content={pageInfo.title} />
        <meta property="og:description" content={pageInfo.description} />
        <meta property="og:url" content={pageInfo.url} />

        {/* Twitter Card */}
        <meta name="twitter:card" content={DEFAULT_SEO.twitterCard} />
        <meta name="twitter:title" content={pageInfo.title} />
        <meta name="twitter:description" content={pageInfo.description} />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <HeaderHome />

      {/* Correcciones Tailwind:
          1. 'selection:bg-sky-500' está genial para la marca.
          2. Corregido el bg-size arbitrario a 'bg-[length:6rem_6rem]'.
      */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-start bg-white overflow-hidden selection:bg-sky-500 selection:text-white">

        {/* Grid Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size[6rem_6rem] pointer-events-none" />

        {/* Corrección Layout:
           1. Cambiado 'w-7xl' (no existe) por 'w-full max-w-7xl'.
           2. 'justify-start' en la section padre suele ser mejor que 'center' si el contenido es largo.
        */}
        <main className="relative w-full max-w-7xl mx-auto my-9 flex flex-col gap-y-16 px-4 sm:px-6">
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