
interface SubLogosProps {
    tituloLogo: string;
    ColorFondo: string;
}

export const SubLogos = ({ tituloLogo, ColorFondo }: SubLogosProps) => {
    return (
        <div className="flex items-center gap-3 select-none group">
            
            {/* 1. INDICADOR DE ESTADO (Live Status) */}
            {/* Un pequeño punto que 'late' con el color de la categoría */}
            <div className="relative flex h-2 w-2">
                <span 
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" 
                    style={{ backgroundColor: ColorFondo }} 
                />
                <span 
                    className="relative inline-flex rounded-full h-2 w-2" 
                    style={{ backgroundColor: ColorFondo }} 
                />
            </div>

            {/* 2. TEXTO PRINCIPAL (Compacto: text-lg a text-xl) */}
            <h3 className="text-xl md:text-xl font-bold text-slate-900 tracking-tight leading-none">
                ARX STAR
            </h3>

            {/* 3. SEPARADOR TÉCNICO */}
            <span className="text-slate-300 text-lg font-light">/</span>

            {/* 4. BADGE TECNOLÓGICO (Micro Etiqueta) */}
            <div 
                className="relative overflow-hidden px-2.5 py-0.5 rounded-sm flex items-center justify-center transition-all duration-300 group-hover:shadow-md"
                style={{ 
                    backgroundColor: ColorFondo,
                    boxShadow: `0 0 12px -3px ${ColorFondo}50` // Glow sutil del mismo color
                }}
            >
                {/* Efecto 'Scanline' sutil sobre el color (Patrón de líneas) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_2px] pointer-events-none opacity-50" />
                
                {/* Texto Categoría */}
                <span className="relative z-10 text-[10px] md:text-xs font-mono font-bold text-white uppercase tracking-widest">
                    {tituloLogo}
                </span>
            </div>

        </div>
    );
};