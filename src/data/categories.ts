export interface Category {
  id: string;
  slug: string;
  name: string;
  nameShort: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  icon: string;
  color: string;
  bgColor: string;
  industries: string[];
  featured: boolean;
  order: number;
}

export const categories: Category[] = [
  {
    id: 'bytovaya-himiya',
    slug: 'bytovaya-himiya',
    name: 'Бытовая химия',
    nameShort: 'Бытовая химия',
    description: 'Линейка MyDay — профессиональные средства для дома. Эффективные, безопасные, проверенные.',
    seoTitle: 'Бытовая химия MyDay — купить оптом в Беларуси',
    seoDescription: 'Линейка бытовой химии MyDay: гели для посуды, средства для стекол, санитарных комнат, полов. Оптовые поставки по Беларуси.',
    icon: '🏠',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    industries: ['retail', 'horeca'],
    featured: true,
    order: 1,
  },
  {
    id: 'horeca',
    slug: 'horeca',
    name: 'HoReCa',
    nameShort: 'HoReCa',
    description: 'Профессиональные решения для ресторанов, гостиниц и кейтеринга. Линейка Tantum и специализированные средства.',
    seoTitle: 'Химия для HoReCa — профессиональные моющие средства для ресторанов',
    seoDescription: 'Профессиональная химия для HoReCa: моющие, дезинфицирующие средства для кухонь, ресторанов, гостиниц. Линейка Tantum. Оптовые поставки.',
    icon: '🍽️',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    industries: ['horeca'],
    featured: true,
    order: 2,
  },
  {
    id: 'promyshlennaya-himiya',
    slug: 'promyshlennaya-himiya',
    name: 'Промышленная химия',
    nameShort: 'Пром. химия',
    description: 'Линейка СервоЛайн — решения для пищевых производств, мясопереработки, молочной промышленности.',
    seoTitle: 'Промышленная химия СервоЛайн — для пищевых производств',
    seoDescription: 'Промышленные моющие и дезинфицирующие средства СервоЛайн. CIP-мойка, санитарная обработка пищевых предприятий. Оптом от производителя.',
    icon: '🏭',
    color: 'text-slate-600',
    bgColor: 'bg-slate-50',
    industries: ['food', 'agro'],
    featured: true,
    order: 3,
  },
  {
    id: 'dezinfektsiya',
    slug: 'dezinfektsiya',
    name: 'Дезинфекция',
    nameShort: 'Дезинфекция',
    description: 'Сертифицированные дезинфицирующие средства для ветеринарии, пищевой промышленности и объектов общественного питания.',
    seoTitle: 'Дезинфицирующие средства — купить оптом для производства',
    seoDescription: 'Профессиональная дезинфекция: средства на основе НУК, ЧАС, перекиси водорода, глютарового альдегида. Для пищевых предприятий и ветеринарии.',
    icon: '🛡️',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    industries: ['food', 'agro', 'horeca'],
    featured: true,
    order: 4,
  },
  {
    id: 'cip-moika',
    slug: 'cip-moika',
    name: 'CIP-мойка',
    nameShort: 'CIP-мойка',
    description: 'Специализированные средства для безразборной мойки технологического оборудования на пищевых предприятиях.',
    seoTitle: 'CIP-мойка — средства для безразборной мойки оборудования',
    seoDescription: 'CIP-мойка на пищевых предприятиях: кислотные и щелочные средства для безразборной мойки трубопроводов, емкостей, пастеризаторов.',
    icon: '⚙️',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    industries: ['food', 'agro'],
    featured: true,
    order: 5,
  },
  {
    id: 'sanitarnaya-obrabotka',
    slug: 'sanitarnaya-obrabotka',
    name: 'Санитарная обработка',
    nameShort: 'Санобработка',
    description: 'Комплексные решения для санитарной обработки производственных помещений, транспорта и оборудования.',
    seoTitle: 'Санитарная обработка производства — профессиональные средства',
    seoDescription: 'Средства для санитарной обработки производственных объектов. Биобезопасность, дезинфекция помещений, оборудования, транспорта.',
    icon: '✨',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    industries: ['food', 'agro', 'horeca'],
    featured: false,
    order: 6,
  },
  {
    id: 'hoz-tovary',
    slug: 'hoz-tovary',
    name: 'Хозтовары',
    nameShort: 'Хозтовары',
    description: 'Профессиональный хозяйственный инвентарь и расходные материалы для предприятий и организаций.',
    seoTitle: 'Хозтовары оптом — инвентарь для предприятий в Беларуси',
    seoDescription: 'Хозяйственные товары оптом: перчатки, пакеты, инвентарь для уборки, расходные материалы. Поставки для предприятий по всей Беларуси.',
    icon: '🧹',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    industries: ['retail', 'horeca', 'food'],
    featured: false,
    order: 7,
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);

export const getFeaturedCategories = (): Category[] =>
  categories.filter((c) => c.featured).sort((a, b) => a.order - b.order);
