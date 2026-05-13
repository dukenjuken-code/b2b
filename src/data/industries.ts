export interface Industry {
  id: string;
  slug: string;
  name: string;
  description: string;
  fullDescription: string;
  icon: string;
  color: string;
  gradient: string;
  categoryIds: string[];
  challenges: string[];
  solutions: string[];
  featured: boolean;
}

export const industries: Industry[] = [
  {
    id: 'horeca',
    slug: 'horeca',
    name: 'HoReCa',
    description: 'Рестораны, гостиницы, кейтеринг',
    fullDescription:
      'Полный цикл профессиональной химии для предприятий общественного питания и гостиничного бизнеса. От мытья посуды до дезинфекции кухонных поверхностей.',
    icon: '🍽️',
    color: 'text-blue-600',
    gradient: 'from-blue-600 to-blue-800',
    categoryIds: ['horeca', 'dezinfektsiya'],
    challenges: [
      'Высокие требования к гигиене в зонах приготовления пищи',
      'Разнообразие загрязнений: жир, нагар, минеральные отложения',
      'Требования Роспотребнадзора и СанПиН',
      'Ежедневная нагрузка на кухонное оборудование',
    ],
    solutions: [
      'Линейка Tantum для профессиональных кухонь',
      'Средства для посудомоечных машин Торнадо',
      'Дезинфектанты Серводез-Р',
      'Мыло Фламенко для персонала',
    ],
    featured: true,
  },
  {
    id: 'food',
    slug: 'pischevoe-proizvodstvo',
    name: 'Пищевая промышленность',
    description: 'Мясопереработка, молочные заводы, птицефабрики',
    fullDescription:
      'Промышленные решения для мясоперерабатывающих предприятий, молочных заводов и птицефабрик. Соответствие HACCP и требованиям пищевой безопасности.',
    icon: '🏭',
    color: 'text-slate-600',
    gradient: 'from-slate-600 to-slate-800',
    categoryIds: ['promyshlennaya-himiya', 'dezinfektsiya', 'cip-moika'],
    challenges: [
      'Жёсткие требования HACCP и пищевой безопасности',
      'Белковые и жировые загрязнения высокой концентрации',
      'Необходимость CIP-мойки без разборки оборудования',
      'Контроль бактериальной обсеменённости',
    ],
    solutions: [
      'Линейка СервоЛайн для промышленных предприятий',
      'CIP-средства СервоЛайн 200 и СервоЛайн 600',
      'Дезинфектанты на основе НУК',
      'НУК марки А для обработки тушки птицы',
    ],
    featured: true,
  },
  {
    id: 'agro',
    slug: 'agrosektor',
    name: 'Агросектор',
    description: 'Животноводство, ветеринария, биобезопасность',
    fullDescription:
      'Ветеринарная дезинфекция, биобезопасность животноводческих объектов, профилактика АЧС и других инфекционных заболеваний животных.',
    icon: '🌾',
    color: 'text-emerald-700',
    gradient: 'from-emerald-600 to-emerald-800',
    categoryIds: ['dezinfektsiya', 'sanitarnaya-obrabotka'],
    challenges: [
      'Риски АЧС и других вирусных заболеваний животных',
      'Необходимость профилактической и вынужденной дезинфекции',
      'Обработка транспорта и периметра объектов',
      'Соответствие требованиям ветеринарного надзора',
    ],
    solutions: [
      'Вирутек — против АЧС и вирусных инфекций',
      'Чик Протект для дезинфекции помещений',
      'СервоЛайн 800 и 1000 для дез-барьеров',
      'Серводез-Р для персонала',
    ],
    featured: true,
  },
  {
    id: 'retail',
    slug: 'riteyl',
    name: 'Ритейл и дом',
    description: 'Розничные сети, офисы, быт',
    fullDescription:
      'Бытовая химия линейки MyDay для домашнего использования и объектов розничной торговли. Эффективность, проверенная в профессиональной среде.',
    icon: '🛒',
    color: 'text-amber-600',
    gradient: 'from-amber-500 to-amber-700',
    categoryIds: ['bytovaya-himiya', 'hoz-tovary'],
    challenges: [
      'Широкий спектр бытовых загрязнений',
      'Требования к безопасности для семьи',
      'Экономичность в повседневном использовании',
      'Доступность и удобство применения',
    ],
    solutions: [
      'Линейка MyDay для дома',
      'Универсальные средства для всех поверхностей',
      'Хозтовары и расходные материалы',
    ],
    featured: false,
  },
];

export const getIndustryBySlug = (slug: string): Industry | undefined =>
  industries.find((i) => i.slug === slug);

export const getFeaturedIndustries = (): Industry[] =>
  industries.filter((i) => i.featured);
