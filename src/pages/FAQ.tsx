import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

const faqCategories = [
  {
    category: "Доставка материалов",
    icon: "Package",
    questions: [
      {
        q: "Какой минимальный объём для доставки?",
        a: "Минимальный объём для доставки — 5 тонн. При заказе меньшего объёма возможна наценка за неполный рейс. Уточняйте у менеджера.",
      },
      {
        q: "Сколько времени занимает доставка?",
        a: "Стандартно — в день заказа, если заявка оформлена до 14:00. Экспресс-доставка в течение 2–4 часов доступна за дополнительную плату.",
      },
      {
        q: "Как подтвердить качество материала?",
        a: "На все сыпучие материалы есть сертификаты соответствия ГОСТ. По запросу предоставляем паспорт качества на каждую партию.",
      },
      {
        q: "Можно ли заказать доставку в выходные?",
        a: "Да, работаем 7 дней в неделю, включая праздники. Стоимость доставки в выходные — без наценки.",
      },
    ],
  },
  {
    category: "Аренда спецтехники",
    icon: "Settings",
    questions: [
      {
        q: "Какой минимальный срок аренды?",
        a: "Минимальный заказ — 4 часа, включая время подачи техники на объект. Сутки стоят дешевле, чем 4 часа × 2.",
      },
      {
        q: "Нужен ли оператор или можно арендовать без него?",
        a: "Вся наша техника предоставляется только с опытным машинистом. Это условие безопасности и нашей ответственности за результат.",
      },
      {
        q: "Техника сломалась во время работы — что делать?",
        a: "Мы заменим технику в течение 1–2 часов. Время простоя не тарифицируется. Все случаи поломок крайне редки — парк проходит ТО каждые 150 часов.",
      },
      {
        q: "До какого расстояния от МКАД работаете?",
        a: "Работаем в Москве и Московской области, до 150 км от МКАД. Выезд за пределы 30 км рассчитывается индивидуально.",
      },
    ],
  },
  {
    category: "Вывоз мусора",
    icon: "Trash2",
    questions: [
      {
        q: "Как долго контейнер стоит на объекте?",
        a: "Стандартно — 3 дня включено в стоимость. Каждый дополнительный день — 500 ₽. Максимальный срок — 30 дней.",
      },
      {
        q: "Какой мусор нельзя выбрасывать в контейнер?",
        a: "Запрещены: ртутьсодержащие отходы, аккумуляторы, покрышки, жидкие отходы, взрывоопасные вещества. Строительный мусор, мебель, техника — принимаем.",
      },
      {
        q: "Предоставляете ли вы документы на утилизацию?",
        a: "Да, выдаём талон к путевому листу и справку об утилизации. Для юридических лиц — полный пакет документов с подписью.",
      },
      {
        q: "Куда вы вывозите мусор?",
        a: "На лицензированные полигоны ТКО и переработки. Металл, бумага, стекло — на вторсырьё. Всё законно и экологично.",
      },
    ],
  },
  {
    category: "Оплата и документы",
    icon: "CreditCard",
    questions: [
      {
        q: "Как можно оплатить?",
        a: "Принимаем наличные, банковские карты (через терминал) и безналичный расчёт по счёту для юридических лиц. Работаем с НДС и без.",
      },
      {
        q: "Работаете ли вы с юридическими лицами?",
        a: "Да, заключаем договоры с ООО, ИП и физическими лицами. Для юрлиц — полный пакет закрывающих документов: счёт, акт, накладная, счёт-фактура.",
      },
      {
        q: "Нужна ли предоплата?",
        a: "Для первого заказа — предоплата 50%. Постоянные клиенты работают на постоплате в рамках договора.",
      },
    ],
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
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
            <span className="text-brand-orange text-sm">Вопросы и ответы</span>
          </div>
          <h1 className="font-oswald text-5xl md:text-7xl text-white uppercase leading-none mb-4">
            ВОПРОСЫ<br /><span className="text-brand-orange">И ОТВЕТЫ</span>
          </h1>
          <p className="text-brand-gray-light text-xl max-w-xl">Отвечаем на самые частые вопросы о наших услугах</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-orange flex items-center justify-center">
                    <Icon name={cat.icon as any} size={22} className="text-white" />
                  </div>
                  <h2 className="font-oswald text-2xl text-brand-black uppercase">{cat.category}</h2>
                </div>

                <div className="space-y-3">
                  {cat.questions.map((q, qi) => {
                    const key = `${cat.category}-${qi}`;
                    const isOpen = openItems[key];
                    return (
                      <div key={qi} className={`bg-white border transition-all ${isOpen ? "border-brand-orange" : "border-brand-black/10"}`}>
                        <button
                          onClick={() => toggle(key)}
                          className="w-full flex items-center justify-between gap-4 p-6 text-left"
                        >
                          <span className="font-oswald text-lg text-brand-black uppercase leading-tight">{q.q}</span>
                          <div className={`w-8 h-8 flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-brand-orange" : "bg-brand-black/10"}`}>
                            <Icon name={isOpen ? "Minus" : "Plus"} size={16} className={isOpen ? "text-white" : "text-brand-black"} />
                          </div>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6 border-t border-brand-black/5">
                            <p className="text-brand-gray-mid leading-relaxed pt-4 font-golos">{q.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-16 bg-brand-black p-10 text-center">
            <h3 className="font-oswald text-3xl text-white uppercase mb-4">Не нашли ответа?</h3>
            <p className="text-brand-gray-light mb-8">Позвоните нам — ответим на любой вопрос за 2 минуты</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+78001234567" className="inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-8 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-brand-orange-dark transition-colors">
                <Icon name="Phone" size={20} />
                Позвонить
              </a>
              <Link to="/contacts" className="inline-flex items-center justify-center gap-3 border border-white text-white px-8 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-white hover:text-brand-black transition-all">
                <Icon name="MessageSquare" size={20} />
                Написать нам
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
