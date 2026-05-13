import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  User, Lock, Building2, Phone, Mail, FileText,
  CheckCircle, ArrowRight, ShoppingCart, Package,
  Clock, Star, Download, LogOut, ChevronRight, Eye, EyeOff,
  Trash2, Plus, Minus
} from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';

// ─── LOGIN PAGE ───
export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-white font-bold text-xl">SS</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Вход в B2B-кабинет</h1>
          <p className="text-slate-500 text-sm mt-1">Для партнёров и корпоративных клиентов</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="company@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-slate-700">Пароль</label>
                <Link to="/b2b/forgot" className="text-xs text-blue-600 hover:text-blue-700">
                  Забыли пароль?
                </Link>
              </div>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
          </div>

          <button className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-sm">
            Войти
          </button>

          <div className="relative flex items-center gap-4 my-5">
            <div className="flex-1 border-t border-slate-100" />
            <span className="text-slate-400 text-xs">или</span>
            <div className="flex-1 border-t border-slate-100" />
          </div>

          <div className="text-center text-sm text-slate-600">
            Нет аккаунта?{' '}
            <Link to="/b2b/register" className="text-blue-600 font-semibold hover:text-blue-700">
              Зарегистрироваться
            </Link>
          </div>
        </div>

        <div className="mt-4 bg-blue-50 border border-blue-100 rounded-xl p-4 text-xs text-blue-700 text-center">
          🔒 После регистрации аккаунт подтверждается менеджером в течение 1 рабочего дня
        </div>
      </div>
    </div>
  );
}

