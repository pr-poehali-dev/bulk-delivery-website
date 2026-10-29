import { createFileRoute } from "@tanstack/react-router";
import Equipment from "@/pages/Equipment";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/equipment/")({
  component: Equipment,
  head: () =>
    seoHead({
      title: "Аренда спецтехники в Ростове-на-Дону — экскаваторы, краны, самосвалы | РостовТехРезерв",
      description:
        "Аренда спецтехники с оператором в Ростове-на-Дону, Аксае и Батайске. Экскаваторы, экскаватор-погрузчик, мини-экскаватор, автовышка, манипулятор, гидромолот, самосвалы. Заявки до 17:00 — выезд в день обращения.",
      keywords: "аренда спецтехники ростов-на-дону, экскаватор кран самосвал аренда",
      path: "/equipment",
    }),
});
