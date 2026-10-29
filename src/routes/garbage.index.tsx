import { createFileRoute } from "@tanstack/react-router";
import Garbage from "@/pages/Garbage";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/garbage/")({
  component: Garbage,
  head: () =>
    seoHead({
      title: "Вывоз мусора в Ростове-на-Дону — Газель, ЗИЛ, КамАЗ с грузчиками и экскаватором | РостовТехРезерв",
      description:
        "Вывоз мусора в Ростове-на-Дону, Аксае и Батайске. Газели, ЗИЛы, КамАЗы 10 и 20 куб.м, погрузка грузчиками или экскаватором. КамАЗ с экскаватором — от 16 000 ₽. Заявки до 17:00.",
      keywords: "вывоз мусора ростов-на-дону, вывоз мусора камаз, вывоз мусора газель, вывоз строительного мусора, камаз с экскаватором",
      path: "/garbage",
    }),
});