// ─── REGISTER PAGE ───
export function RegisterPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">SS</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Регистрация B2B-партнёра</h1>
          <p className="text-slate-500 text-sm mt-1">Получите доступ к персональным ценам и корзине</p>
        </div>

        {/* Steps */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  step >= s ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'
                }`}
              >
                {step > s ? <CheckCircle size={14} /> : s}
              </div>
              {s < 3 && <div className={`w-12 h-0.5 ${step > s ? 'bg-blue-600' : 'bg-slate-200'}`} />}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-16 text-xs text-slate-500 mb-8">
          <span className={step >= 1 ? 'text-blue-600 font-medium' : ''}>Контакты</span>
          <span className={step >= 2 ? 'text-blue-600 font-medium' : ''}>Организация</span>
          <span className={step >= 3 ? 'text-blue-600 font-medium' : ''}>Подтверждение</span>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Контактные данные</h2>
              {[
                { label: 'Имя и фамилия', placeholder: 'Иван Иванов', icon: <User size={16} /> },
                { label: 'Email', placeholder: 'ivan@company.by', icon: <Mail size={16} /> },
                { label: 'Телефон', placeholder: '+375 29 000-00-00', icon: <Phone size={16} /> },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{field.label}</label>
                  <div className="relative">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">{field.icon}</div>
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Пароль</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="password" placeholder="Минимум 8 символов" className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <button onClick={() => setStep(2)} className="w-full py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors mt-2">
                Далее <ArrowRight className="inline ml-1" size={16} />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Данные организации</h2>
              {[
                { label: 'Название организации', placeholder: 'ООО "Ваша компания"' },
                { label: 'УНП / ИНН', placeholder: '100000000' },
                { label: 'Юридический адрес', placeholder: 'г. Минск, ул. Примерная, 1' },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{field.label}</label>
                  <div className="relative">
                    <Building2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="text" placeholder={field.placeholder} className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Сфера деятельности</label>
                <select className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Выберите отрасль</option>
                  <option>HoReCa</option>
                  <option>Пищевая промышленность</option>
                  <option>Агросектор / Животноводство</option>
                  <option>Ритейл</option>
                  <option>Клининговые услуги</option>
                  <option>Другое</option>
                </select>
              </div>
              <div className="flex gap-3 mt-2">
                <button onClick={() => setStep(1)} className="flex-1 py-3.5 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors">
                  Назад
                </button>
                <button onClick={() => setStep(3)} className="flex-1 py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
                  Далее <ArrowRight className="inline ml-1" size={16} />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-emerald-500" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Заявка отправлена!</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Ваша заявка на регистрацию получена. Менеджер проверит данные и активирует аккаунт в течение <strong>1 рабочего дня</strong>.
              </p>
              <div className="bg-slate-50 rounded-xl p-4 text-left space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle size={14} className="text-emerald-500" /> Заявка зарегистрирована
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Clock size={14} className="text-amber-500" /> Проверка менеджером (до 1 дня)
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <User size={14} /> Получение доступа к ценам и корзине
                </div>
              </div>
              <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
                На главную
              </Link>
            </div>
          )}
        </div>

        <p className="text-center text-sm text-slate-500 mt-4">
          Уже есть аккаунт?{' '}
          <Link to="/b2b/login" className="text-blue-600 font-semibold">Войти</Link>
        </p>
      </div>
    </div>
  );
}

// ─── ACCOUNT PAGE ───
const mockOrders = [
  { id: 'ORD-2024-001', date: '12.01.2024', status: 'Доставлен', items: 5, total: '1 450 BYN' },
  { id: 'ORD-2024-002', date: '25.01.2024', status: 'В обработке', items: 3, total: '870 BYN' },
  { id: 'ORD-2023-098', date: '15.12.2023', status: 'Доставлен', items: 8, total: '2 340 BYN' },
];

export function AccountPage() {
  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'docs' | 'favorites'>('orders');

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm mb-1">Добро пожаловать,</p>
              <h1 className="text-2xl font-bold text-slate-900">ООО «Ваша Компания»</h1>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="green">Партнёр подтверждён</Badge>
              <button className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-red-500 transition-colors">
                <LogOut size={14} /> Выйти
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mt-5 overflow-x-auto">
            {[
              { key: 'orders', label: 'Мои заказы', icon: <Package size={14} /> },
              { key: 'profile', label: 'Профиль', icon: <User size={14} /> },
              { key: 'docs', label: 'Документация', icon: <FileText size={14} /> },
              { key: 'favorites', label: 'Избранное', icon: <Star size={14} /> },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors shrink-0 ${
                  activeTab === tab.key
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'orders' && (
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-slate-900">История заказов</h2>
              <Link to="/catalog" className="text-sm text-blue-600 font-medium">+ Новый заказ</Link>
            </div>
            <div className="space-y-3">
              {mockOrders.map((order) => (
                <div key={order.id} className="bg-white rounded-2xl border border-slate-100 p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">{order.id}</div>
                    <div className="text-sm text-slate-500">
                      {order.date} · {order.items} позиций
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant={order.status === 'Доставлен' ? 'green' : 'amber'}>
                      {order.status}
                    </Badge>
                    <div className="font-bold text-slate-900">{order.total}</div>
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center gap-1">
                      Повторить <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="max-w-xl">
            <h2 className="text-lg font-bold text-slate-900 mb-5">Профиль организации</h2>
            <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-4">
              {[
                { label: 'Название организации', value: 'ООО «Ваша Компания»' },
                { label: 'УНП', value: '100000001' },
                { label: 'Контактное лицо', value: 'Иван Иванов' },
                { label: 'Email', value: 'ivan@company.by' },
                { label: 'Телефон', value: '+375 29 000-00-00' },
                { label: 'Юридический адрес', value: 'г. Минск, ул. Примерная, 1' },
              ].map((field) => (
                <div key={field.label} className="flex items-center justify-between py-2 border-b border-slate-50">
                  <span className="text-sm text-slate-500">{field.label}</span>
                  <span className="text-sm font-medium text-slate-900">{field.value}</span>
                </div>
              ))}
              <button className="w-full py-3 border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors mt-2">
                Редактировать профиль
              </button>
            </div>
          </div>
        )}

        {activeTab === 'docs' && (
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-5">Доступная документация</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { name: 'Паспорт безопасности — СервоЛайн 200', type: 'SDS' },
                { name: 'Паспорт безопасности — Tantum 101', type: 'SDS' },
                { name: 'Сертификат — СервоЛайн 800', type: 'Certificate' },
                { name: 'Регистрационное удостоверение — Вирутек', type: 'Certificate' },
                { name: 'Инструкция — Таблетки Rational', type: 'Instruction' },
                { name: 'Паспорт безопасности — НУК марки А', type: 'SDS' },
              ].map((doc, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-100 p-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                      <FileText size={15} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-800">{doc.name}</div>
                      <div className="text-xs text-slate-400">{doc.type}</div>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 text-sm text-blue-600 font-medium hover:text-blue-700 shrink-0">
                    <Download size={13} />
                    PDF
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'favorites' && (
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-5">Избранное</h2>
            <div className="text-center py-16 text-slate-400">
              <Star size={40} className="mx-auto mb-3 text-slate-200" />
              <p>Добавляйте товары в избранное для быстрого доступа</p>
              <Link to="/catalog" className="inline-block mt-4 text-sm text-blue-600 font-medium">
                Перейти в каталог →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── CART PAGE ───
const mockCartItems = [
  { id: 1, name: 'СервоЛайн 200 — Щелочное CIP', brand: 'СервоЛайн', pkg: '20 л', qty: 2, priceNote: 'Цена по договору' },
  { id: 2, name: 'Tantum 101 — Нейтральное гелеобразное', brand: 'Tantum', pkg: '5 л', qty: 4, priceNote: 'Цена по договору' },
  { id: 3, name: 'Серводез-Р', brand: 'Серводез', pkg: '5 л', qty: 1, priceNote: 'Цена по договору' },
];

export function CartPage() {
  const [items, setItems] = useState(mockCartItems);

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const remove = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <Breadcrumbs items={[{ label: 'Корзина' }]} className="mb-3" />
          <h1 className="text-2xl font-bold text-slate-900">Корзина</h1>
          <p className="text-slate-500 text-sm mt-1">{items.length} позиций</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Items */}
          <div className="lg:col-span-2 space-y-3">
            {items.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingCart size={40} className="mx-auto mb-3 text-slate-200" />
                <p className="text-slate-500">Корзина пуста</p>
                <Link to="/catalog" className="inline-block mt-4 text-sm text-blue-600 font-medium">
                  Перейти в каталог →
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl border border-slate-100 p-5 flex items-center gap-4">
                  <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-2xl shrink-0">
                    🧴
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-slate-900 text-sm truncate">{item.name}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{item.brand} · {item.pkg}</div>
                    <div className="text-xs text-slate-400 italic mt-0.5">{item.priceNote}</div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button onClick={() => updateQty(item.id, -1)} className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50">
                      <Minus size={12} />
                    </button>
                    <span className="w-8 text-center text-sm font-bold text-slate-900">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50">
                      <Plus size={12} />
                    </button>
                  </div>
                  <button onClick={() => remove(item.id)} className="text-slate-300 hover:text-red-400 transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-slate-100 p-6 sticky top-24">
              <h2 className="font-bold text-slate-900 mb-4">Оформление заявки</h2>
              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Позиций</span>
                  <span className="font-medium">{items.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Сумма</span>
                  <span className="font-medium text-slate-400 italic">По согласованию</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Доставка</span>
                  <span className="font-medium text-slate-400 italic">Уточняется</span>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-4 mb-5">
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-xs text-blue-700 text-center">
                  Цены действуют согласно вашему персональному прайс-листу
                </div>
              </div>
              <button className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors mb-2">
                Оформить заявку
              </button>
              <button className="w-full py-3 text-slate-500 text-sm hover:text-slate-700 transition-colors">
                Продолжить покупки
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
