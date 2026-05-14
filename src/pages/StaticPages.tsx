import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ChevronRight, ArrowRight, HelpCircle, FileText } from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';

// ─── CONTACTS PAGE ───
export function ContactsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <Breadcrumbs items={[{ label: 'Контакты' }]} className="mb-4" />
          <h1 className="text-3xl font-bold text-slate-900">Контакты</h1>
          <p className="text-slate-500 mt-2">Свяжитесь с нами для получения прайс-листа и консультации</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: <Phone size={20} className="text-blue-500" />,
              title: 'Телефон',
              lines: ['+375 00 000-00-00', '+375 29 000-00-00'],
            },
            {
              icon: <Mail size={20} className="text-blue-500" />,
              title: 'Email',
              lines: ['info@service-solutions.by', 'b2b@service-solutions.by'],
            },
            {
              icon: <Clock size={20} className="text-blue-500" />,
              title: 'Режим работы',
              lines: ['Пн–Пт: 9:00 – 18:00', 'Сб–Вс: выходной'],
            },
          ].map((card) => (
            <div key={card.title} className="bg-white rounded-2xl border border-slate-100 p-6">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
              {card.lines.map((line) => (
                <p key={line} className="text-slate-600 text-sm">{line}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact form */}
          <div className="bg-white rounded-2xl border border-slate-100 p-7">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Запросить прайс-лист</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Имя</label>
                  <input type="text" placeholder="Иван" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Компания</label>
                  <input type="text" placeholder="ООО «Компания»" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                <input type="email" placeholder="ivan@company.by" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Телефон</label>
                <input type="tel" placeholder="+375 29 000-00-00" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Интересующие категории</label>
                <select className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Выберите категорию</option>
                  <option>Бытовая химия (MyDay)</option>
                  <option>HoReCa (Tantum)</option>
                  <option>Промышленная химия (СервоЛайн)</option>
                  <option>Дезинфекция</option>
                  <option>CIP-мойка</option>
                  <option>Хозтовары</option>
                  <option>Весь ассортимент</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Сообщение</label>
                <textarea rows={3} placeholder="Опишите ваш запрос..." className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
              </div>
              <button className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors">
                Отправить запрос
              </button>
              <p className="text-xs text-slate-400 text-center">
                Отправляя форму, вы соглашаетесь с{' '}
                <Link to="/privacy" className="text-blue-500">политикой конфиденциальности</Link>
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-slate-100 p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Юридический адрес</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Республика Беларусь, Минская область, г. Смолевичи,<br />
                    ул. Производственная, 1<br />
                    ОАО «Смолевичи Бройлер», филиал «Сервис Солюшенс»
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0a1628] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-white mb-3">Стать B2B-партнёром</h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                Зарегистрируйтесь онлайн и получите доступ к персональным ценам, документации и корзине.
              </p>
              <Link
                to="/b2b/register"
                className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Регистрация партнёра <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
              <h3 className="font-bold text-emerald-800 mb-2">Группа компаний Серволюкс</h3>
              <p className="text-emerald-700 text-sm mb-3">
                Филиал «Сервис Солюшенс» входит в группу компаний Серволюкс — одного из крупнейших агрохолдингов Беларуси.
              </p>
              <a
                href="https://servolux.by"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-emerald-600 font-medium hover:text-emerald-700 flex items-center gap-1"
              >
                servolux.by <ChevronRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── KNOWLEDGE BASE PAGE ───
const knowledgeArticles = [
  {
    category: 'CIP-мойка',
    icon: '⚙️',
    title: 'Что такое CIP-мойка и зачем она нужна',
    desc: 'Безразборная мойка технологического оборудования: принципы, этапы, выбор химии.',
    time: '8 мин',
    slug: 'cip-cleaning-guide',
  },
  {
    category: 'Дезинфекция',
    icon: '🛡️',
    title: 'Классификация дезинфицирующих средств',
    desc: 'НУК, ЧАС, перекись водорода, глутаровый альдегид — когда и что применять.',
    time: '12 мин',
    slug: 'disinfectants-guide',
  },
  {
    category: 'HoReCa',
    icon: '🍽️',
    title: 'Санитарный регламент на профессиональной кухне',
    desc: 'Требования к мытью посуды, обработке поверхностей и дезинфекции в ресторане.',
    time: '10 мин',
    slug: 'horeca-sanitary-rules',
  },
  {
    category: 'Безопасность',
    icon: '⚠️',
    title: 'Правила работы с концентратами',
    desc: 'Средства индивидуальной защиты, разбавление, хранение, нейтрализация.',
    time: '6 мин',
    slug: 'safety-concentrates',
  },
  {
    category: 'Агросектор',
    icon: '🌾',
    title: 'Биобезопасность на птицефабрике',
    desc: 'Система дезинфекции, дез-барьеры, профилактика АЧС и других инфекций.',
    time: '15 мин',
    slug: 'biosafety-poultry',
  },
  {
    category: 'HACCP',
    icon: '📋',
    title: 'HACCP и выбор моющих средств',
    desc: 'Требования пищевой безопасности к химии для обработки оборудования.',
    time: '9 мин',
    slug: 'haccp-cleaning',
  },
];

export function KnowledgePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <Breadcrumbs items={[{ label: 'База знаний' }]} className="mb-4" />
          <h1 className="text-3xl font-bold text-slate-900 mb-2">База знаний</h1>
          <p className="text-slate-500">Профессиональные статьи по применению химии в промышленности и HoReCa</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {knowledgeArticles.map((article) => (
            <Link
              key={article.slug}
              to={`/knowledge/${article.slug}`}
              className="group bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg p-6 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{article.icon}</span>
                <Badge variant="blue" size="sm">{article.category}</Badge>
              </div>
              <h2 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                {article.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{article.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">⏱ {article.time} чтения</span>
                <span className="text-sm font-medium text-blue-600 group-hover:gap-2 flex items-center gap-1 transition-all">
                  Читать <ChevronRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-[#0a1628] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Нужна консультация эксперта?</h2>
            <p className="text-white/60 text-sm">
              Наши специалисты помогут подобрать решение под ваш тип производства и задачи.
            </p>
          </div>
          <Link
            to="/contacts"
            className="shrink-0 flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors"
          >
            Получить консультацию <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── FAQ PAGE ───
const faqData = [
  {
    section: 'O компании',
    questions: [
      {
        q: 'Кто такой «Сервис Солюшенс»?',
        a: 'Филиал «Сервис Солюшенс» — производственное подразделение ОАО «Смолевичи Бройлер», входящее в группу компаний Серволюкс. Занимается производством и реализацией бытовой, профессиональной и промышленной химии.',
      },
      {
        q: 'Какая связь с Серволюкс?',
        a: 'Мы входим в группу компаний Серволюкс как самостоятельное производственное подразделение. Наша продукция применяется на объектах холдинга, что является подтверждением её надёжности.',
      },
    ],
  },
  {
    section: 'Работа с каталогом',
    questions: [
      {
        q: 'Почему не видны цены?',
        a: 'Цены доступны для зарегистрированных B2B-партнёров после подтверждения аккаунта менеджером. Зарегистрируйтесь или запросите прайс-лист через форму.',
      },
      {
        q: 'Есть ли минимальный заказ?',
        a: 'Минимальный объём зависит от конкретной позиции и условий сотрудничества. Для промышленных концентратов обычно от 10–20 литров. Уточните у менеджера.',
      },
    ],
  },
  {
    section: 'Документация',
    questions: [
      {
        q: 'Где взять паспорт безопасности (SDS)?',
        a: 'Паспорта безопасности доступны зарегистрированным партнёрам в личном кабинете. Для получения на конкретную позицию — обратитесь к менеджеру.',
      },
      {
        q: 'Есть ли сертификаты на продукцию?',
        a: 'Да. Продукция имеет регистрационные удостоверения, сертификаты соответствия и паспорта безопасности согласно требованиям законодательства РБ.',
      },
    ],
  },
];

export function FAQPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 py-10">
          <Breadcrumbs items={[{ label: 'FAQ' }]} className="mb-4" />
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Часто задаваемые вопросы</h1>
          <p className="text-slate-500">Ответы на популярные вопросы о продукции и сотрудничестве</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {faqData.map((section) => (
          <div key={section.section} className="mb-10">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <HelpCircle size={18} className="text-blue-500" />
              {section.section}
            </h2>
            <div className="space-y-3">
              {section.questions.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-100 p-5">
                  <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-blue-600 rounded-2xl p-6 text-center text-white">
          <p className="font-semibold mb-3">Не нашли ответ на свой вопрос?</p>
          <Link to="/contacts" className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm">
            Написать нам <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── DOCS PAGE ───
export function DocsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <Breadcrumbs items={[{ label: 'Документация' }]} className="mb-4" />
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Документация</h1>
          <p className="text-slate-500">Паспорта безопасности, сертификаты, инструкции и регистрационные удостоверения</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl border border-slate-100 p-8 text-center max-w-xl mx-auto">
          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <FileText size={24} className="text-blue-500" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">Документация доступна партнёрам</h2>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Зарегистрируйтесь как B2B-партнёр для получения доступа к полному пакету документов: паспорта безопасности (SDS), сертификаты, регистрационные удостоверения.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/b2b/register" className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-sm">
              Зарегистрироваться
            </Link>
            <Link to="/contacts" className="px-5 py-2.5 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-blue-300 transition-colors text-sm">
              Запросить документ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PRIVACY PAGE ───
export function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Политика конфиденциальности' }]} className="mb-6" />
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Политика конфиденциальности</h1>
        <div className="prose prose-slate max-w-none">
          {[
            { title: '1. Общие положения', text: 'Настоящая Политика конфиденциальности определяет порядок обработки персональных данных пользователей сайта Филиала «Сервис Солюшенс» ОАО «Смолевичи Бройлер».' },
            { title: '2. Сбор данных', text: 'Мы собираем данные, которые вы предоставляете при регистрации, оформлении заявок и заполнении форм обратной связи: имя, email, телефон, данные организации.' },
            { title: '3. Использование данных', text: 'Данные используются исключительно для обработки заявок, связи с вами и улучшения сервиса. Мы не передаём данные третьим лицам без вашего согласия.' },
            { title: '4. Хранение данных', text: 'Персональные данные хранятся на защищённых серверах и удаляются по запросу пользователя или по истечении срока хранения.' },
            { title: '5. Права пользователя', text: 'Вы имеете право запросить, изменить или удалить ваши персональные данные, направив запрос на info@service-solutions.by.' },
          ].map((section) => (
            <div key={section.title} className="mb-6">
              <h2 className="text-lg font-bold text-slate-900 mb-2">{section.title}</h2>
              <p className="text-slate-600 leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── NOT FOUND PAGE ───
export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="text-7xl font-black text-slate-200 mb-4">404</div>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">Страница не найдена</h1>
        <p className="text-slate-500 mb-8">
          Запрашиваемая страница не существует или была перемещена.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
            На главную
          </Link>
          <Link to="/catalog" className="px-5 py-3 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-blue-300 transition-colors">
            Каталог
          </Link>
        </div>
      </div>
    </div>
  );
}
