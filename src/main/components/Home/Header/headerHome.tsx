import { NucleoDigital } from "../../../common/NucleoDigital"
export function HeaderHome() {
    return (

        <header className="relative w-full  h-max lg:h-screen bg-slate-950 overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">

            {/* Patrón de fondo de circuitos */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[3rem_3rem] opacity-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Texto del Hero */}
                    <div className="lg:col-span-7 text-center lg:text-left">
                        {/* Badge técnico */}
                        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800/50 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-blue-300">Open Knowledge Initiative</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-tight">
                            Activando el <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 animate-[gradient_3s_ease_infinite] bg-size-[200%_auto]">
                                Potencial Digital.
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed mb-10">
                            ARX STAR no es una empresa, es un ecosistema. Un hub tecnológico gratuito diseñado para cerrar la brecha entre la teoría académica y la realidad de la ingeniería.
                        </p>

                        {/* Stats Rápidos */}
                        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 border-t border-slate-800 pt-6">
                            <div>
                                <span className="block text-2xl font-bold text-white">100%</span>
                                <span className="text-xs font-mono text-slate-500 uppercase">Gratuito</span>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold text-white">Open</span>
                                <span className="text-xs font-mono text-slate-500 uppercase">Source</span>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold text-white">3</span>
                                <span className="text-xs font-mono text-slate-500 uppercase">Pilares</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual Central: Núcleo Tecnológico */}
                    <div className="lg:col-span-5 relative lg:-mt-20 perspective-1000">
                        <NucleoDigital />
                    </div>
                </div>
            </div>

            {/* Divisor de transición inclinado hacia la sección blanca */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-white [clip-path:polygon(0_100%,100%_0,100%_100%)]"></div>
        </header>
    )
}