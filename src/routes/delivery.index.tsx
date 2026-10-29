import { createFileRoute } from "@tanstack/react-router";
import Delivery from "@/pages/Delivery";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/delivery/")({
  component: Delivery,
  head: () =>
    seoHead({
      title: "Доставка сыпучих материалов в Ростове-на-Дону — щебень, песок, отсев | РостовТехРезерв",
      description:
        "Доставка щебня, песка, отсева, глины, ФАЛ, торфа, керамзита и других сыпучих материалов в Ростове-на-Дону, Аксае и Батайске. Заявки до 17:00 — доставка в день обращения.",
      keywords: "доставка сыпучих материалов ростов-на-дону, купить щебень песок отсев глину",
      path: "/delivery",
    }),
});
