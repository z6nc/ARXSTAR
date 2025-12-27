import { Users } from "lucide-react";
export const BannerManifiesto = () => {
    return(
        <div className="relative rounded-3xl bg-slate-900 overflow-hidden p-8 md:p-16 text-center">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 text-blue-300 border border-blue-800 text-xs font-bold uppercase tracking-widest mb-6">
                            <Users size={12} /> Comunidad ARX
                        </div>
                        <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
                            "La ignorancia se combate compartiendo."
                        </h3>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            Únete a nuestra misión. Ya sea leyendo nuestros blogs, replicando nuestros proyectos o simplemente perdiendo el miedo a preguntar. Aquí todos somos estudiantes del futuro.
                        </p>
                        <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-blue-50 transition-colors">
                            Ver Proyectos Recientes
                        </button>
                    </div>
                </div>
    )
}