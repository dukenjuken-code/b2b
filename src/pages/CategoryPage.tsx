import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getCategoryBySlug, categories } from '../data/categories';
import { getProductsByCategory } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import Breadcrumbs from '../components/ui/Breadcrumbs';


export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const cat = getCategoryBySlug(category || '');
  const prods = cat ? getProductsByCategory(cat.id) : [];

  if (!cat) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Категория не найдена</h2>
          <Link to="/catalog" className="text-blue-600 hover:text-blue-700 font-medium">
            Вернуться в каталог
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className={`${cat.bgColor} border-b border-slate-100`}>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: 'Каталог', href: '/catalog' },
              { label: cat.name },
            ]}
            className="mb-4"
          />
          <div className="flex items-center gap-4 mb-2">
            <span className="text-5xl">{cat.icon}</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{cat.name}</h1>
              <p className="text-slate-500 mt-1 text-sm">{prods.length} позиций в категории</p>
            </div>
          </div>
          <p className="text-slate-600 max-w-2xl mt-3">{cat.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* SEO text block */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 mb-8">
          <p className="text-slate-600 text-sm leading-relaxed">{cat.seoDescription}</p>
        </div>

        {prods.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🏗️</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Раздел в разработке</h3>
            <p className="text-slate-500 mb-6">
              Ассортимент категории «{cat.name}» будет добавлен в ближайшее время.
            </p>
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-xl"
            >
              Весь каталог <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {prods.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Related categories */}
        <div className="mt-12">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Другие категории</h2>
          <div className="flex flex-wrap gap-3">
            {categories
              .filter((c) => c.id !== cat.id)
              .map((c) => (
                <Link
                  key={c.id}
                  to={`/catalog/${c.slug}`}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-600 rounded-full text-sm font-medium text-slate-700 transition-colors"
                >
                  <span>{c.icon}</span>
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
