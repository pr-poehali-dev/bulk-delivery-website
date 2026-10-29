import { createFileRoute, redirect } from "@tanstack/react-router";
import LandingPage from "@/pages/LandingPage";
import { equipmentGroup } from "@/data/equipmentItems";
import { landingJsonLd, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/equipment/$slug")({
  loader: ({ params }) => {
    const item = equipmentGroup.items.find((i) => i.slug === params.slug);
    if (!item) throw redirect({ to: "/equipment", replace: true });
    return { slug: item.slug };
  },
  head: ({ loaderData }) => {
    const item = loaderData ? equipmentGroup.items.find((i) => i.slug === loaderData.slug) : undefined;
    if (!item) return {};
    return seoHead({
      title: item.metaTitle,
      description: item.metaDescription,
      keywords: item.keywords,
      path: `/equipment/${item.slug}`,
      jsonLd: landingJsonLd(item),
    });
  },
  component: EquipmentLanding,
});

function EquipmentLanding() {
  return <LandingPage group={equipmentGroup} />;
}
