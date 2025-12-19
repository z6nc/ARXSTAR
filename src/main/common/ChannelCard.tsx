import { ArrowUpRight } from "lucide-react";
interface ChannelCardProps {
    category: string;
    title: string;
    icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
    delay: string;
}

export const ChannelCard = ({ category, title, icon: Icon,  delay }: ChannelCardProps) => (
  <a 
    href="#" 
    className={`group relative flex items-center justify-between p-6 rounded-2xl border border-red-600 bg-transparent overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${delay}`}
  >
    {/* Fondo Gradiente Líquido (Aparece en Hover) */}
    <div className={`absolute inset-0   transition-opacity duration-500 bg-red-600/40 `} />
    
    <div className="flex items-center gap-4 relative z-10">
      {/* Icono Container con efecto Glass */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full  border border-red-500 text-slate-200   group-hover:scale-110 transition-all duration-300">
        <Icon size={20} strokeWidth={1.5} />
      </div>
      
      <div>
        <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-200 mb-0.5">
          YouTube Channel
        </span>
        <h4 className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors">
          ARX STAR {category}
        </h4>
        <p className="text-xs text-slate-400 font-medium">{title}</p>
      </div>
    </div>

    {/* Flecha animada */}
    <div className="relative z-10 w-8 h-8 flex items-center justify-center rounded-full border border-transparent group-hover:border-slate-200 group-hover:bg-white/50 transition-all duration-300">
      <ArrowUpRight className="text-slate-300 group-hover:text-slate-900 transition-colors" size={18} />
    </div>
  </a>
);
