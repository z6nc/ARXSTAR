import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { MobileNavbar } from './MobileOverlay';
import { itemsNavbar } from '../../../data/itemsNavbar';
import { DropdownItem } from './DropDownItem';
// --- COMPONENTE PRINCIPAL ---

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto para detectar scroll y cambiar estilo
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
        ? 'bg-black/80 backdrop-blur-md border-white/10 py-4 shadow-lg' // Estado Scroll: Vidrio Negro
        : 'bg-slate-950 border-transparent py-6' // Estado Top: Transparente
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* 1. LOGO SECTION */}
          <a href="#" className="flex shrink-0 items-center gap-2 cursor-pointer group">
            {/* Icono animado del logo */}
            <div className={`p-1.5 rounded-lg border transition-colors duration-300 bg-white text-black border-white`}>
              <Zap size={16} className={`fill-current ${!isScrolled && 'text-black'}`} />
            </div>

            <span className={`font-black text-xl tracking-tighter transition-colors ${isScrolled ? 'text-white' : 'text-sky-300'
              }`}>
              ARX <span className={isScrolled ? "text-slate-400" : "text-slate-600"}>STAR</span>
            </span>
          </a>

          {/* 2. DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Pasamos clases dinámicas según scroll para legibilidad */}
            <div className={`flex items-center gap-8 text-slate-300 `}>

              {/* Items directos con ajuste de color manual si no usas el componente NavItem Wrapper para todo */}
              <Link to="/" className="text-sm font-medium hover:text-blue-500 transition-colors">Inicio</Link>
              <Link to="/about" className="text-sm font-medium hover:text-blue-500 transition-colors">About</Link>

              {/* Dropdown de Categorías */}
              <div
                className="relative h-full py-2" // Padding vertical ayuda a no perder el hover al mover el mouse
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 outline-none hover:text-blue-500`}
                >
                  Categorías
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-blue-500' : ''}`}
                  />
                </button>

                {/* Panel del Dropdown (Glass Style) */}
                <div
                  className={`absolute top-full right-0 w-80 pt-2 transition-all duration-300 origin-top-right transform ${isDropdownOpen
                    ? 'opacity-100 translate-y-0 visible'
                    : 'opacity-0 -translate-y-2 invisible'
                    }`}
                >
                  {/* Flecha decorativa superior del dropdown */}
                  <div className="absolute top-0 right-6 w-4 h-4 bg-white rotate-45 transform border-t border-l border-slate-100 translate-y-1"></div>

                  <div className="relative bg-white rounded-xl shadow-2xl border border-slate-100 p-2 overflow-hidden ring-1 ring-black/5">
                    {/* Cabecera sutil dentro del dropdown */}
                    <div className="px-3 py-2 border-b border-slate-50 mb-1">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Selecciona un área</span>
                    </div>

                    {itemsNavbar.map((item, index) => (
                      <DropdownItem
                        key={index}
                        // Manejo robusto: Si tu item.icon es un componente o un elemento
                        icon={item.icon}
                        title={`ARX ${item.title}`} // Ajuste visual al título
                        description={item.description}
                        href={item.url || "#"}
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 3. MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md focus:outline-none transition-colors text-white hover:bg-white `}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY (Slide Lateral Moderno) */}
      <MobileNavbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} itemsNavbar={itemsNavbar} />
    </nav>
  );
};

export default Navbar;