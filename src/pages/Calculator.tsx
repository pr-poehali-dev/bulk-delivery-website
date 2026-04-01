import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

type ServiceType = "delivery" | "equipment" | "garbage";

const materialOptions = [
  { id: "sheben", name: "Щебень", pricePerTon: 1200 },
  { id: "sand", name: "Песок", pricePerTon: 900 },
  { id: "torf", name: "Торф", pricePerTon: 800 },
  { id: "keramzit", name: "Керамзит", pricePerTon: 1500 },
  { id: "grunt", name: "Плодородный грунт", pricePerTon: 700 },
  { id: "pgs", name: "ПГС", pricePerTon: 850 },
  { id: "chernozem", name: "Чернозём", pricePerTon: 1100 },
];

const equipmentOptions = [
  { id: "excavator_g", name: "Экскаватор гусеничный", pricePerHour: 3500 },
  { id: "excavator_w", name: "Экскаватор колёсный", pricePerHour: 3000 },
  { id: "buldozer", name: "Бульдозер", pricePerHour: 4000 },
  { id: "kran", name: "Автокран", pricePerHour: 4500 },
  { id: "pogr", name: "Погрузчик фронтальный", pricePerHour: 2800 },
  { id: "samosval", name: "Самосвал 10–20 т", pricePerHour: 2500 },
];

const containerOptions = [
  { id: "c8", name: "Контейнер 8 м³", price: 6500 },
  { id: "c15", name: "Контейнер 15 м³", price: 9000 },
  { id: "c20", name: "Контейнер 20 м³", price: 11500 },
  { id: "c27", name: "Контейнер 27 м³", price: 14000 },
];

const distanceSurcharge = (km: number) => {
  if (km <= 30) return 0;
  if (km <= 60) return 1500;
  if (km <= 100) return 3000;
  return 5000;
};

