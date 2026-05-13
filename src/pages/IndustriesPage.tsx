import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';
import { industries, getIndustryBySlug } from '../data/industries';
import { products } from '../data/products';
import { categories } from '../data/categories';
import ProductCard from '../components/ui/ProductCard';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';

function IndustryDetail({ slug }: { slug: string }) {
  const industry = getIndustryBySlug(slug);
  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Отрасль не найдена</h2>
          <Link to="/industries" className="text-blue-600 font-medium">← К отраслям</Link>
        </div>
      </div>
    );
  }

  const industryProducts = products
    .filter((p) => p.industries.includes(industry.id) && p.inStock)
    .slice(0, 8);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className={`bg-gradient-to-br ${industry.gradient} text-white`}>
        <div className="max-w-7xl mx-auto px-4 py-16">
          <Breadcrumbs
            items={[
              { label: 'Отрасли', href: '/industries' },
              { label: industry.name },
            ]}
            className="mb-6 [&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white [&_svg]:text-white/60"
          />
          <div className="text-6xl mb-4">{industry.icon}</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{industry.name}</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">{industry.fullDescription}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Challenges */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6">
            <h2 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-lg">⚠️</span> Задачи отрасли
            </h2>
            <ul className="space-y-3">
              {industry.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <div className="w-5 h-5 bg-red-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-red-500 text-xs font-bold">!</span>
                  </div>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6">
            <h2 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-lg">✅</span> Наши решения
            </h2>
            <ul className="space-y-3">
              {industry.solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6">
            <h2 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-lg">📦</span> Категории
            </h2>
            <div className="space-y-2">
              {industry.categoryIds.map((catId) => {
                const cat = categories.find((c) => c.id === catId);
                if (!cat) return null;
                return (
                  <Link
                    key={catId}
                    to={`/catalog/${cat.slug}`}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <span className="text-xl">{cat.icon}</span>
                    <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                      {cat.name}
                    </span>
                    <ChevronRight size={13} className="ml-auto text-slate-300 group-hover:text-blue-400" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Products */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Рекомендованные продукты для {industry.name}
        </h2>
        {industryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {industryProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-500">Продукты загружаются...</div>
        )}

        <div className="text-center">
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          >
            Весь каталог <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function IndustriesPage() {
  const { slug } = useParams<{ slug?: string }>();

  if (slug) {
    return <IndustryDetail slug={slug} />;
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <Breadcrumbs items={[{ label: 'Решения для отраслей' }]} className="mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Решения для отраслей
          </h1>
          <p className="text-slate-500 max-w-xl">
            Профессиональные решения, адаптированные под специфику каждой отрасли. Подберите продукты для вашего производства.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              to={`/industries/${industry.slug}`}
              className="group bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${industry.gradient}`} />
              <div className="p-7">
                <div className="text-5xl mb-4">{industry.icon}</div>
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {industry.name}
                  </h2>
                  <Badge variant="slate" size="sm">{industry.description}</Badge>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {industry.fullDescription}
                </p>
                <div className="space-y-2 mb-5">
                  {industry.challenges.slice(0, 2).map((c, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-500">
                      <CheckCircle size={12} className="text-emerald-500 mt-0.5 shrink-0" />
                      {c}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                  Смотреть решения <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
