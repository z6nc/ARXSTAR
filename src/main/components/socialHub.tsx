import { 
  Github, 
  Linkedin, 
  Instagram, 
  Facebook, 
  ArrowUpRight, 
  Share2, 
  Globe 
} from 'lucide-react';

// Datos de configuración para fácil edición
const socialNetworks = [
  {
    id: "01",
    name: "LinkedIn",
    handle: "/in/arxstar",
    description: "Conexiones profesionales y actualizaciones corporativas.",
    icon: Linkedin,
    color: "group-hover:text-blue-600",
    bgHover: "group-hover:bg-blue-50",
    borderHover: "group-hover:border-blue-200",
    url: "#"
  },
  {
    id: "02",
    name: "GitHub",
    handle: "@arxstar-dev",
    description: "Repositorios Open Source y colaboración de código.",
    icon: Github,
    color: "group-hover:text-slate-900",
    bgHover: "group-hover:bg-slate-100",
    borderHover: "group-hover:border-slate-300",
    url: "#"
  },
  {
    id: "03",
    name: "Instagram",
    handle: "@arxstar.official",
    description: "Behind the scenes, estilo de vida y comunidad visual.",
    icon: Instagram,
    color: "group-hover:text-pink-600",
    bgHover: "group-hover:bg-pink-50",
    borderHover: "group-hover:border-pink-200",
    url: "#"
  },
  {
    id: "04",
    name: "Facebook",
    handle: "ARX Star Community",
    description: "Noticias, eventos y grupos de discusión.",
    icon: Facebook,
    color: "group-hover:text-blue-700",
    bgHover: "group-hover:bg-blue-50",
    borderHover: "group-hover:border-blue-200",
    url: "#"
  }
];

const SocialSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-transparent overflow-hidden selection:bg-sky-500 selection:text-white">
      
      {/* 1. FONDO TÉCNICO (Grid Infinito) */}
      
      {/* Decoración Central de Fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-[80vw] h-[80vw] md:w-150 md:h-150 border border-slate-100 rounded-full animate-[spin_120s_linear_infinite]" />
        <div className="absolute w-[60vw] h-[60vw] md:w-100 md:h-100 border border-dashed border-slate-200 rounded-full animate-[spin_80s_linear_infinite_reverse]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col h-full justify-center py-12">
        
        {/* HEADER DE SECCIÓN */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
            <Share2 size={12} />
            <span>Network Protocol</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900">
            Únete al <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-800 to-slate-400">Ecosistema.</span>
          </h2>
        </div>

        {/* SOCIAL GRID (El Centro de Mando) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-5xl mx-auto">
          
          {socialNetworks.map((net) => (
            <a 
              key={net.id}
              href={net.url}
              className={`group relative flex flex-col justify-between h-48 md:h-64 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${net.borderHover}`}
            >
              {/* Fondo coloreado suave en hover */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 ${net.bgHover}`} />
              
              {/* Header de la Tarjeta */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 transition-colors duration-300 ${net.color} group-hover:bg-white group-hover:shadow-md`}>
                        <net.icon size={28} />
                    </div>
                    <div>
                        <span className="block font-mono text-[10px] text-slate-400 uppercase tracking-widest">NET // {net.id}</span>
                        <h3 className="text-xl font-bold text-slate-900">{net.name}</h3>
                    </div>
                </div>
                
                {/* Flecha de acción */}
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-slate-100 text-slate-300 transition-all duration-300 group-hover:border-slate-300 group-hover:bg-white group-hover:text-slate-900 group-hover:rotate-45`}>
                    <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Cuerpo de la Tarjeta */}
              <div className="relative z-10 mt-auto">
                <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed max-w-xs group-hover:text-slate-700 transition-colors">
                    {net.description}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100/50 flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    <Globe size={14} className="text-slate-400" />
                    <span className={`text-xs font-mono transition-colors ${net.color}`}>
                        {net.handle}
                    </span>
                </div>
              </div>

            </a>
          ))}

        </div>

        {/* FOOTER DECORATIVO DE SECCIÓN */}
        <div className="absolute bottom-8 left-0 w-full px-8 flex justify-between items-center text-[10px] font-mono text-slate-300 uppercase tracking-widest pointer-events-none">
            <span className="hidden md:block">System Status: Online</span>
            <span className="grow md:grow-0 text-center">ARX STAR Social Hub © 2025</span>
            <span className="hidden md:block">Secure Connection</span>
        </div>

      </div>
    </section>
  );
};

export default SocialSection;