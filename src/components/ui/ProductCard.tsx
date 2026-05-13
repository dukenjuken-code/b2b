import { Link } from 'react-router-dom';
import { ShoppingCart, FileText, CheckCircle, ChevronRight } from 'lucide-react';
import type { Product } from '../../data/products';
import { categories } from '../../data/categories';
import Badge from './Badge';

interface ProductCardProps {
  product: Product;
  layout?: 'grid' | 'list';
}

const categoryIconMap: Record<string, string> = {
  'bytovaya-himiya': '🧴',
  'horeca': '🍶',
  'promyshlennaya-himiya': '🏭',
  'dezinfektsiya': '🛡️',
  'cip-moika': '⚙️',
  'sanitarnaya-obrabotka': '✨',
  'hoz-tovary': '🧹',
};

const categoryBgMap: Record<string, string> = {
  'bytovaya-himiya': 'from-emerald-50 to-emerald-100/30',
  'horeca': 'from-blue-50 to-blue-100/30',
  'promyshlennaya-himiya': 'from-slate-50 to-slate-100/30',
  'dezinfektsiya': 'from-red-50 to-red-100/30',
  'cip-moika': 'from-indigo-50 to-indigo-100/30',
  'sanitarnaya-obrabotka': 'from-cyan-50 to-cyan-100/30',
  'hoz-tovary': 'from-amber-50 to-amber-100/30',
};

export default function ProductCard({ product, layout = 'grid' }: ProductCardProps) {
  const category = categories.find((c) => c.id === product.categoryId);

  if (layout === 'list') {
    return (
      <div className="group bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 overflow-hidden flex">
        {/* Image placeholder */}
        <div className="w-32 md:w-48 shrink-0 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center relative">
          <div className="text-5xl">
            {categoryIconMap[product.categoryId] || '🧴'}
          </div>
          {product.badge && (
            <div className="absolute top-2 left-2">
              <Badge variant="blue" size="sm">{product.badge}</Badge>
            </div>
          )}
        </div>
        {/* Content */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-semibold text-slate-900 text-sm leading-tight group-hover:text-blue-600 transition-colors">
                {product.name}
              </h3>
            </div>
            {category && (
              <span className="text-xs text-slate-400 mb-2 block">{category.name}</span>
            )}
            <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
              {product.shortDescription}
            </p>
            {product.concentration && (
              <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
                <span>Концентрация: <span className="font-medium text-slate-700">{product.concentration}</span></span>
                {product.ph && <span>pH: <span className="font-medium text-slate-700">{product.ph}</span></span>}
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 mt-3">
            <Link
              to={`/catalog/${product.categoryId}/${product.slug}`}
              className="flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700"
            >
              Подробнее <ChevronRight size={12} />
            </Link>
            {!product.inStock && (
              <Badge variant="amber" size="sm">Скоро</Badge>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image area — 60% */}
      <div className={`relative bg-gradient-to-br ${categoryBgMap[product.categoryId] || 'from-slate-50 to-slate-100/50'} aspect-[4/3] flex items-center justify-center overflow-hidden`}>
        <div className="text-7xl transition-transform duration-300 group-hover:scale-110">
          {categoryIconMap[product.categoryId] || '🧴'}
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && (
            <Badge variant="blue" size="sm">{product.badge}</Badge>
          )}
          {product.testedInHolding && (
            <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm text-emerald-700 text-[10px] font-semibold px-2 py-1 rounded-full shadow-sm border border-emerald-100">
              <CheckCircle size={9} className="text-emerald-500" />
              Проверено в холдинге
            </div>
          )}
        </div>

        {!product.inStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">
              Скоро в каталоге
            </span>
          </div>
        )}

        {/* Brand */}
        {product.brand && (
          <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm text-slate-600 text-xs font-medium px-2 py-0.5 rounded-full">
            {product.brand}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {category && (
          <div className="flex items-center gap-1.5 mb-2">
            <span className={`text-xs font-medium ${category.color}`}>{category.name}</span>
          </div>
        )}

        <h3 className="font-semibold text-slate-900 text-sm leading-tight mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {product.name}
        </h3>

        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3 flex-1">
          {product.shortDescription}
        </p>

        {/* Specs */}
        {(product.concentration || product.ph) && (
          <div className="flex items-center gap-3 mb-3 pb-3 border-b border-slate-50">
            {product.concentration && (
              <div className="text-xs">
                <span className="text-slate-400">Конц.: </span>
                <span className="font-medium text-slate-700">{product.concentration}</span>
              </div>
            )}
            {product.ph && (
              <div className="text-xs">
                <span className="text-slate-400">pH: </span>
                <span className="font-medium text-slate-700">{product.ph}</span>
              </div>
            )}
          </div>
        )}

        {/* Packaging */}
        {product.packaging.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {product.packaging.slice(0, 3).map((pkg, i) => (
              <span
                key={i}
                className="text-[10px] font-medium text-slate-500 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full"
              >
                {pkg.volume} {pkg.unit}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2 mt-auto">
          <Link
            to={`/catalog/${product.categoryId}/${product.slug}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold rounded-xl transition-colors"
          >
            Подробнее
          </Link>
          {product.docs.length > 0 && (
            <button className="flex items-center justify-center w-9 h-9 border border-slate-200 hover:border-blue-300 text-slate-400 hover:text-blue-600 rounded-xl transition-colors">
              <FileText size={14} />
            </button>
          )}
          {product.inStock && (
            <button className="flex items-center justify-center w-9 h-9 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors">
              <ShoppingCart size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
