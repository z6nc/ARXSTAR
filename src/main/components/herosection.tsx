import { ArrowDown, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden selection:bg-blue-500 selection:text-white">

      {/* 1. FONDO: Grid Infinito + Vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-4rem_4rem] pointer-events-none" />


      {/* Blobs de color muy sutiles que se mueven (Ambiente) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-[100px] animate-pulse delay-1000" />



      {/* 3. CONTENIDO CENTRAL MASIVO */}
      <div className="relative z-10 flex flex-col items-center text-center">

        {/* Badge Futurista Superior */}
        <div className="mb-6 animate-fade-in-down">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
              Portfolio V.2025
            </span>
          </div>
        </div>

        {/* TIPOGRAFÍA PRINCIPAL */}
        <div className="relative font-black leading-[0.85] tracking-tighter select-none mix-blend-darken group cursor-default">

          {/* Palabra 1: ARX */}
          <h1 className="text-[18vw] md:text-[10rem] xl:text-[11rem] 2xl:text-[13rem] text-transparent bg-clip-text bg-linear-to-b from-slate-900 to-slate-700 drop-shadow-2xl transition-transform duration-700 group-hover:-translate-y-2">
            ARX
          </h1>

          {/* Separador Energético (La línea entre palabras) */}
          <div className="relative h-2 md:h-4 w-full my-2 md:my-0 overflow-hidden">
            <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200" />
            <div className="absolute top-1/2 left-0 w-full h-px bg-yellow-400 shadow-[0_0_10px_#facc15] animate-[scan-horizontal_3s_ease-in-out_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-white">
              <Zap size={24} className="text-yellow-400 fill-yellow-400 animate-pulse" />
            </div>
          </div>

          {/* Palabra 2: STAR */}
          <h1 className="text-[18vw] md:text-[10rem] xl:text-[11rem] 2xl:text-[13rem] text-transparent bg-clip-text bg-linear-to-b from-slate-900 to-slate-700 drop-shadow-2xl transition-transform duration-700 group-hover:translate-y-2">
            STAR
          </h1>

          {/* Efecto "Ghost" (Contorno detrás para profundidad) */}
          <div className="absolute inset-0 text-[18vw] md:text-[10rem] xl:text-[11rem] 2xl:text-[13rem] text-transparent [-webkit-text-stroke:1px_rgba(203,213,225,0.4)] -z-10 translate-x-2 translate-y-2 pointer-events-none" aria-hidden="true">
            <div className="flex flex-col items-center">
              <span>ARX</span>
              <span className="mt-4 md:mt-0">STAR</span>
            </div>
          </div>
        </div>

      </div>

      {/* 4. SCROLL INDICATOR EVOLUCIONADO */}
      <div className="absolute bottom-12 z-20">
        <a
          href="#about"
          className="relative group flex items-center justify-center w-16 h-24"
        >
          {/* Anillo Giratorio Exterior */}
          <div className="absolute inset-0 border border-dashed border-slate-300 rounded-full animate-[spin_10s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Cápsula de Vidrio */}
          <div className="relative flex items-center justify-center w-12 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-slate-300/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] ring-1 ring-white/50 group-hover:bg-white/30 transition-all duration-300 overflow-hidden">

            {/* Brillo Líquido Interno */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100/20 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />

            {/* Flecha Animada */}
            <ArrowDown
              className="text-slate-900 animate-bounce-slow"
              size={28}
              strokeWidth={1.5}
            />
          </div>
        </a>

        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Scroll Down
        </span>
      </div>

      {/* ESTILOS DE ANIMACIÓN PERSONALIZADOS */}
      <style >{`
        @keyframes scan-horizontal {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-20%); opacity: 0.5; }
          50% { transform: translateY(10%); opacity: 1; }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;