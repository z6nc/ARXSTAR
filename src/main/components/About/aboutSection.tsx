import {Cpu, ScanLine, Activity } from 'lucide-react';

const AboutSection = () => {
    return (
        <section className=" w-full  h-full  flex justify-center items-center py-32  overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">

                    {/* --- COLUMNA IZQUIERDA: Tarjeta Holográfica --- */}
                    <div className="md:col-span-5 relative group perspective-1000">

                        {/* CONTENEDOR GLASS "HUD" */}
                        <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] p-8 md:p-10 transition-transform duration-500 hover:rotate-y-2 hover:scale-[1.02]">

                            {/* Decoraciones HUD (Esquinas técnicas) */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-slate-900/10 rounded-tl-lg" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-slate-900/10 rounded-br-lg" />

                            {/* Etiqueta Flotante */}
                            <div className="flex items-center gap-2 mb-6">
                                <div className="px-2 py-1 bg-blue-50 border border-blue-100 rounded text-[10px] font-mono text-blue-600 font-bold tracking-widest uppercase flex items-center gap-2">
                                    <Activity size={12} className="animate-pulse" />
                                    System Status: Online
                                </div>
                            </div>

                            {/* Título Masivo */}
                            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                                QUIENES <br />
                                <span className="relative inline-block text-yellow-400  bg-size-[200%_auto] animate-[gradient_3s_ease_infinite]">
                                    SOMOS
                                </span>
                            </h2>

                            {/* Elemento Gráfico Decorativo */}
                            <div className="absolute bottom-6 right-6 opacity-10 rotate-12">
                                <Cpu size={120} />
                            </div>

                            {/* Línea de escaneo interna (Overlay) */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-blue-400/20 shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-[scan_3s_linear_infinite]" />
                        </div>

                        {/* Sombra de suelo "levitación" */}
                        <div className="absolute -bottom-8 left-10 right-10 h-4 bg-black/20 blur-xl rounded-[100%]" />
                    </div>


                    {/* --- COLUMNA DERECHA: Datos y Contenido --- */}
                    <div className="md:col-span-7 flex flex-col justify-center space-y-8 md:pl-8">

                        {/* Encabezado Técnico */}
                        <div className="flex items-center gap-3 text-slate-400">
                            <ScanLine size={18} />
                            <span className="font-mono text-xs tracking-[0.2em] uppercase">Identification // 002-Alpha</span>
                        </div>

                        {/* Texto Principal */}
                        <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-xl">
                            ARX STAR nace para exponer, sin filtros, el camino de un ingeniero en constante evolución.<br></br>
                            Nuestra filosofía es simple: <strong className='font-semibold text-slate-800'>enseñar es la mejor forma de aprender.</strong> No buscamos la verdad absoluta, sino la utilidad real. Si compartir estos conocimientos te ayuda a crecer, hemos cumplido <strong className="font-semibold text-slate-900">nuestra misión.</strong></p>


                    </div>
                </div>
            </div>

            {/* Estilos para animaciones personalizadas si no están en config */}
            <style>{`
        @keyframes scan {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
        @keyframes shimmer {
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}</style>

        </section>
    );
};

export default AboutSection;