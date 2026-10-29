import { createFileRoute } from "@tanstack/react-router";
import Blog from "@/pages/Blog";
import { seoHead } from "@/lib/seo";
export const Route = createFileRoute("/blog/")({
  component: Blog,
  head: () =>
    seoHead({
      title: "Блог РостовТехРезерв — советы по материалам, спецтехнике и вывозу мусора",
      description:
        "Полезные статьи о щебне, песке, отсеве, глине, аренде спецтехники и вывозе мусора в Ростове-на-Дону: как выбрать, как рассчитать и как сэкономить.",
      keywords: "блог о строительстве, как выбрать щебень, аренда спецтехники советы, вывоз мусора советы, ростов-на-дону",
      path: "/blog",
    }),
});
