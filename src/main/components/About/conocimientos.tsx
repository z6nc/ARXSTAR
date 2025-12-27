import type { JSX } from "react"

interface PropsArquitecturaConocimiento {
    ConocimientosData: {
        title: string,
        description: string,
        colorFondo: string,
        icon: JSX.Element,
        infoItem: string[],
        url?: string,
    }[],
}
export const ArquitecturaConocimiento = ({ ConocimientosData }: PropsArquitecturaConocimiento) => {
    return (

        <div className="mb-12">
            <div className="flex items-center gap-4 mb-12">
                <div className="h-0.5 grow bg-linear-to-r from-transparent via-slate-200 to-transparent"></div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-widest px-4 bg-white relative z-10">
                    La Arquitectura del Conocimiento
                </h3>
                <div className="h-0.5 grow bg-linear-to-r from-transparent via-slate-200 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {
                    ConocimientosData.map((Conocimiento, index) => {
                        return (
                        <article key={index} className="group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div style={{backgroundColor: Conocimiento.colorFondo}} className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200">
                                    {Conocimiento.icon}
                                </div>
                                <h4 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    ARX {Conocimiento.title}
                                    <span className="text-[10px] px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-mono uppercase tracking-wider">Core</span>
                                </h4>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                     {Conocimiento.description}
                                </p>
                                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                                    {Conocimiento.infoItem?.map((item, idx) => (
                                        <span key={idx} className="text-xs font-mono bg-slate-50 text-slate-500 px-2 py-1 rounded">{item}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                        )
                    })


                }




            </div>
        </div>
    )
}