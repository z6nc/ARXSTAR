import {
  Github,
  Linkedin,
  Youtube,
  MonitorPlay,
  Cpu,
  Users
} from 'lucide-react';

import { ChannelCard } from '../common/ChannelCard';
import { SocialLink } from '../common/SocialLink';

const SocialHub = () => {
  return (
    <section className="relative py-36 h-auto lg:h-max  2xl:h-screen w-full  bg-black overflow-hidden">
       

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* COLUMNA IZQUIERDA: Redes Profesionales (Texto Grande) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="mb-10">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-4">
                 Redes <br />
                <span className="text-yellow-400">
                  ARX STAR 
                </span>
              </h2>
            
            </div>

            <div className="flex flex-col gap-y-5 ">
              <SocialLink
                platform="LINKEDIN"
                handle="/in/arxstar"
                icon={Linkedin}
                href="#"
              />
              <SocialLink
                platform="GITHUB"
                handle="@arxstar-dev"
                icon={Github}
                href="#"
              />
            </div>
          </div>

          {/* COLUMNA DERECHA: Grid de Canales YouTube (Estilo Módulos) */}
          <div className="lg:col-span-7  rounded-3xl p-8 border border-slate-100 backdrop-blur-sm relative">
            {/* Etiqueta flotante */}
            <div className="absolute -top-3 left-8 px-4 py-1 bg-slate-100 text-slate-900 text-[10px] font-bold uppercase tracking-widest rounded-full">
              Nuestros Canales
            </div>

            <div className="grid gap-4 mt-4">
              {/* Header interno */}
              <div className="flex items-center gap-2 mb-2 px-2 text-slate-300">
                <Youtube size={16} />
                <span className="text-xs font-semibold uppercase tracking-wider">ARX STAR Canales</span>
              </div>

              {/* Canal 1: DEV */}
              <ChannelCard
                category="Dev"
                title="Tutoriales de React & Arquitectura"
                icon={MonitorPlay}
                delay="delay-0"
              />

              {/* Canal 2: TECH */}
              <ChannelCard
                category="Tech"
                title="Reviews de Hardware & IoT Labs"
                icon={Cpu}
                delay="delay-75"
              />

              {/* Canal 3: LIDERAZGO */}
              <ChannelCard
                category="Liderazgo"
                title="Gestión de Equipos & Soft Skills"
                icon={Users}
                delay="delay-150"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialHub;