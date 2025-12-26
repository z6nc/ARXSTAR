import { Zap, ArrowUp, Heart} from 'lucide-react';

const Footer = () => {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-400 py-12 md:py-16 overflow-hidden">
      
      {/* Decoración Futurista: Línea de luz superior */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-900 to-transparent opacity-50"></div>
      
      {/* Decoración de Fondo: Glow difuso */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-blue-900/20 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          
          {/* 1. BRANDING */}
          <div className="text-center md:text-left">
            <a href="#" className="flex items-center justify-center md:justify-start gap-2 mb-4 group">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-white group-hover:border-blue-700 transition-colors duration-300">
                <Zap size={20} className="fill-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                ARX<span className="text-slate-600">STAR</span>
              </span>
            </a>
          
          </div>

          {/* 2. NAVEGACIÓN RÁPIDA (Grid simple) */}
          <div className="flex gap-8 md:gap-16 text-sm font-medium">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono uppercase text-slate-600 tracking-widest mb-1">Explorar</span>
              <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono uppercase text-slate-600 tracking-widest mb-1">Categorías</span>
              <a href="#" className="hover:text-blue-400 transition-colors">Arx Dev</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Arx Tech</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Liderazgo</a>
            </div>
          </div>

          {/* 3. SCROLL TO TOP */}
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              aria-label="Volver arriba"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
            <span className="mt-2 text-[10px] font-mono uppercase tracking-widest text-slate-600 opacity-0 md:opacity-100">
              Volver arriba
            </span>
          </div>

        </div>

        {/* LÍNEA DIVISORIA */}
        <div className="w-full h-[1px] bg-slate-900 my-10"></div>

        {/* COPYRIGHT & CREDITOS */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-600">
          
          <div className="flex items-center gap-1">
            <span>© 2025 ARX STAR. Todos los derechos reservados.</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
               <span>Hecho con</span>
               <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" />
               <span>por Arx Star Team</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;