export default function Calculator() {
  const [service, setService] = useState<ServiceType>("delivery");
  const [material, setMaterial] = useState(materialOptions[0].id);
  const [tons, setTons] = useState(5);
  const [equipment, setEquipment] = useState(equipmentOptions[0].id);
  const [hours, setHours] = useState(4);
  const [container, setContainer] = useState(containerOptions[0].id);
  const [distance, setDistance] = useState(20);
  const [orderSent, setOrderSent] = useState(false);

  const calcDelivery = () => {
    const mat = materialOptions.find((m) => m.id === material);
    if (!mat) return 0;
    return mat.pricePerTon * tons + distanceSurcharge(distance);
  };

  const calcEquipment = () => {
    const eq = equipmentOptions.find((e) => e.id === equipment);
    if (!eq) return 0;
    return eq.pricePerHour * hours + distanceSurcharge(distance);
  };

  const calcGarbage = () => {
    const c = containerOptions.find((c) => c.id === container);
    if (!c) return 0;
    return c.price + distanceSurcharge(distance);
  };

  const total =
    service === "delivery"
      ? calcDelivery()
      : service === "equipment"
        ? calcEquipment()
        : calcGarbage();

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-brand-black py-20 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <Link to="/" className="text-brand-gray-light text-sm hover:text-brand-orange transition-colors font-golos">Главная</Link>
            <Icon name="ChevronRight" size={14} className="text-brand-gray-light" />
            <span className="text-brand-orange text-sm font-golos">Калькулятор</span>
          </div>
          <div className="w-16 h-16 bg-brand-orange flex items-center justify-center mb-8">
            <Icon name="Calculator" size={30} className="text-white" />
          </div>
          <h1 className="font-oswald text-5xl md:text-6xl text-white uppercase leading-none mb-4">
            КАЛЬКУЛЯТОР<br /><span className="text-brand-orange">СТОИМОСТИ</span>
          </h1>
          <p className="text-brand-gray-light text-xl max-w-xl">Рассчитайте примерную стоимость наших услуг прямо здесь</p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white border border-brand-black/10 p-8 md:p-12">
            {/* Service tabs */}
            <div className="mb-10">
              <h2 className="font-oswald text-2xl text-brand-black uppercase mb-5">1. Выберите услугу</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {([
                  { id: "delivery", label: "Доставка материалов", icon: "Package" },
                  { id: "equipment", label: "Аренда спецтехники", icon: "Settings" },
                  { id: "garbage", label: "Вывоз мусора", icon: "Trash2" },
                ] as const).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setService(s.id)}
                    className={`flex items-center gap-3 p-4 border-2 transition-all font-oswald text-sm tracking-wider uppercase text-left ${
                      service === s.id
                        ? "border-brand-orange bg-brand-orange text-white"
                        : "border-brand-black/20 text-brand-black hover:border-brand-orange"
                    }`}
                  >
                    <Icon name={s.icon} size={20} />
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Service-specific options */}
            <div className="mb-10">
              <h2 className="font-oswald text-2xl text-brand-black uppercase mb-5">2. Параметры</h2>

              {service === "delivery" && (
                <div className="space-y-6">
                  <div>
                    <label className="block font-oswald text-sm tracking-widest uppercase text-brand-black mb-3">Материал</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {materialOptions.map((m) => (
                        <button
                          key={m.id}
                          onClick={() => setMaterial(m.id)}
                          className={`px-4 py-3 text-sm font-golos border transition-all ${
                            material === m.id
                              ? "border-brand-orange bg-brand-orange/10 text-brand-orange font-semibold"
                              : "border-brand-black/15 text-brand-black hover:border-brand-orange"
                          }`}
                        >
                          {m.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block font-oswald text-sm tracking-widest uppercase text-brand-black mb-3">
                      Объём: <span className="text-brand-orange">{tons} тонн</span>
                    </label>
                    <input
                      type="range" min={1} max={100} value={tons}
                      onChange={(e) => setTons(Number(e.target.value))}
                      className="w-full accent-brand-orange"
                    />
                    <div className="flex justify-between text-xs text-brand-gray-mid mt-1">
                      <span>1 т</span><span>100 т</span>
                    </div>
                  </div>
                </div>
              )}

              {service === "equipment" && (
                <div className="space-y-6">
                  <div>
                    <label className="block font-oswald text-sm tracking-widest uppercase text-brand-black mb-3">Техника</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {equipmentOptions.map((e) => (
                        <button
                          key={e.id}
                          onClick={() => setEquipment(e.id)}
                          className={`px-4 py-3 text-sm font-golos border text-left transition-all flex justify-between items-center ${
                            equipment === e.id
                              ? "border-brand-orange bg-brand-orange/10 text-brand-orange font-semibold"
                              : "border-brand-black/15 text-brand-black hover:border-brand-orange"
                          }`}
                        >
                          <span>{e.name}</span>
                          <span className="text-xs text-brand-gray-mid">{e.pricePerHour.toLocaleString()} ₽/час</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block font-oswald text-sm tracking-widest uppercase text-brand-black mb-3">
                      Часов работы: <span className="text-brand-orange">{hours} ч</span>
                    </label>
                    <input
                      type="range" min={4} max={24} value={hours}
                      onChange={(e) => setHours(Number(e.target.value))}
                      className="w-full accent-brand-orange"
                    />
                    <div className="flex justify-between text-xs text-brand-gray-mid mt-1">
                      <span>4 ч (минимум)</span><span>24 ч</span>
                    </div>
                  </div>
                </div>
              )}

              {service === "garbage" && (
                <div>
                  <label className="block font-oswald text-sm tracking-widest uppercase text-brand-black mb-3">Объём контейнера</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {containerOptions.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setContainer(c.id)}
                        className={`p-5 border-2 transition-all text-center ${
                          container === c.id
                            ? "border-brand-orange bg-brand-orange text-white"
                            : "border-brand-black/15 text-brand-black hover:border-brand-orange"
                        }`}
                      >
                        <div className="font-oswald text-2xl">{c.name.split(" ")[1]}</div>
                        <div className="font-golos text-xs mt-1 opacity-70">{c.price.toLocaleString()} ₽</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Distance */}
            <div className="mb-10">
              <h2 className="font-oswald text-2xl text-brand-black uppercase mb-5">3. Расстояние от МКАД</h2>
              <label className="block font-oswald text-sm tracking-widest uppercase text-brand-black mb-3">
                Удалённость: <span className="text-brand-orange">{distance} км</span>
                {distance > 30 && <span className="text-brand-gray-mid text-xs ml-2">(+{distanceSurcharge(distance).toLocaleString()} ₽)</span>}
              </label>
              <input
                type="range" min={0} max={150} value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
                className="w-full accent-brand-orange"
              />
              <div className="flex justify-between text-xs text-brand-gray-mid mt-1">
                <span>В пределах МКАД</span><span>150 км</span>
              </div>
              {distance <= 30 && (
                <div className="mt-2 text-xs text-green-600 font-golos">✓ Бесплатная доставка в пределах 30 км от МКАД</div>
              )}
            </div>

            {/* Result */}
            <div className="bg-brand-black p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="font-oswald text-brand-gray-light text-sm tracking-widest uppercase mb-2">Итоговая стоимость (ориентировочно)</div>
                <div className="font-oswald text-5xl text-white">
                  {total.toLocaleString()} <span className="text-brand-orange">₽</span>
                </div>
                <div className="text-brand-gray-light text-xs mt-2">* Точная стоимость уточняется у менеджера</div>
              </div>
              <div className="flex flex-col gap-3 w-full md:w-auto">
                {!orderSent ? (
                  <button
                    onClick={() => setOrderSent(true)}
                    className="bg-brand-orange text-white px-10 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-brand-orange-dark transition-colors whitespace-nowrap"
                  >
                    Оформить заказ
                  </button>
                ) : (
                  <div className="bg-green-600 text-white px-10 py-4 font-oswald text-sm tracking-wider uppercase text-center">
                    ✓ Заявка принята! Перезвоним.
                  </div>
                )}
                <a href="tel:+78001234567" className="border border-white/30 text-white px-10 py-4 font-oswald text-sm tracking-wider uppercase text-center hover:bg-white/10 transition-colors whitespace-nowrap">
                  Позвонить: +7 (800) 123-45-67
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
