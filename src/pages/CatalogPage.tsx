import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal, Grid3X3, List, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { industries } from '../data/industries';
import ProductCard from '../components/ui/ProductCard';
import Breadcrumbs from '../components/ui/Breadcrumbs';


const brandsList = ['MyDay', 'Tantum', 'СервоЛайн', 'Вирутек', 'Торнадо', 'Серводез', 'Лидез', 'Фламенко', 'Чик', 'Rational'];

export default function CatalogPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<'default' | 'name' | 'brand'>('default');

  const filtered = useMemo(() => {
    let result = products.filter((p) => p.inStock);

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.brand.toLowerCase().includes(q)
      );
    }

    if (selectedCategory) {
      result = result.filter((p) => p.categoryId === selectedCategory);
    }

    if (selectedIndustry) {
      result = result.filter((p) => p.industries.includes(selectedIndustry));
    }

    if (selectedBrand) {
      result = result.filter((p) => p.brand === selectedBrand);
    }

    if (sortBy === 'name') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name, 'ru'));
    } else if (sortBy === 'brand') {
      result = [...result].sort((a, b) => a.brand.localeCompare(b.brand, 'ru'));
    } else {
      result = [...result].sort((a, b) => a.order - b.order);
    }

    return result;
  }, [search, selectedCategory, selectedIndustry, selectedBrand, sortBy]);

  const activeFiltersCount = [selectedCategory, selectedIndustry, selectedBrand].filter(Boolean).length;

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedIndustry('');
    setSelectedBrand('');
    setSearch('');
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Breadcrumbs items={[{ label: 'Каталог' }]} className="mb-4" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Каталог продукции
              </h1>
              <p className="text-slate-500 text-sm">
                {products.filter(p => p.inStock).length} позиций · Бытовая, профессиональная и промышленная химия
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                to="/b2b/login"
                className="text-sm text-blue-600 font-medium hover:text-blue-700"
              >
                Войдите, чтобы увидеть цены →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search + Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Поиск по названию, назначению, бренду..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X size={14} />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${
              showFilters || activeFiltersCount > 0
                ? 'bg-blue-600 border-blue-600 text-white'
                : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300'
            }`}
          >
            <SlidersHorizontal size={15} />
            Фильтры
            {activeFiltersCount > 0 && (
              <span className="bg-white/30 text-xs font-bold px-1.5 rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </button>
          <div className="relative hidden sm:block">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="appearance-none pl-4 pr-8 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="default">По умолчанию</option>
              <option value="name">По названию</option>
              <option value="brand">По бренду</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
          <div className="hidden sm:flex items-center gap-1 bg-white border border-slate-200 rounded-xl p-1">
            <button
              onClick={() => setLayout('grid')}
              className={`p-2 rounded-lg transition-colors ${layout === 'grid' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <Grid3X3 size={15} />
            </button>
            <button
              onClick={() => setLayout('list')}
              className={`p-2 rounded-lg transition-colors ${layout === 'list' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <List size={15} />
            </button>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Category filter */}
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">
                  Категория
                </label>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategory('')}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      !selectedCategory ? 'bg-blue-50 text-blue-700 font-medium' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Все категории
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                        selectedCategory === cat.id ? 'bg-blue-50 text-blue-700 font-medium' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{cat.icon}</span>
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Industry filter */}
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">
                  Отрасль
                </label>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedIndustry('')}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      !selectedIndustry ? 'bg-blue-50 text-blue-700 font-medium' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Все отрасли
                  </button>
                  {industries.map((ind) => (
                    <button
                      key={ind.id}
                      onClick={() => setSelectedIndustry(ind.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                        selectedIndustry === ind.id ? 'bg-blue-50 text-blue-700 font-medium' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{ind.icon}</span>
                      {ind.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brand filter */}
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">
                  Бренд / Линейка
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedBrand('')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      !selectedBrand ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Все
                  </button>
                  {brandsList.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(brand)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        selectedBrand === brand ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {activeFiltersCount > 0 && (
              <div className="border-t border-slate-100 mt-4 pt-4">
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1.5 text-sm text-red-500 hover:text-red-600 font-medium"
                >
                  <X size={13} />
                  Сбросить все фильтры
                </button>
              </div>
            )}
          </div>
        )}

        {/* Category quick tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          <button
            onClick={() => setSelectedCategory('')}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !selectedCategory ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            Все
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id === selectedCategory ? '' : cat.id)}
              className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.nameShort}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-slate-500">
            Найдено: <span className="font-semibold text-slate-800">{filtered.length}</span> позиций
          </p>
          {(search || activeFiltersCount > 0) && (
            <button
              onClick={clearFilters}
              className="text-sm text-slate-500 hover:text-slate-700 flex items-center gap-1"
            >
              <X size={13} /> Сбросить
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Ничего не найдено</h3>
            <p className="text-slate-500 mb-6">Попробуйте изменить параметры поиска или сбросить фильтры.</p>
            <button
              onClick={clearFilters}
              className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-xl"
            >
              Сбросить фильтры
            </button>
          </div>
        ) : layout === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} layout="list" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
