import { Zap, Code2, Database, Share2 } from "lucide-react";
export const NucleoDigital = () => {
  return (
    <div className="relative flex items-center justify-center w-full max-w-2xl aspect-square mx-auto">
      {/* Fondo de partículas/circuitos (Abstracto) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0%,transparent_70%)] blur-3xl animate-pulse"></div>
      
      {/* Anillo Exterior: Red de Datos */}
      <div className="absolute inset-10 border border-dashed border-blue-500/30 rounded-full animate-[spin_60s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 bg-blue-500 rounded-full blur-[2px]"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-4 h-4 bg-cyan-500 rounded-full blur-[2px]"></div>
      </div>

      {/* Anillo Medio: Procesamiento */}
      <div className="absolute inset-32 border-2 border-cyan-500/20 rounded-full animate-[spin_40s_linear_infinite_reverse] flex items-center justify-center">
         {/* Nodos flotantes en el anillo medio */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 p-2 bg-slate-900 border border-cyan-500/50 rounded-lg">
             <Code2 size={16} className="text-cyan-400" />
         </div>
         <div className="absolute bottom-20 right-0 translate-x-4 p-2 bg-slate-900 border border-purple-500/50 rounded-lg">
             <Database size={16} className="text-purple-400" />
         </div>
         <div className="absolute bottom-20 left-0 -translate-x-4 p-2 bg-slate-900 border border-blue-500/50 rounded-lg">
             <Share2 size={16} className="text-blue-400" />
         </div>
      </div>

      {/* Núcleo Central: El Reactor ARX */}
      <div className="relative z-20 w-48 h-48 bg-slate-950 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.6)] flex items-center justify-center border-4 border-blue-500/20 overflow-hidden">
          {/* Brillo interno animado */}
          <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 via-cyan-500/20 to-purple-600/20 animate-[spin_5s_linear_infinite]"></div>
          <div className="absolute inset-2 bg-slate-950 rounded-full z-10 flex flex-col items-center justify-center">
               <Zap size={32} className="text-white fill-blue-500 animate-pulse mb-2" />
              <span className="text-3xl font-black text-white tracking-tighter">ARX</span>
              <span className="text-3xl font-black text-white tracking-tighter">STAR</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">CORE SYSTEM</span>
          </div>
      </div>
    </div>
  );
};