import { useParams, Link } from 'react-router-dom';
import {
  ShoppingCart, FileText, CheckCircle, ArrowRight, Download,
  ChevronRight, FlaskConical, Target, Package, Shield
} from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { getCategoryBySlug } from '../data/categories';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';
import ProductCard from '../components/ui/ProductCard';

const categoryIconMap: Record<string, string> = {
  'bytovaya-himiya': '🏠',
  'horeca': '🍽️',
  'promyshlennaya-himiya': '🏭',
  'dezinfektsiya': '🛡️',
  'cip-moika': '⚙️',
  'sanitarnaya-obrabotka': '✨',
  'hoz-tovary': '🧹',
};

const docTypeLabel: Record<string, string> = {
  SDS: 'Паспорт безопасности',
  Certificate: 'Сертификат',
  Instruction: 'Инструкция',
  Specification: 'ТУ / Спецификация',
};

export default function ProductPage() {
  const { category: categorySlug, slug } = useParams<{ category: string; slug: string }>();
  const product = getProductBySlug(slug || '');
  const category = getCategoryBySlug(categorySlug || '');
  const related = product ? getRelatedProducts(product.id) : [];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Товар не найден</h2>
          <Link to="/catalog" className="text-blue-600 font-medium">← В каталог</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Breadcrumbs
            items={[
              { label: 'Каталог', href: '/catalog' },
              category ? { label: category.name, href: `/catalog/${category.slug}` } : { label: 'Категория' },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image — 60% */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/40 rounded-3xl aspect-[4/3] flex items-center justify-center border border-slate-100 shadow-sm overflow-hidden">
              <div className="text-[120px] select-none">
                {categoryIconMap[product.categoryId] || '🧴'}
              </div>

              {/* Badges overlay */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.badge && (
                  <Badge variant="blue">{product.badge}</Badge>
                )}
                {product.testedInHolding && (
                  <div className="flex items-center gap-1.5 bg-white/95 border border-emerald-200 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    <CheckCircle size={12} className="text-emerald-500" />
                    Протестировано внутри агрохолдинга Servolux
                  </div>
                )}
              </div>

              {product.brand && (
                <div className="absolute bottom-4 right-4 bg-white/90 text-slate-700 text-sm font-semibold px-3 py-1 rounded-full border border-slate-100 shadow-sm">
                  {product.brand}
                </div>
              )}
            </div>

            {/* Document download cards */}
            {product.docs.length > 0 && (
              <div className="mt-4 space-y-2">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Документация
                </p>
                {product.docs.map((doc, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-white border border-slate-100 rounded-xl p-3 hover:border-blue-200 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                        <FileText size={14} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-800">{doc.name}</div>
                        <div className="text-xs text-slate-400">{docTypeLabel[doc.type]}</div>
                      </div>
                    </div>
                    <Link
                      to="/b2b/login"
                      className="flex items-center gap-1 text-xs text-blue-600 font-medium group-hover:gap-2 transition-all"
                    >
                      <Download size={12} />
                      Скачать
                    </Link>
                  </div>
                ))}
                <p className="text-xs text-slate-400 text-center">
                  * Для скачивания документации требуется вход в личный кабинет
                </p>
              </div>
            )}
          </div>

          {/* Product info */}
          <div>
            {category && (
              <Link
                to={`/catalog/${category.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 mb-3"
              >
                {category.name} <ChevronRight size={13} />
              </Link>
            )}

            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight">
              {product.name}
            </h1>

            <p className="text-slate-600 leading-relaxed mb-6">{product.fullDescription}</p>

            {/* Tech specs */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {product.ph && (
                <div className="bg-white border border-slate-100 rounded-xl p-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                    <FlaskConical size={12} />
                    Уровень pH
                  </div>
                  <div className="font-bold text-slate-900">{product.ph}</div>
                </div>
              )}
              {product.concentration && (
                <div className="bg-white border border-slate-100 rounded-xl p-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                    <Target size={12} />
                    Концентрация
                  </div>
                  <div className="font-bold text-slate-900">{product.concentration}</div>
                </div>
              )}
            </div>

            {/* Purpose */}
            {product.purpose.length > 0 && (
              <div className="mb-5">
                <h3 className="text-sm font-semibold text-slate-700 mb-2">Назначение</h3>
                <div className="space-y-1.5">
                  {product.purpose.map((p, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Applications */}
            {product.applications.length > 0 && (
              <div className="mb-5">
                <h3 className="text-sm font-semibold text-slate-700 mb-2">Область применения</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, i) => (
                    <span key={i} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Packaging */}
            {product.packaging.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
                  <Package size={13} />
                  Фасовка
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.packaging.map((pkg, i) => (
                    <span
                      key={i}
                      className="text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-xl"
                    >
                      {pkg.volume} {pkg.unit}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Holding badge */}
            {product.testedInHolding && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <Shield size={18} className="text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-emerald-800 text-sm mb-1">
                      Протестировано внутри агрохолдинга Servolux
                    </div>
                    <div className="text-emerald-700 text-xs leading-relaxed">
                      Данное средство применяется на действующих производственных мощностях группы компаний Серволюкс — птицефабриках, мясоперерабатывающих предприятиях и логистических объектах.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            {product.inStock ? (
              <div className="space-y-3">
                <Link
                  to="/b2b/login"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-sm"
                >
                  <ShoppingCart size={18} />
                  Добавить в корзину
                </Link>
                <div className="text-center text-xs text-slate-400">
                  Цена доступна после авторизации B2B-партнёра
                </div>
                <Link
                  to="/contacts"
                  className="flex items-center justify-center gap-2 w-full py-3.5 border border-slate-200 hover:border-blue-300 text-slate-700 font-semibold rounded-xl transition-colors"
                >
                  Запросить прайс-лист <ArrowRight size={16} />
                </Link>
              </div>
            ) : (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                <p className="text-amber-700 font-medium">Позиция скоро появится в каталоге</p>
                <Link to="/contacts" className="text-sm text-blue-600 font-medium mt-2 block">
                  Уточнить наличие →
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Tags */}
        {product.tags.length > 0 && (
          <div className="mb-8">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Теги</p>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/catalog?search=${encodeURIComponent(tag)}`}
                  className="text-xs text-slate-500 bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-600 px-3 py-1 rounded-full transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related products */}
        {related.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-5">Похожие продукты</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
