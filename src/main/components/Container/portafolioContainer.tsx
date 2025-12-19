import { CategorySection } from "./categoriaSection";
import { Code2, Cpu, Users } from "lucide-react";
export const PortfolioContainer = () => {                          
    // Datos simulados por categoría
    const devProjects = [
        { title: "MindStack", categoria: "Dev", date: "FEB 2025", image: "https://drive.google.com/thumbnail?id=1GOUAlnCK0ZCR36r94UfiNiXk5Hz4PHzA&sz=w1200" },
        { title: "OnboardExpress", categoria: "Dev", date: "ENE 2025", image: "https://drive.google.com/thumbnail?id=1FG9-k8Prc9QZgVmdPvwDhJ2S-Fb9tMkx&sz=w1200" },
        { title: "Automatización de Registro", categoria: "Dev", date: "DIC 2024", image: "https://drive.google.com/thumbnail?id=1Rc8pRzu0MnCoWKK5UW3BU_cJR-KmG4Gw&sz=w1200" },
        { title: "Aprender Quechua", categoria: "Dev", date: "NOV 2024", image: "https://drive.google.com/thumbnail?id=1MBAGYaVVrPa_lv26JWNraYm9ekYBz1Us&sz=w1200" },
    ];

    const techProjects = [
        { title: "IoT Home Controller", categoria: "Tech", date: "OCT 2024", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop" },
        { title: "Arduino Neural Net", categoria: "Tech", date: "SEP 2024", image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&auto=format&fit=crop" },
        { title: "Drone Flight Logic", categoria: "Tech", date: "AGO 2024", image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop" },
        { title: "Smart City Sensors", categoria: "Tech", date: "JUL 2024", image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&auto=format&fit=crop" },
    ];

    const leadershipProjects = [
        { title: "Agile Team Scaling", categoria: "Liderazgo", date: "JUN 2024", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop" },
        { title: "Public Speaking 101", categoria: "Liderazgo", date: "MAY 2024", image: "https://images.unsplash.com/photo-1475721027760-f75b137d9866?w=800&auto=format&fit=crop" },
        { title: "Crisis Management", categoria: "Liderazgo", date: "ABR 2024", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop" },
        { title: "Mentoring Program", categoria: "Liderazgo", date: "MAR 2024", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop" },
    ];

    return (
        <section className="bg-white w-full relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem]  pointer-events-none" />

            {/* SECCIÓN 1: DEV */}
            <CategorySection
                title="Dev"
                icon={Code2}
                projects={devProjects}
            />

            {/* SECCIÓN 2: TECH */}
            <CategorySection
                title="Tech"
                icon={Cpu}
                projects={techProjects}
            />

            {/* SECCIÓN 3: LIDERAZGO */}
            <CategorySection
                title="Liderazgo"
                icon={Users}
                projects={leadershipProjects}
            />
        
        </section>
    );
};
