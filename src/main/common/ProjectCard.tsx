import { ArrowUpRight} from 'lucide-react';

/**
 * 1. COMPONENTE: ProjectCard (Reutilizable)
 * Estilo Liquid Glass sobre fondo blanco.
 */
interface ProjectCardProps {
  title: string;
  image: string;
  date: string;
  categoria: string;
}
export const ProjectCard = ({ title, image, date ,categoria }: ProjectCardProps) => {
        const colorFondoLogos: Record<string, string> = {
        "Dev": "blue-400",
        "Tech": "green-500",
        "Liderazgo": "orange-400"
    }
  return (
    <div className="group relative flex flex-col w-full h-full">
      {/* Contenedor Glass */}
      <div className="relative h-64 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-blue-100">
        
        {/* Imagen con Zoom suave */}
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading='lazy'
            referrerPolicy="no-referrer"
          />
          {/* Overlay gradiente blanco para integrar con el fondo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent " />
        </div>

        {/* Efecto Liquid Glass (Solo visible en Hover) */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Contenido Flotante */}
        <div className="absolute bottom-0 left-0 w-full p-5 z-10 flex flex-col justify-end h-full">
          
          {/* Fecha técnica */}
          <span className="font-mono text-[10px] text-white mb-2 tracking-widest uppercase opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {date}
          </span>

          {/* Título */}
          <h3 className={`text-lg font-bold text-white leading-tight group-hover:text-${colorFondoLogos[categoria]} transition-colors duration-300`}>
            {title}
          </h3>

          {/* Icono Flecha (Corner) */}
          <div className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-white/80 backdrop-blur border border-white shadow-sm opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 delay-75">
            <ArrowUpRight size={16} className="text-slate-900" />
          </div>
        </div>

      </div>
    </div>
  );
};

