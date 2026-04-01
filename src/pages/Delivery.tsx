import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

const materials = [
  {
    name: "Щебень",
    desc: "Фракции 5-20, 20-40, 40-70 мм. Гранитный, известняковый, вторичный.",
    icon: "Mountain",
    price: "от 1 200 ₽/т",
    features: ["Подходит для фундамента", "Дренажные системы", "Дорожные работы"],
  },
  {
    name: "Песок",
    desc: "Речной, карьерный, мытый. Для строительства и благоустройства.",
    icon: "Waves",
    price: "от 900 ₽/т",
    features: ["Кладочные работы", "Отсыпка участка", "Детские площадки"],
  },
  {
    name: "Торф",
    desc: "Верховой и низинный торф. Идеален для улучшения почвы.",
    icon: "Leaf",
    price: "от 800 ₽/т",
    features: ["Огородные грядки", "Газоны", "Теплицы"],
  },
  {
    name: "Керамзит",
    desc: "Фракции 5-10, 10-20 мм. Лёгкий и тёплый утеплитель.",
    icon: "Circle",
    price: "от 1 500 ₽/т",
    features: ["Утепление полов", "Дренаж", "Садовые дорожки"],
  },
  {
    name: "Плодородный грунт",
    desc: "Чистый, без камней и мусора. Для посева и высадки растений.",
    icon: "Sprout",
    price: "от 700 ₽/т",
    features: ["Огороды", "Газоны", "Клумбы"],
  },
  {
    name: "ПГС (смесь)",
    desc: "Песчано-гравийная смесь. Универсальна для строительных работ.",
    icon: "Layers",
    price: "от 850 ₽/т",
    features: ["Основания дорог", "Фундаменты", "Отсыпка"],
  },
  {
    name: "Чернозём",
    desc: "Высококачественный чернозём с высоким содержанием гумуса.",
    icon: "TreePine",
    price: "от 1 100 ₽/т",
    features: ["Грядки", "Газоны", "Озеленение"],
  },
  {
    name: "Гравий",
    desc: "Природный гравий различных фракций. Для декора и строительства.",
    icon: "Gem",
    price: "от 1 050 ₽/т",
    features: ["Отсыпка дорожек", "Дренаж", "Декоративные цели"],
  },
];

const howWorks = [
  { step: "01", title: "Оставьте заявку", desc: "Позвоните или заполните форму на сайте" },
  { step: "02", title: "Согласуйте объём", desc: "Менеджер уточнит объём, адрес и время" },
  { step: "03", title: "Получите материал", desc: "Доставим точно в срок прямо на объект" },
  { step: "04", title: "Оплатите удобно", desc: "Наличные, карта или безнал по счёту" },
];

export default function Delivery() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-brand-black py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/21894189-b302-4932-abcf-69f56441957c/files/5b95d098-26a5-48e3-b678-7d0dc02d385c.jpg)` }}
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <Link to="/" className="text-brand-gray-light text-sm hover:text-brand-orange transition-colors font-golos">Главная</Link>
            <Icon name="ChevronRight" size={14} className="text-brand-gray-light" />
            <span className="text-brand-orange text-sm font-golos">Доставка материалов</span>
          </div>
          <div className="w-16 h-16 bg-brand-orange flex items-center justify-center mb-8">
            <Icon name="Package" size={30} className="text-white" />
          </div>
          <h1 className="font-oswald text-5xl md:text-7xl text-white uppercase leading-none mb-6">
            ДОСТАВКА<br /><span className="text-brand-orange">МАТЕРИАЛОВ</span>
          </h1>
          <p className="text-brand-gray-light text-xl max-w-2xl leading-relaxed mb-10">
            Щебень, песок, торф, грунт — доставим любой объём в день заказа по Москве и области. Работаем с 6:00 до 23:00 ежедневно.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/calculator" className="inline-flex items-center gap-3 bg-brand-orange text-white px-8 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-brand-orange-dark transition-colors">
              <Icon name="Calculator" size={20} />
              Рассчитать стоимость
            </Link>
            <a href="tel:+78001234567" className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-white hover:text-brand-black transition-all">
              <Icon name="Phone" size={20} />
              Заказать доставку
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-brand-orange">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {howWorks.map((step) => (
              <div key={step.step} className="text-center">
                <div className="font-oswald text-6xl text-white/20 leading-none mb-3">{step.step}</div>
                <h3 className="font-oswald text-xl text-white uppercase mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials catalog */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-brand-orange font-oswald text-sm tracking-[0.3em] uppercase">Полный ассортимент</span>
            <h2 className="font-oswald text-4xl md:text-5xl text-brand-black mt-2 orange-line">КАТАЛОГ МАТЕРИАЛОВ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {materials.map((mat) => (
              <div key={mat.name} className="border border-brand-black/10 p-6 hover:border-brand-orange hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-brand-black group-hover:bg-brand-orange transition-colors flex items-center justify-center mb-5">
                  <Icon name={mat.icon as any} size={24} className="text-white" />
                </div>
                <h3 className="font-oswald text-2xl text-brand-black uppercase mb-2">{mat.name}</h3>
                <p className="text-brand-gray-mid text-sm mb-4 leading-relaxed">{mat.desc}</p>
                <ul className="space-y-1 mb-5">
                  {mat.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-brand-gray-mid">
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="font-oswald text-brand-orange text-xl border-t border-brand-black/10 pt-4">{mat.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-oswald text-4xl md:text-6xl text-brand-black uppercase mb-6">Готовы сделать заказ?</h2>
          <p className="text-brand-gray-mid text-lg mb-10 max-w-xl mx-auto">Звоните прямо сейчас или рассчитайте стоимость через калькулятор</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/calculator" className="inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-10 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-brand-orange-dark transition-colors">
              <Icon name="Calculator" size={20} />
              Калькулятор стоимости
            </Link>
            <a href="tel:+78001234567" className="inline-flex items-center justify-center gap-3 border-2 border-brand-black text-brand-black px-10 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-brand-black hover:text-white transition-all">
              <Icon name="Phone" size={20} />
              +7 (800) 123-45-67
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
