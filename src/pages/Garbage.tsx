import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

const containers = [
  { volume: "8 м³", weight: "до 5 т", type: "Малый", price: "от 6 500 ₽", desc: "Для небольших ремонтов и квартирных переездов" },
  { volume: "15 м³", weight: "до 8 т", type: "Средний", price: "от 9 000 ₽", desc: "Оптимален для загородных участков" },
  { volume: "20 м³", weight: "до 12 т", type: "Большой", price: "от 11 500 ₽", desc: "Для крупных ремонтов и строительства" },
  { volume: "27 м³", weight: "до 15 т", type: "Макси", price: "от 14 000 ₽", desc: "Промышленные объёмы и снос зданий" },
];

const wasteTypes = [
  { icon: "HardHat", name: "Строительный мусор", desc: "Бетон, кирпич, штукатурка, плитка" },
  { icon: "Sofa", name: "Крупногабаритный", desc: "Мебель, техника, двери, окна" },
  { icon: "Home", name: "Демонтаж", desc: "После сноса построек и перегородок" },
  { icon: "Leaf", name: "Зелёные отходы", desc: "Ветки, трава, листья, спилы" },
  { icon: "Box", name: "Упаковка", desc: "Картон, поддоны, плёнка, пенопласт" },
  { icon: "Recycle", name: "Вторсырьё", desc: "Металл, стекло, бумага (с сортировкой)" },
];

const steps = [
  { n: "1", title: "Заявка", desc: "Позвоните или оставьте заявку онлайн" },
  { n: "2", title: "Подача контейнера", desc: "Привезём контейнер в удобное время" },
  { n: "3", title: "Заполнение", desc: "Заполняйте контейнер в своём темпе" },
  { n: "4", title: "Вывоз", desc: "Заберём и утилизируем экологично" },
];

export default function Garbage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-brand-black py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/21894189-b302-4932-abcf-69f56441957c/files/f736732e-6e1b-4a2d-8ef0-f29a8c644d23.jpg)` }}
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <Link to="/" className="text-brand-gray-light text-sm hover:text-brand-orange transition-colors font-golos">Главная</Link>
            <Icon name="ChevronRight" size={14} className="text-brand-gray-light" />
            <span className="text-brand-orange text-sm font-golos">Вывоз мусора</span>
          </div>
          <div className="w-16 h-16 bg-brand-orange flex items-center justify-center mb-8">
            <Icon name="Trash2" size={30} className="text-white" />
          </div>
          <h1 className="font-oswald text-5xl md:text-7xl text-white uppercase leading-none mb-6">
            ВЫВОЗ<br /><span className="text-brand-orange">МУСОРА</span>
          </h1>
          <p className="text-brand-gray-light text-xl max-w-2xl leading-relaxed mb-10">
            Контейнеры 8–27 м³. Строительный мусор, демонтаж, крупногабарит. Официальная утилизация, документы.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+78001234567" className="inline-flex items-center gap-3 bg-brand-orange text-white px-8 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-brand-orange-dark transition-colors">
              <Icon name="Phone" size={20} />
              Заказать контейнер
            </a>
            <Link to="/calculator" className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-white hover:text-brand-black transition-all">
              <Icon name="Calculator" size={20} />
              Рассчитать стоимость
            </Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-brand-orange">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="text-center">
                <div className="w-12 h-12 bg-white text-brand-orange font-oswald text-2xl flex items-center justify-center mx-auto mb-4">{s.n}</div>
                <h3 className="font-oswald text-xl text-white uppercase mb-2">{s.title}</h3>
                <p className="text-white/70 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Containers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-brand-orange font-oswald text-sm tracking-[0.3em] uppercase">Выберите подходящий</span>
            <h2 className="font-oswald text-4xl md:text-5xl text-brand-black mt-2 orange-line">РАЗМЕРЫ КОНТЕЙНЕРОВ</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {containers.map((c, i) => (
              <div key={c.volume} className={`p-8 flex flex-col hover-lift ${i === 2 ? "bg-brand-black text-white" : "border border-brand-black/15 bg-white"}`}>
                <div className={`text-xs font-oswald tracking-[0.2em] uppercase mb-3 ${i === 2 ? "text-brand-orange" : "text-brand-gray-mid"}`}>{c.type}</div>
                <div className={`font-oswald text-5xl mb-1 ${i === 2 ? "text-brand-orange" : "text-brand-black"}`}>{c.volume}</div>
                <div className={`text-sm mb-4 font-golos ${i === 2 ? "text-white/60" : "text-brand-gray-mid"}`}>до {c.weight}</div>
                <p className={`text-sm leading-relaxed mb-6 flex-1 ${i === 2 ? "text-white/70" : "text-brand-gray-mid"}`}>{c.desc}</p>
                <div className={`font-oswald text-2xl mb-4 ${i === 2 ? "text-white" : "text-brand-orange"}`}>{c.price}</div>
                <a href="tel:+78001234567" className={`block text-center py-3 font-oswald text-sm tracking-wider uppercase transition-colors ${i === 2 ? "bg-brand-orange text-white hover:bg-brand-orange-dark" : "border border-brand-black text-brand-black hover:bg-brand-black hover:text-white"}`}>
                  Заказать
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waste types */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-brand-orange font-oswald text-sm tracking-[0.3em] uppercase">Что принимаем</span>
            <h2 className="font-oswald text-4xl md:text-5xl text-brand-black mt-2 orange-line">ТИПЫ ОТХОДОВ</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {wasteTypes.map((w) => (
              <div key={w.name} className="bg-white p-6 flex items-start gap-4 hover:shadow-lg transition-all group border border-transparent hover:border-brand-orange">
                <div className="w-12 h-12 bg-brand-black group-hover:bg-brand-orange transition-colors flex items-center justify-center shrink-0">
                  <Icon name={w.icon as any} size={22} className="text-white" />
                </div>
                <div>
                  <h4 className="font-oswald text-brand-black uppercase text-lg mb-1">{w.name}</h4>
                  <p className="text-brand-gray-mid text-sm">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-oswald text-4xl md:text-6xl text-white uppercase mb-6">Очистим объект<br /><span className="text-brand-orange">за один день</span></h2>
          <p className="text-brand-gray-light text-lg mb-10 max-w-xl mx-auto">Доставим контейнер сегодня. Заберём — когда скажете.</p>
          <a href="tel:+78001234567" className="inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-10 py-4 font-oswald text-xl tracking-wider uppercase hover:bg-brand-orange-dark transition-colors">
            <Icon name="Phone" size={22} />
            Заказать вывоз мусора
          </a>
        </div>
      </section>
    </Layout>
  );
}
