import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search, ChevronDown, Phone } from 'lucide-react';
import { categories } from '../../data/categories';

const navItems = [
  { label: 'Каталог', href: '/catalog', hasDropdown: true },
  { label: 'Отрасли', href: '/industries', hasDropdown: true },
  { label: 'О компании', href: '/about' },
  { label: 'Блог', href: '/blog' },
  { label: 'Контакты', href: '/contacts' },
];

const industryLinks = [
  { label: 'HoReCa', href: '/industries/horeca' },
  { label: 'Пищевая промышленность', href: '/industries/pischevoe-proizvodstvo' },
  { label: 'Агросектор', href: '/industries/agrosektor' },
  { label: 'Ритейл', href: '/industries/riteyl' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [_catalogOpen, setCatalogOpen] = useState(false);
  const [_industriesOpen, setIndustriesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setCatalogOpen(false);
    setIndustriesOpen(false);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#0a1628] text-white/70 text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span>Филиал «Сервис Солюшенс» ОАО «Смолевичи Бройлер»</span>
            <span className="text-white/30">|</span>
            <span>Группа компаний Серволюкс</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+375172680000" className="flex items-center gap-1 hover:text-white transition-colors">
              <Phone size={12} />
              +375 00 000-00-00
            </a>
            <span className="text-white/30">|</span>
            <Link to="/b2b/login" className="hover:text-white transition-colors">Вход для партнёров</Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100'
            : 'bg-white border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg md:text-xl">SS</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-slate-900 font-bold text-base md:text-lg leading-tight">
                  Сервис Солюшенс
                </div>
                <div className="text-slate-400 text-xs leading-tight">
                  Группа компаний Серволюкс
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.href} className="relative group">
                  {item.hasDropdown ? (
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        location.pathname.startsWith(item.href)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        location.pathname === item.href
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Catalog Dropdown */}
                  {item.href === '/catalog' && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mb-2">
                        Категории
                      </div>
                      {categories.map((cat) => (
                        <Link
                          key={cat.id}
                          to={`/catalog/${cat.slug}`}
                          className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-slate-50 transition-colors group/item"
                        >
                          <span className="text-xl">{cat.icon}</span>
                          <div>
                            <div className="text-sm font-medium text-slate-800 group-hover/item:text-blue-600">
                              {cat.name}
                            </div>
                          </div>
                        </Link>
                      ))}
                      <div className="border-t border-slate-100 mt-2 pt-2">
                        <Link
                          to="/catalog"
                          className="flex items-center justify-center px-2 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                        >
                          Весь каталог →
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Industries Dropdown */}
                  {item.href === '/industries' && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mb-2">
                        Отрасли
                      </div>
                      {industryLinks.map((ind) => (
                        <Link
                          key={ind.href}
                          to={ind.href}
                          className="block px-2 py-2 rounded-xl hover:bg-slate-50 text-sm font-medium text-slate-800 hover:text-blue-600 transition-colors"
                        >
                          {ind.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Link
                to="/catalog"
                className="hidden md:flex items-center justify-center w-9 h-9 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                <Search size={18} />
              </Link>
              <Link
                to="/b2b/login"
                className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                <User size={16} />
                <span>Кабинет</span>
              </Link>
              <Link
                to="/b2b/cart"
                className="relative flex items-center justify-center w-9 h-9 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                <ShoppingCart size={18} />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>
              <Link
                to="/b2b/register"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
              >
                Стать партнёром
              </Link>
              <button
                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Навигация
              </div>
              <Link to="/" className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50">
                Главная
              </Link>
              <Link to="/catalog" className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50">
                Каталог
              </Link>
              <div className="pl-4 space-y-0.5">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/catalog/${cat.slug}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-slate-600 hover:bg-slate-50"
                  >
                    <span>{cat.icon}</span>
                    {cat.name}
                  </Link>
                ))}
              </div>
              <Link to="/industries" className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50">
                Отрасли
              </Link>
              <Link to="/about" className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50">
                О компании
              </Link>
              <Link to="/knowledge" className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50">
                База знаний
              </Link>
              <Link to="/contacts" className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50">
                Контакты
              </Link>
              <div className="border-t border-slate-100 pt-3 mt-3 space-y-2">
                <Link
                  to="/b2b/register"
                  className="flex items-center justify-center w-full py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl"
                >
                  Стать партнёром
                </Link>
                <Link
                  to="/b2b/login"
                  className="flex items-center justify-center w-full py-3 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl"
                >
                  Войти в кабинет
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
