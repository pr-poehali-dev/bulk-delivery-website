import { Link } from "@/lib/router-compat";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";
import { garbageVehicleItems, garbageWasteItems } from "@/data/garbageItems";
import type { LandingItem } from "@/data/types";

const steps = [
  { n: "1", title: "Заявка", desc: "Позвоните или оставьте заявку онлайн" },
  { n: "2", title: "Подбор машины", desc: "Подберём машину и способ погрузки" },
  { n: "3", title: "Погрузка", desc: "Грузчики или экскаватор-погрузчик" },
  { n: "4", title: "Вывоз", desc: "Вывезем и утилизируем мусор" },
];

const groups: { title: string; items: LandingItem[] }[] = [
  { title: "Газели бортовые и закрытые", items: garbageVehicleItems.filter((i) => i.name.startsWith("Газель")) },
  { title: "КамАЗы 10 и 20 куб.м", items: garbageVehicleItems.filter((i) => i.name.startsWith("КамАЗ")) },
  { title: "ЗИЛы", items: garbageVehicleItems.filter((i) => i.name.startsWith("ЗИЛ")) },
];

export default function Garbage() {
  return (
    <Layout>
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
            Газели, ЗИЛы и КамАЗы. С погрузкой грузчиками или экскаватором-погрузчиком, а также без погрузки. КамАЗ с экскаватором — от 16 000 ₽.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+79953985420" className="inline-flex items-center gap-3 bg-brand-orange text-white px-8 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-brand-orange-dark transition-colors">
              <Icon name="Phone" size={20} />
              Заказать вывоз
            </a>
            <Link to="/calculator" className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-white hover:text-brand-black transition-all">
              <Icon name="Calculator" size={20} />
              Рассчитать стоимость
            </Link>
          </div>
        </div>
      </section>

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

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div>
            <span className="text-brand-orange font-oswald text-sm tracking-[0.3em] uppercase">Выберите машину и погрузку</span>
            <h2 className="font-oswald text-4xl md:text-5xl text-brand-black mt-2 orange-line">ВЫВОЗ ПО ТИПУ МАШИНЫ</h2>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="font-oswald text-2xl text-brand-black uppercase mb-6">{g.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {g.items.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/garbage/${c.slug}`}
                    className="border border-brand-black/10 hover:border-brand-orange hover:shadow-xl transition-all group flex flex-col overflow-hidden"
                  >
                    {c.image && (
                      <div className="aspect-[4/3] overflow-hidden bg-brand-cream">
                        <img
                          src={c.image}
                          alt={`Вывоз мусора: ${c.name}`}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-5 flex flex-col flex-1">
                      <h4 className="font-oswald text-lg text-brand-black uppercase mb-2 leading-tight">{c.name}</h4>
                      <p className="text-xs text-brand-gray-mid mb-4 flex-1">{c.shortDesc}</p>
                      <div className="font-oswald text-brand-orange text-lg border-t border-brand-black/10 pt-3 flex items-center justify-between">
                        {c.price}
                        <Icon name="ArrowRight" size={18} className="text-brand-black group-hover:text-brand-orange group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-brand-orange font-oswald text-sm tracking-[0.3em] uppercase">Что вывозим</span>
            <h2 className="font-oswald text-4xl md:text-5xl text-brand-black mt-2 orange-line">ТИПЫ ОТХОДОВ</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {garbageWasteItems.map((w) => (
              <Link
                key={w.slug}
                to={`/garbage/${w.slug}`}
                className="bg-white hover:shadow-lg transition-all group border border-transparent hover:border-brand-orange overflow-hidden"
              >
                {w.image && (
                  <div className="aspect-[16/10] overflow-hidden bg-brand-cream">
                    <img
                      src={w.image}
                      alt={w.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <h4 className="font-oswald text-brand-black uppercase text-lg leading-tight p-5">{w.name}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-oswald text-4xl md:text-6xl text-white uppercase mb-6">Нужен вывоз <span className="text-brand-orange">сегодня?</span></h2>
          <p className="text-brand-gray-light text-lg mb-10 max-w-xl mx-auto">Заявки до 17:00 выполняем в день обращения.</p>
          <a href="tel:+79953985420" className="inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-10 py-4 font-oswald text-xl tracking-wider uppercase hover:bg-brand-orange-dark transition-colors">
            <Icon name="Phone" size={22} />
            Заказать вывоз мусора
          </a>
        </div>
      </section>
    </Layout>
  );
}