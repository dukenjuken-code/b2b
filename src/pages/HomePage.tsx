import { Link } from 'react-router-dom';
import {
  ArrowRight, Shield, FlaskConical, Factory, Award, CheckCircle,
  ChevronRight, Star, TrendingUp, Users, Package, Building2
} from 'lucide-react';
import { categories } from '../data/categories';
import { getFeaturedProducts } from '../data/products';
import { getFeaturedIndustries } from '../data/industries';
import ProductCard from '../components/ui/ProductCard';
import Badge from '../components/ui/Badge';

const trustPoints = [
  {
    icon: <FlaskConical size={22} className="text-blue-400" />,
    title: 'Лабораторный контроль',
    desc: 'Каждая партия проходит лабораторный контроль качества согласно внутренним стандартам холдинга.',
  },
  {
    icon: <Factory size={22} className="text-blue-400" />,
    title: 'Промышленная апробация',
    desc: 'Средства эксплуатируются на действующих производственных мощностях группы Серволюкс ежедневно.',
  },
  {
    icon: <Shield size={22} className="text-blue-400" />,
    title: 'Реальные нагрузки',
    desc: 'Решения созданы для производственных условий: птицефабрики, мясопереработка, пищевые цеха.',
  },
  {
    icon: <Award size={22} className="text-blue-400" />,
    title: 'Стандарты холдинга',
    desc: 'Продукция соответствует промышленным стандартам группы, разработанным для критичных производств.',
  },
  {
    icon: <TrendingUp size={22} className="text-blue-400" />,
    title: 'Объёмы эксплуатации',
    desc: 'Тысячи литров продукции ежегодно расходуются на объектах Серволюкс — это лучшая проверка.',
  },
];

const stats = [
  { value: '50+', label: 'Наименований продукции', icon: <Package size={18} /> },
  { value: '10+', label: 'Лет на рынке', icon: <Star size={18} /> },
  { value: '500+', label: 'B2B партнёров', icon: <Users size={18} /> },
  { value: '3', label: 'Производственных линейки', icon: <Building2 size={18} /> },
];

const industryQuickLinks = [
  {
    icon: '🍽️',
    title: 'Для кухни и ресторана',
    desc: 'Профессиональная химия для HoReCa',
    href: '/industries/horeca',
    tags: ['Мойка посуды', 'Нагар', 'Дезинфекция'],
    color: 'from-blue-50 to-blue-100/50',
    border: 'border-blue-200/60',
  },
  {
    icon: '🏭',
    title: 'Для производства',
    desc: 'CIP-мойка и санитарная обработка',
    href: '/industries/pischevoe-proizvodstvo',
    tags: ['CIP-мойка', 'HACCP', 'Нержавейка'],
    color: 'from-slate-50 to-slate-100/50',
    border: 'border-slate-200/60',
  },
  {
    icon: '🛡️',
    title: 'Для санитарной обработки',
    desc: 'Дезинфекция и биобезопасность',
    href: '/catalog/dezinfektsiya',
    tags: ['НУК', 'АЧС', 'Ветеринария'],
    color: 'from-red-50 to-red-100/50',
    border: 'border-red-200/60',
  },
  {
    icon: '🏠',
    title: 'Для дома',
    desc: 'Линейка бытовой химии MyDay',
    href: '/catalog/bytovaya-himiya',
    tags: ['Посуда', 'Стёкла', 'Полы'],
    color: 'from-emerald-50 to-emerald-100/50',
    border: 'border-emerald-200/60',
  },
];

