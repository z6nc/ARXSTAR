import { ArrowUpRight, Calendar, Hash } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  image: string;
  date: string;
  categoria: string;
}

export const ProjectCard = ({ title, image, date, categoria }: ProjectCardProps) => {
    
    // 1. CONFIGURACIÓN DE COLORES (Clases completas para que Tailwind las detecte)
    const themeConfig: Record<string, { hoverText: string, barColor: string, badgeColor: string }> = {
        "Dev": { 
            hoverText: "group-hover:text-blue-400", 
            barColor: "bg-blue-500",
            badgeColor: "text-blue-300"
        },
        "Tech": { 
            hoverText: "group-hover:text-emerald-400", 
            barColor: "bg-emerald-500",
            badgeColor: "text-emerald-300"
        },
        "Liderazgo": { 
            hoverText: "group-hover:text-orange-400", 
            barColor: "bg-orange-500",
            badgeColor: "text-orange-300"
        }
    };

    // Fallback por si la categoría no coincide
    const currentTheme = themeConfig[categoria] || themeConfig["Dev"];

  return (
    <div className="group relative flex flex-col w-full h-full cursor-pointer select-none">
      
      {/* Contenedor Principal con Bordes Redondeados y Borde Sutil */}
      <div className="relative h-72 overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-slate-300 hover:-translate-y-1">
        
        {/* --- CAPA 1: IMAGEN --- */}
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
            loading='lazy'
            referrerPolicy="no-referrer"
          />
          {/* Overlay oscuro para legibilidad (Gradiente corregido) */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
        </div>

        {/* --- CAPA 2: EFECTO LIQUID GLASS (Hover) --- */}
        {/* Un brillo blanco muy sutil que cruza la tarjeta */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
        
        {/* --- CAPA 3: CONTENIDO --- */}
        <div className="absolute inset-0 p-6 z-10 flex flex-col justify-end">
          
          {/* Indicador de Categoría (Barra superior brillante) */}
          <div className={`absolute top-0 left-6 h-1 w-12 rounded-b-md ${currentTheme.barColor} shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:h-2`} />

          {/* Botón Flotante (Top Right) */}
          <div className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
            <ArrowUpRight size={18} />
          </div>

          {/* Meta Data (Aparece al hacer hover o siempre visible sutilmente) */}
          <div className="flex items-center gap-3 mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
            {/* Fecha */}
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-black/30 backdrop-blur-sm border border-white/10">
                <Calendar size={10} className="text-slate-400" />
                <span className="font-mono text-[10px] text-slate-300 tracking-wider uppercase">
                    {date}
                </span>
            </div>
            {/* Tag Categoría */}
            <div className="flex items-center gap-1">
                <Hash size={10} className={currentTheme.badgeColor} />
                <span className={`font-mono text-[10px] uppercase tracking-wider ${currentTheme.badgeColor}`}>
                    {categoria}
                </span>
            </div>
          </div>

          {/* Título */}
          <h3 className={`text-xl font-bold text-white leading-tight transition-colors duration-300 ${currentTheme.hoverText}`}>
            {title}
          </h3>

          {/* Barra de progreso decorativa en el fondo (Hover) */}
          <div className={`absolute bottom-0 left-0 h-0.5 w-0 ${currentTheme.barColor} transition-all duration-700 ease-out group-hover:w-full`} />
        </div>

      </div>
    </div>
  );
};