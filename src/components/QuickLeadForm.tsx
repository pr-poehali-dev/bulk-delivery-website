import { useState } from "react";
import Icon from "@/components/ui/icon";
import { sendLead } from "@/lib/leads";

interface QuickLeadFormProps {
  source: string;
  title?: string;
  subtitle?: string;
}

export default function QuickLeadForm({
  source,
  title = "Нужна помощь с заказом?",
  subtitle = "Оставьте телефон, и менеджер перезвонит в течение 10 минут",
}: QuickLeadFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      setError("Укажите телефон для связи");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await sendLead({
        name: name.trim() || "Читатель блога",
        phone,
        message: comment,
        source,
      });
      setSent(true);
    } catch {
      setError("Не удалось отправить. Позвоните нам: +7 (995) 398-54-20");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border border-brand-black/20 px-4 py-3 font-golos text-brand-black bg-white focus:outline-none focus:border-brand-orange transition-colors";

  return (
    <section className="py-16 bg-brand-orange">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white p-8 md:p-10">
          {sent ? (
            <div className="text-center py-6">
              <Icon name="CheckCircle" size={44} className="text-green-600 mx-auto mb-4" />
              <h2 className="font-oswald text-2xl text-brand-black uppercase mb-2">Заявка принята!</h2>
              <p className="text-brand-gray-mid font-golos">Менеджер перезвонит вам в течение 10 минут.</p>
            </div>
          ) : (
            <>
              <h2 className="font-oswald text-3xl text-brand-black uppercase mb-2">{title}</h2>
              <p className="text-brand-gray-mid font-golos mb-6">{subtitle}</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <textarea
                  rows={3}
                  placeholder="Что нужно: материал, техника или вывоз мусора, адрес, объём"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className={`${inputClass} resize-none`}
                />
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-black text-white py-4 font-oswald text-lg tracking-wider uppercase hover:bg-brand-orange transition-colors disabled:opacity-60"
                >
                  {loading ? "Отправляем..." : "Отправить заявку"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
