import {
    ArrowLeft,
    Terminal,
    AlertTriangle,
    WifiOff
} from 'lucide-react';

const NotFound = () => {
    return (
        <div className="relative min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden selection:bg-red-500/30 selection:text-red-200">

            {/* 1. FONDO: Grid Táctico y Ruido Estático */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

            {/* Luz ambiental roja/oscura (Error mood) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-blue-900/10 to-transparent blur-3xl pointer-events-none" />

            {/* 2. ELEMENTO VISUAL: RADAR DE BÚSQUEDA (Animado) */}
            <div className="absolute opacity-30 pointer-events-none">
                <div className="relative flex items-center justify-center w-[500px] h-[500px]">
                    {/* Anillos concéntricos */}
                    <div className="absolute inset-0 border border-slate-800 rounded-full opacity-50"></div>
                    <div className="absolute inset-20 border border-slate-800 rounded-full opacity-50"></div>
                    <div className="absolute inset-40 border border-slate-800 rounded-full opacity-50"></div>

                    {/* Escáner Giratorio */}
                    <div className="absolute inset-0 rounded-full border-t border-blue-500/50 animate-[spin_4s_linear_infinite] shadow-[0_0_50px_rgba(59,130,246,0.1)]"></div>
                </div>
            </div>

            <div className="relative z-10 flex flex-col items-center max-w-2xl px-6 text-center">

                {/* HEADER DE ERROR */}
                <div className="flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-md animate-pulse">
                    <AlertTriangle size={14} className="text-red-500" />
                    <span className="font-mono text-[10px] md:text-xs font-bold text-red-400 uppercase tracking-widest">
                        System Alert // 404
                    </span>
                </div>

                {/* 3. TIPOGRAFÍA MASIVA CON GLITCH */}
                <h1 className="relative text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-700 to-slate-900 tracking-tighter leading-none select-none">
                    404
                    {/* Efecto Sombra/Glitch superpuesto */}
                    <span className="absolute inset-0 text-slate-800/30 -translate-x-1 translate-y-1 -z-10 blur-[1px]">404</span>
                </h1>

                <h2 className="text-2xl md:text-4xl font-bold text-white mt-4 mb-2">
                    Sector No Identificado
                </h2>
                <p className="text-slate-400 text-sm md:text-base font-mono max-w-lg mb-10">
                    La ruta especificada no existe en el mapa del sistema ARX STAR. Es posible que el enlace esté roto o la página haya sido eliminada.
                </p>

                {/* 4. CONSOLA DE DIAGNÓSTICO (Decorativo) */}
                <div className="w-full max-w-md bg-slate-900 rounded-lg border border-slate-800 p-4 mb-10 text-left overflow-hidden relative group">
                    <div className="flex items-center gap-1.5 mb-3 border-b border-slate-800 pb-2">
                        <Terminal size={12} className="text-slate-500" />
                        <span className="text-[10px] text-slate-500 font-mono uppercase">System_Log.txt</span>
                    </div>
                    <div className="font-mono text-xs space-y-1.5">
                        <div className="flex gap-2">
                            <span className="text-slate-500">{`>`}</span>
                            <span className="text-blue-400">Initiating search protocol...</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-slate-500">{`>`}</span>
                            <span className="text-slate-300">Target:</span>
                            <span className="text-yellow-500 animate-pulse">/undefined_path</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-slate-500">{`>`}</span>
                            <span className="text-red-400 flex items-center gap-2">
                                <WifiOff size={10} /> Connection Lost
                            </span>
                        </div>
                        <div className="flex gap-2 mt-2">
                            <span className="text-slate-500">{`>`}</span>
                            <span className="text-slate-500">_</span> <span className="animate-ping w-1 h-4 bg-blue-500 inline-block align-middle h-[12px]"></span>
                        </div>
                    </div>
                    {/* Brillo en hover sobre la consola */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
                </div>

                {/* 5. BOTÓN DE RETORNO (Estilo Cyberpunk limpio) */}
                <a
                    href="/"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold text-sm uppercase tracking-widest rounded-sm overflow-hidden hover:bg-blue-50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                    <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
                    <span className="relative z-10">Regresar a la Base</span>

                    {/* Decoración de esquina del botón */}
                    <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-slate-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-slate-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>

            </div>

            {/* FOOTER TÉCNICO FLOTANTE */}
            <div className="absolute bottom-6 w-full flex justify-center opacity-30">
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.5em]">
                    Error_Code_404 // Protocol_Void
                </span>
            </div>

            <style>{`
        @keyframes shimmer {
            100% { transform: translateX(100%); }
        }
      `}</style>

        </div>
    );
};

export default NotFound;