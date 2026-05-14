import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { categories } from '../../data/categories';

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">SS</span>
              </div>
              <div>
                <div className="font-bold text-white">Сервис Солюшенс</div>
                <div className="text-white/50 text-xs">Группа компаний Серволюкс</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Филиал «Сервис Солюшенс» ОАО «Смолевичи Бройлер». Производство и реализация профессиональной химии и хозтоваров.
            </p>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Работаем для B2B партнёров
            </div>
          </div>

          {/* Catalog */}
          <div>
            <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
              Каталог
            </div>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/catalog/${cat.slug}`}
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                  >
                    <span className="text-base">{cat.icon}</span>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
              Компания
            </div>
            <ul className="space-y-2">
              {[
                { label: 'О компании', href: '/about' },
                { label: 'Отраслевые решения', href: '/industries' },
                { label: 'Блог и база знаний', href: '/blog' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Документация', href: '/docs' },
                { label: 'Контакты', href: '/contacts' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
              Контакты
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+375172680000"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Phone size={15} className="mt-0.5 shrink-0 text-blue-400" />
                  +375 00 000-00-00
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@service-solutions.by"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Mail size={15} className="mt-0.5 shrink-0 text-blue-400" />
                  info@service-solutions.by
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/60">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-blue-400" />
                  <span>Республика Беларусь, Минская область, г. Смолевичи</span>
                </div>
              </li>
            </ul>
            <div className="mt-6 space-y-2">
              <Link
                to="/b2b/register"
                className="flex items-center justify-center w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors"
              >
                Стать партнёром
              </Link>
              <a
                href="https://servolux.by"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 w-full py-2.5 border border-white/20 hover:border-white/40 text-white/60 hover:text-white text-sm rounded-xl transition-colors"
              >
                Серволюкс
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="text-white/40 text-xs">
            © {new Date().getFullYear()} Филиал «Сервис Солюшенс» ОАО «Смолевичи Бройлер». Все права защищены.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-white/40 hover:text-white/60 text-xs transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/docs" className="text-white/40 hover:text-white/60 text-xs transition-colors">
              Документация
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
