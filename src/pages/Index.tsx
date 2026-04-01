import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

const services = [
  {
    icon: "Package",
    title: "Доставка материалов",
    desc: "Щебень, песок, керамзит, грунт, торф — доставим в любой объём в день заказа",
    href: "/delivery",
    color: "bg-brand-orange",
  },
  {
    icon: "Excavator",
    title: "Аренда спецтехники",
    desc: "Экскаваторы, бульдозеры, краны, погрузчики — весь парк в вашем распоряжении",
    href: "/equipment",
    color: "bg-brand-dark",
  },
  {
    icon: "Trash2",
    title: "Вывоз мусора",
    desc: "Строительный, бытовой, крупногабаритный мусор. Контейнер 8-27 м³",
    href: "/garbage",
    color: "bg-brand-gray",
  },
];

const stats = [
  { number: "1200+", label: "Выполненных заказов" },
  { number: "15 лет", label: "На рынке" },
  { number: "80+", label: "Единиц техники" },
  { number: "24/7", label: "Режим работы" },
];

const benefits = [
  { icon: "Zap", title: "Выезд за 2 часа", desc: "Моментальная реакция на заявку. Техника уже в пути." },
  { icon: "Shield", title: "Гарантия качества", desc: "Сертифицированные материалы и опытные водители." },
  { icon: "BadgeCheck", title: "Официальный договор", desc: "Работаем с физлицами и юрлицами. НДС включён." },
  { icon: "Headphones", title: "Поддержка 24/7", desc: "Менеджер на связи в любое время суток." },
];

const materials = [
  { name: "Щебень фракции 20-40", price: "от 1 200 ₽/т", icon: "Mountain" },
  { name: "Речной песок", price: "от 900 ₽/т", icon: "Waves" },
  { name: "Торф", price: "от 800 ₽/т", icon: "Leaf" },
  { name: "Керамзит", price: "от 1 500 ₽/т", icon: "Circle" },
  { name: "Плодородный грунт", price: "от 700 ₽/т", icon: "Sprout" },
  { name: "ПГС (смесь)", price: "от 850 ₽/т", icon: "Layers" },
];

const reviews = [
  { name: "Алексей С.", role: "Застройщик", text: "Заказывали щебень 4 раза — каждый раз точно в срок, без лишних слов. Настоящие профи.", stars: 5 },
  { name: "Марина К.", role: "Ландшафтный дизайнер", text: "Привезли торф и грунт для объекта. Водитель помог разгрузить точно куда надо.", stars: 5 },
  { name: "ООО СтройГрупп", role: "Строительная компания", text: "Сотрудничаем 3 года. Объёмы большие — ни разу не подвели. Рекомендуем.", stars: 5 },
];

