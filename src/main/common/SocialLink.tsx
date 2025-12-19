import { ArrowUpRight } from "lucide-react";
interface SocialLinkProps {
    platform: string;
    handle: string;
    icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
    href: string;
}

export const SocialLink = ({ platform, handle, icon: Icon, href }: SocialLinkProps) => {
    return (
    <a
        href={href}
        className="group flex items-center justify-between py-6 border border-slate-200  transition-colors px-4 rounded-2xl"
    >
        <div className="flex items-center gap-6">
            <div className="text-slate-300 group-hover:text-slate-100 transition-colors duration-300">
                <Icon size={32} strokeWidth={1} />
            </div>
            <div>
                <h3 className="text-2xl font-black text-slate-200 tracking-tight">{platform}</h3>
                <span className="text-sm text-slate-500 font-mono group-hover:text-yellow-500 transition-colors">
                    {handle}
                </span>
            </div>
        </div>

        <div className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-100 flex items-center gap-2">
                Conectar <ArrowUpRight size={14} />
            </span>
        </div>
    </a>
)
};
