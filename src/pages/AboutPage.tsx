import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Factory, Shield, Award, Users, TrendingUp, FlaskConical } from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';

const servoluxIntegrations = [
  {
    type: 'Производственные кейсы',
    icon: <Factory size={20} className="text-blue-400" />,
    title: 'Решения проверены в реальном производстве',
    desc: 'На птицефабриках, мясоперерабатывающих предприятиях и молочных заводах группы Серволюкс наша продукция применяется ежедневно. Это не испытания в лаборатории — это промышленная эксплуатация при реальных нагрузках.',
  },
  {
    type: 'Стандарты холдинга',
    icon: <Award size={20} className="text-blue-400" />,
    title: 'Соответствие внутренним стандартам группы',
    desc: 'Продукция разработана под требования биобезопасности группы Серволюкс. Эти же стандарты — ваша гарантия качества: формулы, прошедшие внутреннюю апробацию на крупнейших агропредприятиях Беларуси.',
  },
  {
    type: 'Технологическая экосистема',
    icon: <Shield size={20} className="text-blue-400" />,
    title: 'Продукт экосистемы Серволюкс',
    desc: 'Используется внутри холдинга — значит, отвечает самым строгим требованиям. Когда агрохолдинг масштаба Серволюкс доверяет средству безопасность своего производства, это сильнее любого маркетинга.',
  },
];

const timeline = [
  { year: '2016', event: 'Основание производства в структуре ОАО «Смолевичи Бройлер»' },
  { year: '2017', event: 'Запуск линейки СервоЛайн для промышленных предприятий' },
  { year: '2018', event: 'Выход на внешний B2B-рынок: HoReCa, пищевая промышленность' },
  { year: '2019', event: 'Запуск линейки Tantum для профессиональных кухонь' },
  { year: '2021', event: 'Линейка MyDay — бытовая химия для розничного рынка' },
  { year: '2026', event: 'Цифровая платформа и развитие B2B e-commerce направления' },
];

const values = [
  {
    icon: <FlaskConical size={20} className="text-emerald-500" />,
    title: 'Лабораторный контроль',
    desc: 'Каждая партия продукции проходит лабораторный контроль согласно внутренним стандартам холдинга.',
  },
  {
    icon: <Factory size={20} className="text-emerald-500" />,
    title: 'Промышленная апробация',
    desc: 'Средства проходят эксплуатацию на действующих производственных мощностях группы Серволюкс.',
  },
  {
    icon: <TrendingUp size={20} className="text-emerald-500" />,
    title: 'Объёмы практики',
    desc: 'Тысячи литров ежегодно применяются на объектах холдинга — это лучшая проверка надёжности.',
  },
  {
    icon: <Users size={20} className="text-emerald-500" />,
    title: 'Решения для реальных нагрузок',
    desc: 'Созданы для производственных условий, а не офисной демонстрации.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0a1628] to-[#0e2040] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <Breadcrumbs
            items={[{ label: 'О компании' }]}
            className="mb-6 [&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white [&_svg]:text-white/60"
          />
          <div className="max-w-3xl">
            <Badge variant="blue" className="mb-6 !bg-blue-500/20 !text-blue-200">О компании</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Филиал «Сервис Солюшенс»
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Производственное подразделение ОАО «Смолевичи Бройлер», входящее в группу компаний Серволюкс. Производство и реализация бытовой, профессиональной и промышленной химии.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Core message */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
            Наши формулы работают там, где требования к чистоте критичны
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            На птицефабриках, мясоперерабатывающих предприятиях и объектах ритейла холдинга — именно здесь ежедневно используется наша продукция. Это определяет уровень требований, которым она должна соответствовать.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Мы поставляем вам те же решения, которыми ежедневно обеспечиваем биобезопасность, санитарную обработку и чистоту на производственных мощностях группы Серволюкс.
          </p>
          <p className="text-slate-500 text-sm italic">
            * Важно: мы не являемся торговым представительством Серволюкс — мы входим в группу компаний как самостоятельное производственное подразделение.
          </p>
        </div>

        {/* Servolux integration blocks */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Три варианта интеграции с брендом Серволюкс
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servoluxIntegrations.map((item) => (
              <div key={item.type} className="bg-[#0a1628] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-2 mb-4">
                  {item.icon}
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                    {item.type}
                  </span>
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-slate-50 rounded-2xl p-5">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">История развития</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200" />
            <div className="space-y-6">
              {timeline.map((item) => (
                <div key={item.year} className="relative flex items-start gap-5 pl-12">
                  <div className="absolute left-0 w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-[10px] font-bold">{item.year.slice(2)}</span>
                  </div>
                  <div className="bg-white border border-slate-100 rounded-xl p-4 flex-1">
                    <div className="text-sm font-bold text-blue-600 mb-1">{item.year}</div>
                    <div className="text-slate-700">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why trust us */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 border border-slate-100 rounded-3xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Почему нам доверяют
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              'Промышленный стандарт холдинга — не декларация, а ежедневная практика на реальных объектах',
              'Эксплуатация на действующих предприятиях — птицефабриках, мясоперерабатывающих заводах',
              'Решения для реальных производственных нагрузок — высокая частота применения, агрессивная среда',
              'Контроль биобезопасности группы Серволюкс как базовое требование к каждому продукту',
              'Документальное подтверждение: паспорта безопасности, регистрационные удостоверения, сертификаты',
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-slate-700 text-sm leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/catalog"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              Каталог продукции <ArrowRight size={16} />
            </Link>
            <Link
              to="/b2b/register"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-blue-300 transition-colors"
            >
              Стать партнёром
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