const faqItems = [
  {
    q: 'Как стать B2B-партнёром?',
    a: 'Зарегистрируйтесь на сайте, укажите реквизиты организации. После проверки менеджером вы получите доступ к персональным ценам и корзине.',
  },
  {
    q: 'Есть ли минимальный объём заказа?',
    a: 'Минимальный заказ зависит от товарной позиции. Для партнёров возможны специальные условия. Уточните у менеджера.',
  },
  {
    q: 'Предоставляете ли вы документацию на продукцию?',
    a: 'Да. Зарегистрированные партнёры могут скачать паспорта безопасности, сертификаты и регистрационные удостоверения в личном кабинете.',
  },
];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const featuredIndustries = getFeaturedIndustries();

  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0e2040] to-[#0d1a38] min-h-[90vh] flex items-center">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl" />
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 40px), repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 40px)`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white/80 text-xs font-medium px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                Филиал ОАО «Смолевичи Бройлер» · Группа Серволюкс
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Промышленная химия{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                проверенная в деле
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-4">
              Профессиональные решения, рождённые внутри реального производства.
            </p>
            <p className="text-base text-white/50 leading-relaxed mb-10 max-w-xl">
              Те же средства, которыми ежедневно обеспечиваем биобезопасность, санитарную обработку и чистоту на производственных мощностях группы Серволюкс — теперь для вашего бизнеса.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Link
                to="/catalog"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-900/40"
              >
                Каталог продукции
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/b2b/register"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-xl transition-all backdrop-blur-sm"
              >
                Стать B2B-партнёром
              </Link>
              <Link
                to="/contacts"
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-white/60 hover:text-white font-medium rounded-xl transition-all"
              >
                Получить прайс-лист
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-4">
              {[
                '✅ Зарегистрированы в РБ',
                '📋 Сертификаты и СЭЗ',
                '🚚 Доставка по РБ',
                '🔒 HACCP-совместимо',
              ].map((item) => (
                <span key={item} className="text-white/50 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.value} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRY QUICK SELECT ─── */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="blue" className="mb-4">Решения для отраслей</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Что подходит именно вам?
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              Выберите вашу отрасль — мы покажем оптимальные решения за 1 клик.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industryQuickLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`group relative bg-gradient-to-br ${item.color} border ${item.border} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 overflow-hidden`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-white/70 text-slate-600 px-2 py-0.5 rounded-full border border-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                  Смотреть решения <ChevronRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <Badge variant="slate" className="mb-3">Топ каталога</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Рекомендованные решения
              </h2>
              <p className="text-slate-500 mt-2">
                Наиболее востребованные позиции для B2B-клиентов
              </p>
            </div>
            <Link
              to="/catalog"
              className="hidden md:flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Весь каталог <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-10 md:hidden">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl"
            >
              Весь каталог <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ABOUT / TRUST BLOCK ─── */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#0e2040] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold px-4 py-2 rounded-full mb-6">
                🏭 Внутри экосистемы Серволюкс
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Почему нам{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  доверяют
                </span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Филиал «Сервис Солюшенс» — производственное подразделение ОАО «Смолевичи Бройлер», входящее в группу компаний Серволюкс.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Наши формулы работают там, где требования к чистоте критичны: на птицефабриках, мясоперерабатывающих предприятиях и объектах ритейла холдинга. Это не маркетинговые заявления — это ежедневная практика.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-xl transition-all"
              >
                О компании <ChevronRight size={16} />
              </Link>
            </div>

            {/* Right: trust points */}
            <div className="space-y-4">
              {trustPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center shrink-0">
                    {point.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">{point.title}</div>
                    <div className="text-white/60 text-sm leading-relaxed">{point.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES GRID ─── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="green" className="mb-4">Полный ассортимент</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Категории каталога
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Системная линейка от бытовой до промышленной химии — всё для B2B и B2C сегментов.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/catalog/${cat.slug}`}
                className={`group flex flex-col items-start p-5 ${cat.bgColor} border border-transparent hover:border-slate-200 rounded-2xl hover:shadow-lg transition-all duration-300`}
              >
                <span className="text-3xl mb-3">{cat.icon}</span>
                <h3 className={`font-bold text-slate-900 text-sm mb-1 group-hover:${cat.color} transition-colors`}>
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                  {cat.description}
                </p>
                <span className={`text-xs font-semibold ${cat.color} flex items-center gap-1`}>
                  Смотреть <ChevronRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── B2B CTA ─── */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Готовы стать нашим партнёром?
              </h2>
              <p className="text-blue-200">
                Зарегистрируйтесь как B2B-клиент и получите доступ к персональным ценам, корзине и полной документации.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                {[
                  '✓ Персональные цены',
                  '✓ Документация онлайн',
                  '✓ Повторные заказы',
                  '✓ История поставок',
                ].map((item) => (
                  <span key={item} className="text-blue-200 text-sm">{item}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/b2b/register"
                className="flex items-center justify-center gap-2 px-7 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                Регистрация B2B <ArrowRight size={18} />
              </Link>
              <Link
                to="/contacts"
                className="flex items-center justify-center gap-2 px-7 py-4 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                Получить прайс
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="blue" className="mb-4">Отраслевые решения</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Решения по отраслям
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredIndustries.map((industry) => (
              <Link
                key={industry.id}
                to={`/industries/${industry.slug}`}
                className="group bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl overflow-hidden transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${industry.gradient}`} />
                <div className="p-6">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4">{industry.fullDescription}</p>
                  <div className="space-y-1 mb-4">
                    {industry.challenges.slice(0, 2).map((c, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-500">
                        <CheckCircle size={12} className="text-emerald-500 mt-0.5 shrink-0" />
                        {c}
                      </div>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                    Смотреть решения <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="slate" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold text-slate-900">Частые вопросы</h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Все вопросы и ответы <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
