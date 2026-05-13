import { Link } from 'react-router-dom';
import { ChevronRight, Clock, Calendar } from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';

const posts = [
  {
    slug: 'cip-cleaning-pischevoe-predpriyatie',
    category: 'CIP-мойка',
    categoryVariant: 'blue' as const,
    icon: '⚙️',
    title: 'CIP-мойка на пищевом предприятии: полное руководство',
    excerpt: 'Разбираем систему безразборной мойки «Clean In Place» — принципы, химию, последовательность этапов. Как выбрать щелочной и кислотный агент для конкретного оборудования.',
    date: '15 января 2025',
    readTime: '12 мин',
    tags: ['CIP', 'промышленность', 'пищевая безопасность'],
  },
  {
    slug: 'dezinfektsiya-ptitsefabrika',
    category: 'Агросектор',
    categoryVariant: 'green' as const,
    icon: '🌾',
    title: 'Биобезопасность на птицефабрике: система дезинфекции',
    excerpt: 'Как организовать эффективную дезинфекцию на птицеводческом предприятии. Выбор средств, дозировки, периодичность обработок, профилактика АЧС.',
    date: '8 января 2025',
    readTime: '15 мин',
    tags: ['птицеводство', 'АЧС', 'биобезопасность'],
  },
  {
    slug: 'horeca-sanitar-trebovaniya-2025',
    category: 'HoReCa',
    categoryVariant: 'blue' as const,
    icon: '🍽️',
    title: 'Санитарные требования для ресторана в 2025 году',
    excerpt: 'Актуальные требования к санитарной обработке на предприятиях общественного питания. Что проверяет СЭС, как правильно организовать мойку посуды и оборудования.',
    date: '28 декабря 2024',
    readTime: '10 мин',
    tags: ['СанПиН', 'ресторан', 'мойка посуды'],
  },
  {
    slug: 'nuk-naduksusnaya-kislota-primenenie',
    category: 'Дезинфекция',
    categoryVariant: 'red' as const,
    icon: '🛡️',
    title: 'Надуксусная кислота (НУК): когда и как применять',
    excerpt: 'НУК — современный дезинфектант без остаточного хлора. Разбираем концентрации, области применения, совместимость с поверхностями и сроки ожидания до контакта с продуктом.',
    date: '20 декабря 2024',
    readTime: '9 мин',
    tags: ['НУК', 'дезинфекция', 'пищевые предприятия'],
  },
  {
    slug: 'posudmoyechnye-mashiny-himiya',
    category: 'HoReCa',
    categoryVariant: 'blue' as const,
    icon: '🍽️',
    title: 'Правильная химия для промышленных посудомоечных машин',
    excerpt: 'Выбор щелочного детергента и ополаскивателя для ПММ. Дозировки, жёсткость воды, уход за машиной. Почему важна совместимость химии с оборудованием.',
    date: '12 декабря 2024',
    readTime: '8 мин',
    tags: ['ПММ', 'посуда', 'Торнадо'],
  },
  {
    slug: 'haccp-vyibor-moyuschih-sredstv',
    category: 'Безопасность',
    categoryVariant: 'amber' as const,
    icon: '📋',
    title: 'HACCP: как выбрать моющие средства для пищевого производства',
    excerpt: 'Требования HACCP к химии, применяемой в пищевой промышленности. На что обратить внимание при выборе поставщика и какие документы должны быть на химию.',
    date: '5 декабря 2024',
    readTime: '11 мин',
    tags: ['HACCP', 'пищевая безопасность', 'документы'],
  },
];

export default function BlogPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <Breadcrumbs items={[{ label: 'Блог' }]} className="mb-4" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <Badge variant="blue" className="mb-3">Профессиональный блог</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                Блог и база знаний
              </h1>
              <p className="text-slate-500">
                Экспертные статьи о профессиональной химии, санитарных нормах и технологиях обработки
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Featured post */}
        <div className="mb-8">
          <Link
            to={`/blog/${posts[0].slug}`}
            className="group block bg-white rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl overflow-hidden transition-all duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-gradient-to-br from-[#0a1628] to-[#0e2040] p-10 flex flex-col justify-center">
                <div className="text-7xl mb-4">{posts[0].icon}</div>
                <Badge variant="blue" className="mb-4 w-fit !bg-blue-500/20 !text-blue-300">
                  {posts[0].category}
                </Badge>
                <h2 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-blue-200 transition-colors">
                  {posts[0].title}
                </h2>
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <p className="text-slate-600 leading-relaxed mb-4">{posts[0].excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {posts[0].tags.map((tag) => (
                      <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-slate-400 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {posts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      {posts[0].readTime}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                    Читать <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.slice(1).map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg overflow-hidden transition-all duration-300 flex flex-col"
            >
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{post.icon}</span>
                  <Badge variant={post.categoryVariant} size="sm">{post.category}</Badge>
                </div>
                <h2 className="font-bold text-slate-900 text-base leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs bg-slate-50 text-slate-500 px-2 py-0.5 rounded-full border border-slate-100">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-slate-50 pt-3">
                  <div className="flex items-center gap-3 text-slate-400 text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="flex items-center gap-0.5 text-xs font-semibold text-blue-600 group-hover:gap-1 transition-all">
                    Читать <ChevronRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-white">
            <h2 className="text-xl font-bold mb-1">Нужна консультация по выбору химии?</h2>
            <p className="text-blue-200 text-sm">
              Расскажите о своём производстве — подберём оптимальное решение
            </p>
          </div>
          <Link
            to="/contacts"
            className="shrink-0 flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors text-sm"
          >
            Получить консультацию <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
