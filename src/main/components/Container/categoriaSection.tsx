import { ProjectCard } from "../../common/ProjectCard";
import { SubLogos } from "../../common/SubLogos";
interface CategorySectionProps {
    title: string;
    icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
    projects: {
        title: string;
        image: string;
        date: string;
        categoria: string;
    }[];
}

export const CategorySection = ({ title, icon: Icon, projects }: CategorySectionProps) => {
    const colorFondoLogos: Record<string, string> = {
        "Dev": "#2563EB",
        "Tech": "#16A34A",
        "Liderazgo": "#D97706"
    }
    return (
        <article className="w-full py-16 relative">

            <div className="max-w-7xl mx-auto px-6 pl-12">
                {/* Cabecera de Categoría */}
                <div className="flex items-center gap-4 mb-10  ">
                    <div className="p-3 bg-slate-50 rounded-xl text-slate-900 border border-slate-100">
                        <Icon size={24} strokeWidth={1.5} />
                    </div>
                        <SubLogos  tituloLogo={title} ColorFondo={colorFondoLogos[title]} />
                </div>

                {/* Grid de Proyectos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((proj, idx) => (
                        <ProjectCard
                            key={idx}
                            title={proj.title}
                            image={proj.image}
                            date={proj.date}
                            categoria={proj.categoria}
                        />
                    ))}
                </div>
            </div>
        </article>
    );
};