const blogPosts = [
  {
    title: "Как выбрать фракцию щебня для фундамента",
    date: "15 ноября 2024",
    tag: "Материалы",
    href: "/blog/sheben-fraktsiya",
  },
  {
    title: "Вывоз мусора после ремонта: что важно знать",
    date: "2 ноября 2024",
    tag: "Советы",
    href: "/blog/musor-posle-remonta",
  },
  {
    title: "Аренда экскаватора: на что обратить внимание",
    date: "20 октября 2024",
    tag: "Спецтехника",
    href: "/blog/arenda-ekskavatora",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative bg-brand-black overflow-hidden diagonal-cut pb-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/21894189-b302-4932-abcf-69f56441957c/files/5b95d098-26a5-48e3-b678-7d0dc02d385c.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
        {/* Orange accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange" />

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 px-4 py-2 mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-brand-orange text-xs font-oswald tracking-[0.2em] uppercase">Доставка в день заказа</span>
            </div>

            <h1 className="font-oswald text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-6 animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
              СТРОИМ
              <br />
              <span className="text-brand-orange">БЫСТРО.</span>
              <br />
              ВЕЗЁМ
              <br />
              <span className="text-stroke text-white">ЧЁТКО.</span>
            </h1>

            <p className="text-brand-gray-light text-lg md:text-xl max-w-xl leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
              Доставка сыпучих материалов, аренда спецтехники, вывоз мусора. Работаем по Москве и области — круглосуточно.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
              <Link
                to="/calculator"
                className="inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-8 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-brand-orange-dark transition-colors"
              >
                <Icon name="Calculator" size={20} />
                Рассчитать стоимость
              </Link>
              <a
                href="tel:+78001234567"
                className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-white hover:text-brand-black transition-all"
              >
                <Icon name="Phone" size={20} />
                Позвонить сейчас
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats ticker */}
      <section className="bg-brand-orange py-5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...stats, ...stats, ...stats].map((s, i) => (
            <div key={i} className="flex items-center gap-3 mr-12">
              <span className="font-oswald text-3xl text-white tracking-wider">{s.number}</span>
              <span className="text-white/70 text-sm uppercase tracking-widest">{s.label}</span>
              <span className="text-white/40 mx-4">◆</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-brand-orange font-oswald text-sm tracking-[0.3em] uppercase">Что мы делаем</span>
            <h2 className="font-oswald text-4xl md:text-6xl text-brand-black mt-2 orange-line">НАШИ УСЛУГИ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link
                key={s.href}
                to={s.href}
                className={`group relative overflow-hidden hover-lift ${s.color} p-8 flex flex-col justify-between min-h-[320px]`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div>
                  <Icon name={s.icon as any} size={40} className="text-white mb-6 opacity-90" />
                  <h3 className="font-oswald text-2xl md:text-3xl text-white leading-tight mb-4 uppercase">{s.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-white font-oswald text-sm tracking-widest uppercase mt-8 group-hover:gap-4 transition-all">
                  Подробнее
                  <Icon name="ArrowRight" size={16} />
                </div>
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-white/10" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-white/10" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Materials price list */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
            <div>
              <span className="text-brand-orange font-oswald text-sm tracking-[0.3em] uppercase">Актуальные цены</span>
              <h2 className="font-oswald text-4xl md:text-5xl text-brand-black mt-2 orange-line">МАТЕРИАЛЫ</h2>
            </div>
            <Link to="/delivery" className="inline-flex items-center gap-2 text-brand-orange font-oswald text-sm tracking-widest uppercase hover:gap-4 transition-all">
              Все материалы <Icon name="ArrowRight" size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {materials.map((mat) => (
              <div key={mat.name} className="bg-white border border-brand-black/10 p-6 flex items-center justify-between hover:border-brand-orange hover:shadow-lg transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-black flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                    <Icon name={mat.icon as any} size={22} className="text-white" />
                  </div>
                  <span className="font-golos font-semibold text-brand-black">{mat.name}</span>
                </div>
                <span className="font-oswald text-brand-orange text-lg whitespace-nowrap">{mat.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/calculator"
              className="inline-flex items-center gap-3 bg-brand-black text-white px-10 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-brand-orange transition-colors"
            >
              <Icon name="Calculator" size={20} />
              Рассчитать точную стоимость
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 bg-brand-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-brand-orange font-oswald text-sm tracking-[0.3em] uppercase">Почему выбирают нас</span>
            <h2 className="font-oswald text-4xl md:text-6xl text-white mt-2">НАШИ<br /><span className="text-brand-orange">ПРЕИМУЩЕСТВА</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={b.title} className="border border-white/10 p-8 hover:border-brand-orange transition-all group">
                <div className="w-14 h-14 bg-brand-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name={b.icon as any} size={26} className="text-white" />
                </div>
                <h3 className="font-oswald text-xl text-white uppercase mb-3">{b.title}</h3>
                <p className="text-brand-gray-light text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo banner */}
      <section className="relative h-80 overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/21894189-b302-4932-abcf-69f56441957c/files/d065482f-e282-4bf9-90ef-d1499b0b65a5.jpg"
          alt="Спецтехника"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-black/60 flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-oswald text-4xl md:text-6xl text-white uppercase mb-6">Весь парк — в вашем распоряжении</h2>
            <Link to="/equipment" className="inline-flex items-center gap-3 bg-brand-orange text-white px-10 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-brand-orange-dark transition-colors">
              Арендовать технику <Icon name="ArrowRight" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-brand-orange font-oswald text-sm tracking-[0.3em] uppercase">Они уже работают с нами</span>
            <h2 className="font-oswald text-4xl md:text-5xl text-brand-black mt-2 orange-line">ОТЗЫВЫ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="border border-brand-black/10 p-8 hover:border-brand-orange hover:shadow-xl transition-all group">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-brand-orange fill-brand-orange" />
                  ))}
                </div>
                <p className="text-brand-black/80 leading-relaxed mb-6 text-sm">«{r.text}»</p>
                <div className="flex items-center gap-3 pt-4 border-t border-brand-black/10">
                  <div className="w-10 h-10 bg-brand-orange flex items-center justify-center font-oswald text-white text-lg">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-oswald text-brand-black uppercase text-sm">{r.name}</div>
                    <div className="text-brand-gray-light text-xs">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
            <div>
              <span className="text-brand-orange font-oswald text-sm tracking-[0.3em] uppercase">Полезная информация</span>
              <h2 className="font-oswald text-4xl md:text-5xl text-brand-black mt-2 orange-line">БЛОГ</h2>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-2 text-brand-orange font-oswald text-sm tracking-widest uppercase hover:gap-4 transition-all">
              Все статьи <Icon name="ArrowRight" size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.href} to={post.href} className="bg-white p-8 group hover:shadow-xl transition-all border border-transparent hover:border-brand-orange">
                <div className="inline-block bg-brand-orange text-white font-oswald text-xs tracking-widest px-3 py-1 uppercase mb-5">{post.tag}</div>
                <h3 className="font-oswald text-xl text-brand-black uppercase leading-tight mb-4 group-hover:text-brand-orange transition-colors">{post.title}</h3>
                <div className="flex items-center gap-2 text-brand-gray-light text-sm mt-auto">
                  <Icon name="Calendar" size={14} />
                  {post.date}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-orange relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-oswald text-4xl md:text-7xl text-white uppercase mb-6 leading-none">
            НУЖНА<br />КОНСУЛЬТАЦИЯ?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Оставьте заявку — менеджер перезвонит в течение 10 минут и ответит на все вопросы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacts"
              className="inline-flex items-center justify-center gap-3 bg-white text-brand-orange px-10 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-brand-black hover:text-white transition-all"
            >
              <Icon name="MessageSquare" size={20} />
              Оставить заявку
            </Link>
            <a
              href="tel:+78001234567"
              className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-10 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-white hover:text-brand-orange transition-all"
            >
              <Icon name="Phone" size={20} />
              +7 (800) 123-45-67
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
