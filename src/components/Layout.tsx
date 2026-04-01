import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/delivery", label: "Доставка материалов" },
  { href: "/equipment", label: "Аренда спецтехники" },
  { href: "/garbage", label: "Вывоз мусора" },
  { href: "/calculator", label: "Калькулятор" },
  { href: "/about", label: "О компании" },
  { href: "/blog", label: "Блог" },
  { href: "/faq", label: "Вопросы и ответы" },
  { href: "/contacts", label: "Контакты" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white font-golos">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-brand-black shadow-2xl" : "bg-brand-black/95"
        }`}
      >
        {/* Top bar */}
        <div className="bg-brand-orange hidden lg:block">
          <div className="max-w-7xl mx-auto px-6 py-1.5 flex justify-between items-center">
            <span className="text-white text-sm font-golos">Работаем 24/7 без выходных</span>
            <div className="flex items-center gap-6">
              <a href="tel:+78001234567" className="text-white text-sm font-bold hover:text-brand-black transition-colors flex items-center gap-1.5">
                <Icon name="Phone" size={14} />
                +7 (800) 123-45-67
              </a>
              <a href="mailto:info@gruzovic.ru" className="text-white text-sm hover:text-brand-black transition-colors flex items-center gap-1.5">
                <Icon name="Mail" size={14} />
                info@gruzovic.ru
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand-orange flex items-center justify-center">
              <Icon name="Truck" size={22} className="text-white" />
            </div>
            <div>
              <div className="text-white font-oswald text-xl tracking-widest uppercase leading-tight">ГРУЗОВИК</div>
              <div className="text-brand-gray-light text-[10px] tracking-[0.2em] uppercase">Строительная логистика</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.slice(0, 6).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 text-sm font-oswald tracking-wider uppercase transition-all duration-200 relative group ${
                  location.pathname === link.href
                    ? "text-brand-orange"
                    : "text-white hover:text-brand-orange"
                }`}
              >
                {link.label}
                {location.pathname === link.href && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-orange" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+78001234567"
              className="hidden lg:flex items-center gap-2 bg-brand-orange text-white px-4 py-2.5 font-oswald text-sm tracking-wider uppercase hover:bg-brand-orange-dark transition-colors"
            >
              <Icon name="Phone" size={16} />
              Позвонить
            </a>
            <button
              className="xl:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Меню"
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="xl:hidden bg-brand-dark border-t border-brand-gray/30">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-6 py-4 font-oswald text-sm tracking-wider uppercase border-b border-brand-gray/20 transition-colors ${
                    location.pathname === link.href
                      ? "text-brand-orange bg-brand-orange/10"
                      : "text-white hover:text-brand-orange hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-6 py-4">
                <a
                  href="tel:+78001234567"
                  className="flex items-center justify-center gap-2 bg-brand-orange text-white w-full py-3 font-oswald tracking-wider uppercase"
                >
                  <Icon name="Phone" size={16} />
                  +7 (800) 123-45-67
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="pt-[80px] lg:pt-[108px]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-brand-orange flex items-center justify-center">
                  <Icon name="Truck" size={22} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-oswald text-xl tracking-widest uppercase">ГРУЗОВИК</div>
                  <div className="text-brand-gray-light text-[10px] tracking-[0.2em] uppercase">Строительная логистика</div>
                </div>
              </Link>
              <p className="text-brand-gray-light text-sm leading-relaxed">
                Профессиональная доставка сыпучих материалов, аренда спецтехники и вывоз мусора по всему региону.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-oswald text-sm tracking-widest uppercase mb-5 text-brand-orange">Услуги</h4>
              <ul className="space-y-3">
                {[
                  { href: "/delivery", label: "Доставка материалов" },
                  { href: "/equipment", label: "Аренда спецтехники" },
                  { href: "/garbage", label: "Вывоз мусора" },
                  { href: "/calculator", label: "Калькулятор стоимости" },
                ].map(link => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-brand-gray-light text-sm hover:text-brand-orange transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div>
              <h4 className="font-oswald text-sm tracking-widest uppercase mb-5 text-brand-orange">Компания</h4>
              <ul className="space-y-3">
                {[
                  { href: "/about", label: "О компании" },
                  { href: "/blog", label: "Блог и статьи" },
                  { href: "/faq", label: "Вопросы и ответы" },
                  { href: "/contacts", label: "Контакты" },
                ].map(link => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-brand-gray-light text-sm hover:text-brand-orange transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h4 className="font-oswald text-sm tracking-widest uppercase mb-5 text-brand-orange">Контакты</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icon name="Phone" size={16} className="text-brand-orange mt-0.5 shrink-0" />
                  <div>
                    <a href="tel:+78001234567" className="text-white font-bold hover:text-brand-orange transition-colors block">+7 (800) 123-45-67</a>
                    <span className="text-brand-gray-light text-xs">Бесплатно, 24/7</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Mail" size={16} className="text-brand-orange mt-0.5 shrink-0" />
                  <a href="mailto:info@gruzovic.ru" className="text-brand-gray-light text-sm hover:text-brand-orange transition-colors">info@gruzovic.ru</a>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="MapPin" size={16} className="text-brand-orange mt-0.5 shrink-0" />
                  <span className="text-brand-gray-light text-sm">г. Москва, ул. Промышленная, 14</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-brand-gray/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-brand-gray-light text-sm">© 2024 ГРУЗОВИК. Все права защищены.</p>
            <p className="text-brand-gray-light text-xs">ИНН 7700000000 | ООО «Грузовик»</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
