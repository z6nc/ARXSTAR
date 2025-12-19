import { X } from "lucide-react";
import type { JSX } from "react";
interface MobileNavbarProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (open: boolean) => void;
    itemsNavbar: {
        title: string;
        url: string;
        icon: React.ComponentType<{ size?: number; strokeWidth?: number }> | JSX.Element;
    }[];
}
export const MobileNavbar = ({ isMobileMenuOpen, setIsMobileMenuOpen, itemsNavbar }: MobileNavbarProps) => {
    return (
        <>
            <div
                className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            <div className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="flex flex-col h-full">

                    {/* Mobile Header */}
                    <div className="flex items-center justify-between p-5 border-b border-slate-100">
                        <span className="font-black text-lg tracking-tighter text-slate-900">MENU</span>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Mobile Content */}
                    <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
                        <div className="space-y-4">
                            <a href="#inicio" className="text-xl font-bold text-slate-900 hover:text-blue-600 block">Inicio</a>
                            <a href="#about" className="text-xl font-bold text-slate-900 hover:text-blue-600 block">About</a>
                        </div>

                        <div className="pt-6 border-t border-slate-100">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Categorías ARX</p>
                            <div className="space-y-2">
                                {itemsNavbar.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.url}
                                        className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors group"
                                    >
                                        <div className="text-slate-500 group-hover:text-blue-600">
                                            {/* Renderizado condicional simple para móvil */}
                                            {typeof item.icon === 'function' ? <item.icon size={20} /> : item.icon}
                                        </div>
                                        <span className="font-medium text-slate-700 group-hover:text-blue-700">
                                            {item.title}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Footer */}
                    <div className="p-5 border-t border-slate-100 bg-slate-50">
                        <a href="#contact" className="flex items-center justify-center w-full py-3 rounded-lg bg-slate-900 text-white font-bold text-sm uppercase tracking-widest">
                            Contactar
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}