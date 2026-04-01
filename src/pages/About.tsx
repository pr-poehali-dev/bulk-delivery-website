import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

const milestones = [
  { year: "2009", event: "Основание компании. Первый самосвал, 3 сотрудника." },
  { year: "2012", event: "Расширение парка до 20 единиц. Выход в Московскую область." },
  { year: "2015", event: "Открытие собственного склада и диспетчерского центра." },
  { year: "2018", event: "Запуск услуги аренды спецтехники. Парк — 50 единиц." },
  { year: "2021", event: "Вывоз мусора с официальной лицензией на утилизацию." },
  { year: "2024", event: "80+ техники, 1200+ клиентов. Рейтинг 4.9 на Яндексе." },
];

const team = [
  { name: "Дмитрий Орлов", role: "Генеральный директор", exp: "15 лет в отрасли" },
  { name: "Андрей Макаров", role: "Начальник автопарка", exp: "Управляет 80+ единицами" },
  { name: "Светлана Кузнецова", role: "Руководитель продаж", exp: "500+ корпоративных клиентов" },
  { name: "Игорь Соколов", role: "Главный диспетчер", exp: "Координирует 24/7" },
];

const certs = [
  "Лицензия на транспортирование отходов I–IV класса",
  "ISO 9001:2015 — система менеджмента качества",
  "Аттестация персонала РОСТЕХНАДЗОР",
  "Партнёр ОАО «Московские карьеры»",
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-brand-black py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange" />
        <div className="absolute inset-0 opacity-5">
          <div className="font-oswald text-[30vw] text-white leading-none select-none pointer-events-none absolute -bottom-10 -right-10 opacity-10">15</div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <Link to="/" className="text-brand-gray-light text-sm hover:text-brand-orange transition-colors">Главная</Link>
            <Icon name="ChevronRight" size={14} className="text-brand-gray-light" />
            <span className="text-brand-orange text-sm">О компании</span>
          </div>
          <h1 className="font-oswald text-5xl md:text-7xl text-white uppercase leading-none mb-6">
            О<br /><span className="text-brand-orange">КОМПАНИИ</span>
          </h1>
          <p className="text-brand-gray-light text-xl max-w-2xl leading-relaxed">
            С 2009 года мы доставляем строительные материалы, предоставляем спецтехнику и вывозим мусор по всей Московской области.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-orange font-oswald text-sm tracking-[0.3em] uppercase">Наша философия</span>
              <h2 className="font-oswald text-4xl md:text-5xl text-brand-black uppercase mt-3 mb-6 leading-tight">
                РАБОТАЕМ КАК<br />ДЛЯ СЕБЯ
              </h2>
              <p className="text-brand-gray-mid leading-relaxed mb-5">
                ГРУЗОВИК — это не просто транспортная компания. Это команда профессионалов, которые понимают строительный бизнес изнутри. Каждый наш сотрудник знает, что стройка не ждёт.
              </p>
              <p className="text-brand-gray-mid leading-relaxed mb-8">
                Мы не делаем обещаний, которые не можем выполнить. Если сказали — к 12:00, значит в 11:45 машина уже на объекте.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { n: "1200+", l: "клиентов" },
                  { n: "80+", l: "единиц техники" },
                  { n: "15 лет", l: "на рынке" },
                  { n: "4.9★", l: "средняя оценка" },
                ].map((s) => (
                  <div key={s.n} className="border-l-4 border-brand-orange pl-4">
                    <div className="font-oswald text-3xl text-brand-black">{s.n}</div>
                    <div className="text-brand-gray-mid text-sm">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/21894189-b302-4932-abcf-69f56441957c/files/d065482f-e282-4bf9-90ef-d1499b0b65a5.jpg"
                alt="Наш парк"
                className="w-full object-cover aspect-square"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-orange p-6 w-36">
                <div className="font-oswald text-4xl text-white leading-none">15</div>
                <div className="font-golos text-white text-xs mt-1">лет в отрасли</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-brand-orange font-oswald text-sm tracking-[0.3em] uppercase">Наш путь</span>
            <h2 className="font-oswald text-4xl md:text-5xl text-brand-black mt-2 orange-line">ИСТОРИЯ КОМПАНИИ</h2>
          </div>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className={`flex gap-8 items-start ${i % 2 === 0 ? "" : "flex-row-reverse"} pb-8`}>
                <div className="w-24 shrink-0 text-right">
                  <span className="font-oswald text-3xl text-brand-orange">{m.year}</span>
                </div>
                <div className="w-4 flex flex-col items-center shrink-0 pt-2">
                  <div className="w-4 h-4 bg-brand-orange rounded-full" />
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-brand-orange/30 mt-2" style={{ minHeight: "40px" }} />}
                </div>
                <div className="flex-1 bg-white p-6 border border-brand-black/10">
                  <p className="text-brand-gray-mid font-golos leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-brand-orange font-oswald text-sm tracking-[0.3em] uppercase">Люди за рулём компании</span>
            <h2 className="font-oswald text-4xl md:text-5xl text-white mt-2">КОМАНДА</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((t) => (
              <div key={t.name} className="border border-white/10 p-8 hover:border-brand-orange transition-colors">
                <div className="w-16 h-16 bg-brand-orange font-oswald text-2xl text-white flex items-center justify-center mb-6">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="font-oswald text-xl text-white uppercase mb-1">{t.name}</h3>
                <div className="text-brand-orange text-sm mb-2 font-golos">{t.role}</div>
                <div className="text-brand-gray-light text-xs">{t.exp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-brand-orange font-oswald text-sm tracking-[0.3em] uppercase">Документы и стандарты</span>
            <h2 className="font-oswald text-4xl text-brand-black mt-2 orange-line">ЛИЦЕНЗИИ И СЕРТИФИКАТЫ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certs.map((c) => (
              <div key={c} className="flex items-start gap-4 p-6 border border-brand-black/10 hover:border-brand-orange transition-colors">
                <div className="w-10 h-10 bg-brand-orange flex items-center justify-center shrink-0">
                  <Icon name="Award" size={20} className="text-white" />
                </div>
                <span className="font-golos text-brand-black leading-relaxed">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
