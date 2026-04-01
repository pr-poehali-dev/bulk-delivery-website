import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

const posts = [
  {
    slug: "sheben-fraktsiya",
    title: "Как выбрать фракцию щебня для фундамента",
    excerpt: "Разбираемся, какой щебень нужен для ленточного, плитного и свайного фундамента. Почему нельзя брать первый попавшийся.",
    date: "15 ноября 2024",
    tag: "Материалы",
    readTime: "5 мин",
  },
  {
    slug: "musor-posle-remonta",
    title: "Вывоз мусора после ремонта: что важно знать",
    excerpt: "Какой контейнер выбрать, что нельзя выбрасывать, как не получить штраф. Полное руководство для владельца квартиры.",
    date: "2 ноября 2024",
    tag: "Советы",
    readTime: "7 мин",
  },
  {
    slug: "arenda-ekskavatora",
    title: "Аренда экскаватора: на что обратить внимание",
    excerpt: "Гусеничный или колёсный? Какой ковш нужен для вашей задачи? Как не переплатить при аренде спецтехники.",
    date: "20 октября 2024",
    tag: "Спецтехника",
    readTime: "6 мин",
  },
  {
    slug: "pesok-dlya-stroitelstva",
    title: "Речной vs карьерный песок: в чём разница",
    excerpt: "Сравниваем два вида песка по составу, цене и применению. Когда стоит переплатить за речной?",
    date: "10 октября 2024",
    tag: "Материалы",
    readTime: "4 мин",
  },
  {
    slug: "plodorodniy-grunt",
    title: "Плодородный грунт: сколько нужно для участка",
    excerpt: "Формула расчёта объёма грунта для газона, огорода и клумб. Таблица норм слоя для разных культур.",
    date: "1 октября 2024",
    tag: "Советы",
    readTime: "3 мин",
  },
  {
    slug: "buldozer-ili-ekskavatora",
    title: "Бульдозер vs экскаватор: что выбрать для планировки",
    excerpt: "Ошибка в выборе техники стоит денег и времени. Рассказываем, когда что нужно.",
    date: "18 сентября 2024",
    tag: "Спецтехника",
    readTime: "5 мин",
  },
];

const tags = ["Все", "Материалы", "Спецтехника", "Советы"];

export default function Blog() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-brand-black py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <Link to="/" className="text-brand-gray-light text-sm hover:text-brand-orange transition-colors">Главная</Link>
            <Icon name="ChevronRight" size={14} className="text-brand-gray-light" />
            <span className="text-brand-orange text-sm">Блог</span>
          </div>
          <h1 className="font-oswald text-5xl md:text-7xl text-white uppercase leading-none mb-4">
            БЛОГ И<br /><span className="text-brand-orange">СТАТЬИ</span>
          </h1>
          <p className="text-brand-gray-light text-xl max-w-xl">Полезные материалы о строительстве, технике и работе с грунтом</p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-12">
            {tags.map((tag) => (
              <button
                key={tag}
                className={`px-5 py-2 font-oswald text-sm tracking-widest uppercase transition-all border ${
                  tag === "Все"
                    ? "bg-brand-orange text-white border-brand-orange"
                    : "border-brand-black/20 text-brand-black hover:border-brand-orange hover:text-brand-orange bg-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className={`group bg-white border border-transparent hover:border-brand-orange hover:shadow-xl transition-all overflow-hidden ${
                  i === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="h-2 bg-brand-orange" />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-5">
                    <span className="bg-brand-orange text-white font-oswald text-xs tracking-widest px-3 py-1 uppercase">{post.tag}</span>
                    <span className="text-brand-gray-light text-xs flex items-center gap-1">
                      <Icon name="Clock" size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-oswald text-xl text-brand-black uppercase leading-tight mb-4 group-hover:text-brand-orange transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-brand-gray-mid text-sm leading-relaxed mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-brand-black/10">
                    <span className="text-brand-gray-light text-xs flex items-center gap-1">
                      <Icon name="Calendar" size={12} />
                      {post.date}
                    </span>
                    <span className="text-brand-orange font-oswald text-xs tracking-widest uppercase flex items-center gap-1 group-hover:gap-3 transition-all">
                      Читать <Icon name="ArrowRight" size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-oswald text-3xl md:text-5xl text-white uppercase mb-4">Остались вопросы?</h2>
          <p className="text-brand-gray-light mb-8">Наши специалисты ответят на любой вопрос по строительным материалам и технике</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/faq" className="inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-8 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-brand-orange-dark transition-colors">
              <Icon name="HelpCircle" size={20} />
              Вопросы и ответы
            </Link>
            <a href="tel:+78001234567" className="inline-flex items-center justify-center gap-3 border border-white text-white px-8 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-white hover:text-brand-black transition-all">
              <Icon name="Phone" size={20} />
              Позвонить нам
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
