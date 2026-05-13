import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav aria-label="Хлебные крошки" className={`flex items-center gap-1 text-sm ${className}`}>
      <Link to="/" className="flex items-center text-slate-400 hover:text-blue-600 transition-colors">
        <Home size={14} />
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          <ChevronRight size={13} className="text-slate-300" />
          {item.href && i < items.length - 1 ? (
            <Link to={item.href} className="text-slate-500 hover:text-blue-600 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-800 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
