interface DropdownItemProps {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }> | React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

export const DropdownItem = ({ icon: IconOrNode, title, description, href = "#" }: DropdownItemProps) => (
  <a
    href={href}
    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200 group"
  >
    <div className="mt-1 p-1.5 rounded-md bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
      {/* Verificación segura para renderizar el icono */}
      {typeof IconOrNode === 'function' ? (
        <IconOrNode size={18} strokeWidth={2} />
      ) : (
        // Si ya viene como <Icon />, lo clonamos para forzar estilos si es necesario, o lo mostramos directo
        IconOrNode
      )}
    </div>
    <div>
      <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-700">{title}</h4>
      <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">{description}</p>
    </div>
  </a>
);