import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";
import { equipmentItems } from "@/data/equipmentItems";
import { useSeo } from "@/hooks/useSeo";

const conditions = [
  { icon: "Clock", title: "Минимальный заказ", desc: "4 часа (с учётом подачи техники)" },
  { icon: "MapPin", title: "Зона работы", desc: "Ростов-на-Дону, Аксай, Батайск" },
  { icon: "FileText", title: "Документы", desc: "Договор, акт выполненных работ, счёт-фактура" },
  { icon: "CreditCard", title: "Оплата", desc: "Наличные, карта, безналичный расчёт" },
  { icon: "Wrench", title: "Техника", desc: "Весь парк — собственный, регулярное ТО" },
  { icon: "UserCheck", title: "Машинисты", desc: "Опытные операторы с допуском" },
];

export default function Equipment() {
  useSeo({
    title: "Аренда спецтехники в Ростове-на-Дону — экскаваторы, краны, самосвалы | РостовТехРезерв",
    description:
      "Аренда спецтехники с оператором в Ростове-на-Дону, Аксае и Батайске. Экскаваторы, бульдозеры, автокраны, погрузчики, самосвалы. Подача 2–4 часа, цены от 2 500 ₽/час.",
    keywords: "аренда спецтехники ростов-на-дону, экскаватор кран самосвал аренда",
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-brand-black py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/21894189-b302-4932-abcf-69f56441957c/files/d065482f-e282-4bf9-90ef-d1499b0b65a5.jpg)` }}
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <Link to="/" className="text-brand-gray-light text-sm hover:text-brand-orange transition-colors font-golos">Главная</Link>
            <Icon name="ChevronRight" size={14} className="text-brand-gray-light" />
            <span className="text-brand-orange text-sm font-golos">Аренда спецтехники</span>
          </div>
          <div className="w-16 h-16 bg-brand-orange flex items-center justify-center mb-8">
            <Icon name="Settings" size={30} className="text-white" />
          </div>
          <h1 className="font-oswald text-5xl md:text-7xl text-white uppercase leading-none mb-6">
            АРЕНДА<br /><span className="text-brand-orange">СПЕЦТЕХНИКИ</span>
          </h1>
          <p className="text-brand-gray-light text-xl max-w-2xl leading-relaxed mb-10">
            Более 80 единиц техники в собственном парке. Экскаваторы, бульдозеры, краны, погрузчики — подача в течение 2–4 часов.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+79953985420" className="inline-flex items-center gap-3 bg-brand-orange text-white px-8 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-brand-orange-dark transition-colors">
              <Icon name="Phone" size={20} />
              Заказать технику
            </a>
            <Link to="/calculator" className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-white hover:text-brand-black transition-all">
              <Icon name="Calculator" size={20} />
              Рассчитать стоимость
            </Link>
          </div>
        </div>
      </section>

      {/* Equipment catalog */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-brand-orange font-oswald text-sm tracking-[0.3em] uppercase">Собственный парк</span>
            <h2 className="font-oswald text-4xl md:text-5xl text-brand-black mt-2 orange-line">ТЕХНИКА В АРЕНДУ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {equipmentItems.map((eq) => (
              <Link
                key={eq.slug}
                to={`/equipment/${eq.slug}`}
                className="border border-brand-black/10 p-6 hover:border-brand-orange hover:shadow-xl transition-all group flex flex-col"
              >
                <div className="w-14 h-14 bg-brand-black group-hover:bg-brand-orange transition-colors flex items-center justify-center mb-5">
                  <Icon name={eq.icon as any} size={24} className="text-white" />
                </div>
                <h3 className="font-oswald text-xl text-brand-black uppercase mb-1 leading-tight">{eq.name}</h3>
                <div className="text-brand-gray-mid text-xs mb-4 font-golos">Объём: {eq.capacity}</div>
                <p className="text-xs text-brand-gray-mid mb-5 flex-1">{eq.shortDesc}</p>
                <div className="font-oswald text-brand-orange text-xl border-t border-brand-black/10 pt-4 flex items-center justify-between">
                  {eq.price}/ч
                  <Icon name="ArrowRight" size={18} className="text-brand-black group-hover:text-brand-orange group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-brand-orange font-oswald text-sm tracking-[0.3em] uppercase">Важно знать</span>
            <h2 className="font-oswald text-4xl md:text-5xl text-white mt-2">УСЛОВИЯ АРЕНДЫ</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {conditions.map((c) => (
              <div key={c.title} className="border border-white/10 p-6 flex items-start gap-4 hover:border-brand-orange transition-colors">
                <div className="w-12 h-12 bg-brand-orange flex items-center justify-center shrink-0">
                  <Icon name={c.icon as any} size={22} className="text-white" />
                </div>
                <div>
                  <h4 className="font-oswald text-white uppercase text-lg mb-1">{c.title}</h4>
                  <p className="text-brand-gray-light text-sm">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo + CTA */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-oswald text-4xl md:text-6xl text-brand-black uppercase mb-6">Нужна конкретная техника?</h2>
          <p className="text-brand-gray-mid text-lg mb-10 max-w-xl mx-auto">Позвоните нам — подберём оптимальный вариант под вашу задачу и бюджет</p>
          <a href="tel:+79953985420" className="inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-10 py-4 font-oswald text-xl tracking-wider uppercase hover:bg-brand-orange-dark transition-colors">
            <Icon name="Phone" size={22} />
            +7 (995) 398-54-20
          </a>
        </div>
      </section>
    </Layout>
  );
}