import { createFileRoute, redirect } from "@tanstack/react-router";
import LandingPage from "@/pages/LandingPage";
import { garbageGroup } from "@/data/garbageItems";
import { landingJsonLd, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/garbage/$slug")({
  loader: ({ params }) => {
    const item = garbageGroup.items.find((i) => i.slug === params.slug);
    if (!item) throw redirect({ to: "/garbage", replace: true });
    return { slug: item.slug };
  },
  head: ({ loaderData }) => {
    const item = loaderData ? garbageGroup.items.find((i) => i.slug === loaderData.slug) : undefined;
    if (!item) return {};
    return seoHead({
      title: item.metaTitle,
      description: item.metaDescription,
      keywords: item.keywords,
      path: `/garbage/${item.slug}`,
      jsonLd: landingJsonLd(item),
    });
  },
  component: GarbageLanding,
});

function GarbageLanding() {
  return <LandingPage group={garbageGroup} />;
}
