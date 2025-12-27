import { NucleoDigital } from "../../common/NucleoDigital"
export const Motivacion = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center bg-transparent ">
            {/* Imagen (Izquierda) */}
            <div className="lg:col-span-5 flex justify-center">
            <NucleoDigital />

            </div>

            {/* Texto (Derecha) */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-end">
                <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-100 border text-slate-600 text-xs font-bold uppercase tracking-wider mb-3">
                        Nuestra Motivación
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                        Enseñamos para aprender. <br />
                        <span className="text-yellow-400">Aprendemos para enseñar.</span>
                    </h2>
                </div>

                <div className="prose prose-lg text-slate-600 leading-relaxed space-y-4">
                    <p>
                        Creemos firmemente que <strong className="text-slate-900">el futuro del país está en manos de los jóvenes</strong>. Sin embargo, sabemos lo difícil que es empezar en el mundo de la ingeniería de sistemas sin una guía clara.
                    </p>
                    <p>
                        Nuestro objetivo es eliminar la barrera de la "ignorancia inicial". No somos gurús inalcanzables; somos estudiantes y profesionales compartiendo nuestros proyectos reales, nuestros errores y nuestros descubrimientos. Al explicar cómo lo hacemos, consolidamos nuestro propio aprendizaje.
                    </p>
                </div>

                <div className="flex items-center gap-6 pt-4 justify-center lg:justify-end ">
                    <div className="flex flex-col">
                        <span className="text-3xl font-black text-slate-900">100%</span>
                        <span className="text-xs font-mono uppercase text-slate-500">Gratuito</span>
                    </div>
                    <div className="w-px h-10 bg-slate-200"></div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-black text-slate-900">Open</span>
                        <span className="text-xs font-mono uppercase text-slate-500">Knowledge</span>
                    </div>
                </div>
            </div>
        </div>
    )
}