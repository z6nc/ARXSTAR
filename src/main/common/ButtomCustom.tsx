import { ArrowRight } from 'lucide-react';
interface ButtomCustomProps {
    title ?: string;
    link ?: string;
}

export const ButtomCustom = ({title , link}: ButtomCustomProps) => {
    return (
        <div className="pt-2">
            <a href={link} className="group inline-flex items-center gap-4 focus:outline-none">
                <div className="relative overflow-hidden pl-4 pr-10 py-3 bg-slate-900 text-white font-bold text-sm uppercase tracking-widest rounded-sm transition-all  hover:shadow-lg">
                    <span className="relative z-10">{title}</span>
                    {/* Brillo diagonal en hover */}
                    <div className="absolute inset-0 w-full h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
                </div>

                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-400 group-hover:border-slate-900 group-hover:text-slate-900 group-hover:-rotate-45 transition-all duration-300">
                    <ArrowRight size={18} />
                </div>
            </a>
        </div>

    )
}