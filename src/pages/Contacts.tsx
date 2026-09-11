import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

const SEND_LEAD_URL = "https://functions.poehali.dev/c38f5417-f5e4-4d04-9048-d751bc55b060";

export default function Contacts() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(SEND_LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "Страница Контакты" }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError("Не удалось отправить заявку. Позвоните нам: +7 (995) 398-54-20");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-brand-black py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <Link to="/" className="text-brand-gray-light text-sm hover:text-brand-orange transition-colors">Главная</Link>
            <Icon name="ChevronRight" size={14} className="text-brand-gray-light" />
            <span className="text-brand-orange text-sm">Контакты</span>
          </div>
          <h1 className="font-oswald text-5xl md:text-7xl text-white uppercase leading-none mb-4">
            СВЯЖИТЕСЬ<br /><span className="text-brand-orange">С НАМИ</span>
          </h1>
          <p className="text-brand-gray-light text-xl max-w-xl">Работаем 24/7. Менеджер ответит в течение 10 минут.</p>
        </div>
      </section>

      {/* Contact blocks */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-10 border border-brand-black/10">
              <h2 className="font-oswald text-3xl text-brand-black uppercase mb-8 orange-line pb-4">Оставить заявку</h2>
              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-oswald text-xs tracking-[0.2em] uppercase text-brand-black mb-2">Ваше имя *</label>
                    <input
                      type="text"
                      required
                      placeholder="Как вас зовут?"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-brand-black/20 px-4 py-3 font-golos text-brand-black focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-oswald text-xs tracking-[0.2em] uppercase text-brand-black mb-2">Телефон *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-brand-black/20 px-4 py-3 font-golos text-brand-black focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-oswald text-xs tracking-[0.2em] uppercase text-brand-black mb-2">Сообщение</label>
                    <textarea
                      rows={4}
                      placeholder="Опишите задачу..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-brand-black/20 px-4 py-3 font-golos text-brand-black focus:outline-none focus:border-brand-orange transition-colors resize-none"
                    />
                  </div>
                  {error && (
                    <p className="text-red-600 text-sm text-center">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brand-orange text-white py-4 font-oswald text-lg tracking-wider uppercase hover:bg-brand-orange-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Отправляем..." : "Отправить заявку"}
                  </button>
                  <p className="text-brand-gray-light text-xs text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="CheckCircle" size={40} className="text-green-600" />
                  </div>
                  <h3 className="font-oswald text-2xl text-brand-black uppercase mb-3">Заявка отправлена!</h3>
                  <p className="text-brand-gray-mid">Менеджер перезвонит вам в течение 10 минут.</p>
                </div>
              )}
            </div>

            {/* Contacts info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-oswald text-3xl text-brand-black uppercase mb-8 orange-line pb-4">Контактные данные</h2>
              </div>
              {[
                {
                  icon: "Phone",
                  title: "Телефон (24/7)",
                  lines: ["+7 (995) 398-54-20"],
                },
                {
                  icon: "Mail",
                  title: "Email",
                  lines: ["info@rostovtehrezerv.ru"],
                },
                {
                  icon: "MapPin",
                  title: "База",
                  lines: ["г. Ростов-на-Дону, ул. Юго-Восточная промзона, 17/1", "ПН-ПТ: 8:00–20:00, СБ: 9:00–17:00"],
                },
                {
                  icon: "Warehouse",
                  title: "Диспетчерская",
                  lines: ["Принимает заявки 24/7", "+7 (995) 398-54-20"],
                },
              ].map((c) => (
                <div key={c.title} className="flex items-start gap-4 p-6 bg-white border border-brand-black/10 hover:border-brand-orange transition-colors group">
                  <div className="w-12 h-12 bg-brand-black group-hover:bg-brand-orange transition-colors flex items-center justify-center shrink-0">
                    <Icon name={c.icon as any} size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-oswald text-sm tracking-widest uppercase text-brand-black mb-2">{c.title}</h4>
                    {c.lines.map((l) => (
                      <p key={l} className="text-brand-gray-mid text-sm font-golos">{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 border border-brand-black/10 relative overflow-hidden">
            <iframe
              src="https://yandex.ru/map-widget/v1/?text=Ростов-на-Дону%2C%20улица%20Юго-Восточная%20промзона%2C%2017%2F1&z=15"
              width="100%"
              height="400"
              frameBorder="0"
              title="Карта базы РостовТехРезерв"
              className="w-full h-[400px] grayscale-[20%]"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}