import { 
  Cpu, 
  Mic,
  Terminal
} from 'lucide-react';
export const itemsNavbar = [
  {
    icon: <Terminal />,
    title: 'Dev',
    description: ' Más allá de la sintaxis. Desglosamos la arquitectura de software, patrones de diseño y la lógica detrás de aplicaciones escalables. Entiende el "por qué" antes del "cómo".',
    colorFondo : '#007BFF',
    infoItem :[ 'Tutoriales', 'Clean Code' ],
    url: '#arxstar',
  },
    {
    icon: <Cpu />,
    title: 'Tech',
    description: 'Conectando el mundo digital con el físico. Exploramos IoT, novedades de hardware y herramientas emergentes que definen el panorama tecnológico actual.',
    colorFondo : '#28A745',
    url: '#tech',  
    infoItem :[ 'IoT Labs', 'Innovación' ],
    },
    {
    icon: <Mic />,
    title: 'Liderazgo',
    description: 'Porque el código no habla por sí solo. Potenciamos tus habilidades de comunicación, oratoria y gestión para que tus ideas tengan el impacto que merecen.',
    colorFondo : '#FFC107',
    url: '#liderazgo',
    infoItem :[ 'Habilidades Blandas', 'Crecimiento Personal' ],
    },
];