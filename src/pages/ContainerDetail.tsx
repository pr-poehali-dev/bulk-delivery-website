import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";
import { getContainerBySlug } from "@/data/containers";
import { useSeo, useJsonLd } from "@/hooks/useSeo";

const SEND_LEAD_URL = "https://functions.poehali.dev/c38f5417-f5e4-4d04-9048-d751bc55b060";

export default function ContainerDetail() {
  const { slug } = useParams();
  const item = slug ? getContainerBySlug(slug) : undefined;

  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useSeo(
    item
      ? { title: item.metaTitle, description: item.metaDescription, keywords: item.keywords }
      : { title: "Контейнер не найден", description: "" }
  );

  useJsonLd(
    item
      ? {
          "@context": "https://schema.org",
          "@type": "Product",
          name: item.name,
          description: item.heroDesc,
          offers: {
            "@type": "Offer",
            priceCurrency: "RUB",
            price: item.price.replace(/\D/g, ""),
            availability: "https://schema.org/InStock",
          },
        }
      : {}
  );

  if (!item) return <Navigate to="/garbage" replace />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      setError("Укажите телефон для связи");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch(SEND_LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Клиент со страницы контейнера",
          phone,
          message: `Контейнер: ${item.name}`,
          source: `Страница: ${item.name}`,
        }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError("Не удалось отправить. Позвоните нам: +7 (995) 398-54-20");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-brand-black py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <Link to="/" className="text-brand-gray-light text-sm hover:text-brand-orange transition-colors font-golos">Главная</Link>
            <Icon name="ChevronRight" size={14} className="text-brand-gray-light" />
            <Link to="/garbage" className="text-brand-gray-light text-sm hover:text-brand-orange transition-colors font-golos">Вывоз мусора</Link>
            <Icon name="ChevronRight" size={14} className="text-brand-gray-light" />
            <span className="text-brand-orange text-sm font-golos">{item.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <div className="w-16 h-16 bg-brand-orange flex items-center justify-center mb-6">
                <Icon name="Trash2" size={30} className="text-white" />
              </div>
              <h1 className="font-oswald text-4xl md:text-6xl text-white uppercase leading-none mb-6">
                {item.name}
              </h1>
              <p className="text-brand-gray-light text-lg leading-relaxed mb-8">{item.heroDesc}</p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+79953985420" className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-white hover:text-brand-black transition-all">
                  <Icon name="Phone" size={20} />
                  Позвонить
                </a>
              </div>
            </div>

            {/* Order form */}
            <div className="bg-white p-8">
              <div className="font-oswald text-brand-orange text-4xl mb-1">{item.price}</div>
              <div className="text-brand-gray-mid text-sm mb-6 font-golos">за заказ</div>
              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-oswald text-xs tracking-[0.2em] uppercase text-brand-black mb-2">Телефон *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full border border-brand-black/20 px-4 py-3 font-golos text-brand-black focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>
                  {error && <p className="text-red-600 text-sm">{error}</p>}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brand-orange text-white py-4 font-oswald text-lg tracking-wider uppercase hover:bg-brand-orange-dark transition-colors disabled:opacity-60"
                  >
                    {loading ? "Отправляем..." : "Заказать контейнер"}
                  </button>
                </form>
              ) : (
                <div className="text-center py-6">
                  <Icon name="CheckCircle" size={40} className="text-green-600 mx-auto mb-3" />
                  <p className="font-oswald text-brand-black uppercase">Заявка принята!</p>
                  <p className="text-brand-gray-mid text-sm mt-1">Перезвоним в течение 10 минут</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <span className="text-brand-orange font-oswald text-sm tracking-[0.3em] uppercase">Характеристики</span>
            <h2 className="font-oswald text-3xl md:text-4xl text-brand-black mt-2 orange-line">
              ПАРАМЕТРЫ КОНТЕЙНЕРА
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {item.specs.map((s) => (
              <div key={s.label} className="border border-brand-black/10 p-5 flex justify-between items-center gap-4">
                <span className="text-brand-gray-mid text-sm font-golos">{s.label}</span>
                <span className="font-oswald text-brand-black text-right">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications & advantages */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-oswald text-3xl text-brand-black uppercase mb-6 orange-line pb-3">Когда заказывают</h2>
            <ul className="space-y-3">
              {item.applications.map((a) => (
                <li key={a} className="flex items-start gap-3 bg-white p-4 border border-brand-black/10">
                  <Icon name="CheckCircle2" size={18} className="text-brand-orange shrink-0 mt-0.5" />
                  <span className="text-brand-gray-mid font-golos">{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-oswald text-3xl text-brand-black uppercase mb-6 orange-line pb-3">Почему мы</h2>
            <ul className="space-y-3">
              {item.advantages.map((a) => (
                <li key={a} className="flex items-start gap-3 bg-white p-4 border border-brand-black/10">
                  <Icon name="Star" size={18} className="text-brand-orange shrink-0 mt-0.5" />
                  <span className="text-brand-gray-mid font-golos">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-oswald text-3xl text-brand-black uppercase mb-8 orange-line pb-3">Частые вопросы</h2>
          <div className="space-y-4">
            {item.faq.map((f) => (
              <div key={f.q} className="border border-brand-black/10 p-6">
                <h3 className="font-oswald text-lg text-brand-black uppercase mb-2">{f.q}</h3>
                <p className="text-brand-gray-mid font-golos leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-oswald text-4xl md:text-5xl text-white uppercase mb-6">
            Заказать {item.name.toLowerCase()}
          </h2>
          <p className="text-brand-gray-light text-lg mb-10 max-w-xl mx-auto">Подадим контейнер в день заказа по Ростову-на-Дону, Аксаю и Батайску</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/calculator" className="inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-10 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-brand-orange-dark transition-colors">
              <Icon name="Calculator" size={20} />
              Рассчитать стоимость
            </Link>
            <a href="tel:+79953985420" className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-10 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-white hover:text-brand-black transition-all">
              <Icon name="Phone" size={20} />
              +7 (995) 398-54-20
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
